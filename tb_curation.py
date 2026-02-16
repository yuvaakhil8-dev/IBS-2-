from Bio import SeqIO

input_file = "tb_sanitized.fasta"
output_file = "tb_nonredundant.fasta"

unique = set()
nonredundant = []

for record in SeqIO.parse(input_file, "fasta"):
    seq = str(record.seq)
    
    if seq not in unique:
        unique.add(seq)
        nonredundant.append(record)

SeqIO.write(nonredundant, output_file, "fasta")
