from Bio import Entrez

Entrez.email = "yuvaakhil8@gmail.com"

search_term = (
    "Mycobacterium tuberculosis[Organism] "
    "AND rpoB[Gene] "
    "AND 1100:1200[SLEN]"
)

handle = Entrez.esearch(
    db="protein",
    term=search_term,
    retmax=5000
)

record = Entrez.read(handle)
handle.close()

id_list = record["IdList"]

handle = Entrez.efetch(
    db="protein",
    id=id_list,
    rettype="fasta",
    retmode="text"
)

data = handle.read()
handle.close()

with open("tb_large.fasta", "w") as f:
    f.write(data)
