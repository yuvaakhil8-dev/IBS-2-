from transformers import BertTokenizer, BertModel
import torch
from Bio import SeqIO
import pandas as pd
import numpy as np

input_file = "tb_nonredundant.fasta"
output_file = "bert_embeddings.xlsx"

tokenizer = BertTokenizer.from_pretrained("Rostlab/prot_bert", do_lower_case=False)
model = BertModel.from_pretrained("Rostlab/prot_bert")

records = list(SeqIO.parse(input_file, "fasta"))

embedding_data = []

for record in records:
    sequence = " ".join(list(str(record.seq)))
    encoded_input = tokenizer(sequence, return_tensors='pt')

    with torch.no_grad():
        output = model(**encoded_input)

    embedding = output.last_hidden_state.mean(dim=1).numpy().flatten()

    row = {"ID": record.id}
    for i in range(len(embedding)):
        row[f"Feature_{i+1}"] = embedding[i]

    embedding_data.append(row)

df = pd.DataFrame(embedding_data)
df.to_excel(output_file, index=False)

print("BERT embedding feature extraction completed.")