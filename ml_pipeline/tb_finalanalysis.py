from Bio import SeqIO
from Bio.Align import PairwiseAligner
from Bio.SeqUtils.ProtParam import ProteinAnalysis
import pandas as pd
import os

input_file = "tb_nonredundant.fasta"
output_excel = "TB_Analysis_Report.xlsx"

if not os.path.exists(input_file):
    print("Error: tb_nonredundant.fasta not found.")
    exit()

records = list(SeqIO.parse(input_file, "fasta"))

if len(records) == 0:
    print("No sequences found in FASTA file.")
    exit()

print("Total sequences loaded:", len(records))

feature_data = []

for record in records:
    seq = str(record.seq)
    analysis = ProteinAnalysis(seq)

    feature_data.append({
        "ID": record.id,
        "Length": len(seq),
        "Molecular_Weight": round(analysis.molecular_weight(), 2),
        "Isoelectric_Point": round(analysis.isoelectric_point(), 2),
        "Aromaticity": round(analysis.aromaticity(), 3),
        "Instability_Index": round(analysis.instability_index(), 2),
        "GRAVY": round(analysis.gravy(), 3),
        "Aliphatic_Index": round(
            (analysis.get_amino_acids_percent().get("A", 0) * 100) +
            (analysis.get_amino_acids_percent().get("V", 0) * 100) +
            (analysis.get_amino_acids_percent().get("I", 0) * 100) +
            (analysis.get_amino_acids_percent().get("L", 0) * 100),
            2
        )
    })

feature_df = pd.DataFrame(feature_data)

summary_df = feature_df.describe()

aligner = PairwiseAligner()
aligner.mode = "global"
aligner.open_gap_score = -10
aligner.extend_gap_score = -0.5

n = len(records)
score_matrix = []
identity_matrix = []

for i in range(n):
    score_row = []
    identity_row = []
    
    for j in range(n):
        alignment = aligner.align(records[i].seq, records[j].seq)[0]
        score = alignment.score
        
        matches = sum(
            a == b for a, b in zip(alignment.target, alignment.query)
        )
        alignment_length = max(len(alignment.target), len(alignment.query))
        identity = (matches / alignment_length) * 100

        score_row.append(round(score, 2))
        identity_row.append(round(identity, 2))
    
    score_matrix.append(score_row)
    identity_matrix.append(identity_row)

ids = [record.id for record in records]

score_df = pd.DataFrame(score_matrix, index=ids, columns=ids)
identity_df = pd.DataFrame(identity_matrix, index=ids, columns=ids)

with pd.ExcelWriter(output_excel, engine="openpyxl") as writer:
    feature_df.to_excel(writer, sheet_name="Sequence_Features", index=False)
    summary_df.to_excel(writer, sheet_name="Feature_Summary")
    score_df.to_excel(writer, sheet_name="Alignment_Scores")
    identity_df.to_excel(writer, sheet_name="Identity_Percentage")

print("\n===== ANALYSIS COMPLETE =====")
print("Total sequences:", len(records))
print("Excel report generated:", output_excel)
