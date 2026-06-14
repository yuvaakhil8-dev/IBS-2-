from transformers import BertTokenizer, BertModel
import torch
from Bio import SeqIO
import pandas as pd
import numpy as np

input_file = "tb_nonredundant.fasta"
output_file = "bert_embeddings.xlsx"
batch_size = 4  

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

print("Using device:", device)

print("Loading ProtBERT model...")
tokenizer = BertTokenizer.from_pretrained("Rostlab/prot_bert", do_lower_case=False)
model = BertModel.from_pretrained("Rostlab/prot_bert")
model = model.to(device)
model.eval()

print("Model loaded successfully.")

records = list(SeqIO.parse(input_file, "fasta"))
print("Total sequences:", len(records))

embedding_data = []

for i in range(0, len(records), batch_size):
    batch_records = records[i:i + batch_size]

    sequences = [" ".join(list(str(record.seq))) for record in batch_records]
    ids = [record.id for record in batch_records]

    encoded_input = tokenizer(
        sequences,
        return_tensors='pt',
        padding=True,
        truncation=True
    )

    encoded_input = {k: v.to(device) for k, v in encoded_input.items()}

    with torch.no_grad():
        output = model(**encoded_input)

    embeddings = output.last_hidden_state.mean(dim=1)

    embeddings = embeddings.cpu().numpy()

    for j in range(len(ids)):
        row = {"ID": ids[j]}
        for k in range(embeddings.shape[1]):
            row[f"Feature_{k+1}"] = embeddings[j][k]
        embedding_data.append(row)

    print(f"Processed batch {i//batch_size + 1}")

df = pd.DataFrame(embedding_data)
df.to_excel(output_file, index=False)

print("\n===== FEATURE EXTRACTION COMPLETE =====")
print("Saved to:", output_file)
