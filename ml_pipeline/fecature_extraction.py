from Bio import SeqIO
from Bio.SeqUtils.ProtParam import ProteinAnalysis
import pandas as pd

input_file = "tb_nonredundant.fasta"

records = list(SeqIO.parse(input_file, "fasta"))

feature_data = []

for record in records:
    seq = str(record.seq)
    analysis = ProteinAnalysis(seq)

    feature_data.append({
        "ID": record.id,
        "Length": len(seq),
        "Molecular_Weight": analysis.molecular_weight(),
        "Isoelectric_Point": analysis.isoelectric_point(),
        "Aromaticity": analysis.aromaticity(),
        "Instability_Index": analysis.instability_index(),
        "GRAVY": analysis.gravy()
    })

df = pd.DataFrame(feature_data)

df.to_excel("sequence_features.xlsx", index=False)

summary = df.describe()
summary.to_excel("feature_summary.xlsx")
