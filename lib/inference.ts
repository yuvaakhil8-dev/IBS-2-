import * as tf from '@tensorflow/tfjs';

// Standard 20 amino acids
const AMINO_ACIDS = 'ACDEFGHIKLMNPQRSTVWY';
const AA_MAP: Record<string, number> = {};
for (let i = 0; i < AMINO_ACIDS.length; i++) {
  AA_MAP[AMINO_ACIDS[i]] = i + 1; // 1-20, 0 is padding
}

const MAX_LEN = 800;

export function encodeSequence(seq: string): number[] {
  const encoded = new Array(MAX_LEN).fill(0);
  const upperSeq = seq.toUpperCase();
  for (let i = 0; i < Math.min(upperSeq.length, MAX_LEN); i++) {
    encoded[i] = AA_MAP[upperSeq[i]] || 0;
  }
  return encoded;
}

export async function runSiameseInference(seqA: string, seqB: string): Promise<number> {
  // Load weights
  const response = await fetch('/model/weights.json');
  const weightsJson = await response.json();

  // Helper to load a specific weight tensor
  const getWeight = (layerName: string, index: number) => {
    return tf.tensor(weightsJson[layerName][index]);
  };

  // 1. Build Shared Encoder
  const encoder = tf.sequential();
  
  encoder.add(tf.layers.embedding({
    inputDim: 21,
    outputDim: 24,
    inputLength: MAX_LEN,
    weights: [getWeight('embedding', 0)]
  }));

  encoder.add(tf.layers.conv1d({
    filters: 48,
    kernelSize: 7,
    activation: 'relu',
    padding: 'valid',
    weights: [getWeight('conv1d', 0), getWeight('conv1d', 1)]
  }));

  encoder.add(tf.layers.maxPooling1d({ poolSize: 2, strides: 2, padding: 'valid' }));

  encoder.add(tf.layers.conv1d({
    filters: 96,
    kernelSize: 5,
    activation: 'relu',
    padding: 'valid',
    weights: [getWeight('conv1d_1', 0), getWeight('conv1d_1', 1)]
  }));

  encoder.add(tf.layers.globalMaxPooling1d({}));

  encoder.add(tf.layers.dense({
    units: 96,
    activation: 'relu',
    weights: [getWeight('dense', 0), getWeight('dense', 1)]
  }));

  // 2. Encode Sequences
  const tensorA = tf.tensor2d([encodeSequence(seqA)]);
  const tensorB = tf.tensor2d([encodeSequence(seqB)]);

  const embA = encoder.predict(tensorA) as tf.Tensor;
  const embB = encoder.predict(tensorB) as tf.Tensor;

  // 3. Lambda Layers (Distance & Product)
  const diff = tf.abs(tf.sub(embA, embB));
  const prod = tf.mul(embA, embB);

  // 4. Concatenate
  const concat = tf.concat([embA, embB, diff, prod], 1);

  // 5. Final Dense Layers
  const dense1 = tf.layers.dense({
    units: 128,
    activation: 'relu',
    weights: [getWeight('dense_1', 0), getWeight('dense_1', 1)]
  });

  const dense2 = tf.layers.dense({
    units: 1,
    activation: 'sigmoid',
    weights: [getWeight('dense_2', 0), getWeight('dense_2', 1)]
  });

  const x1 = dense1.apply(concat) as tf.Tensor;
  const out = dense2.apply(x1) as tf.Tensor;

  const probArray = await out.data();
  
  // Cleanup memory
  tf.dispose([tensorA, tensorB, embA, embB, diff, prod, concat, x1, out]);
  
  return probArray[0];
}
