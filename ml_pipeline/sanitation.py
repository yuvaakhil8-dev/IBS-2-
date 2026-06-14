from Bio import SeqIO

input_file = "tb_large.fasta"
output_file = "tb_sanitized.fasta"

allowed_aa = set("ACDEFGHIKLMNPQRSTVWYXBZ")

clean_records = []

for record in SeqIO.parse(input_file, "fasta"):
    seq = str(record.seq).strip().upper()
    
    if not seq:
        continue
    
    if len(seq) < 1050 or len(seq) > 1250:
        continue
    
    if not set(seq).issubset(allowed_aa):
        continue
    
    if "tuberculosis" not in record.description.lower():
        continue
    
    clean_records.append(record)

SeqIO.write(clean_records, output_file, "fasta")

print("Sanitized count:", len(clean_records))
