# perulangan (loop)

# for kondisi:
#     aksi

sekat = "for looping".center(20)
print(19*"=")
print(sekat)
print(19*"=")

# ini dengan list
angka_1 = [0,1,2,3,4] # ini adalah list
print(angka_1)

for i in angka_1:
    print(f"i sekarang -> {i}")

print("akhir dari program [1]\n")

# ini dengan range

angka_2 = range(5)

for i in angka_2:
    print(f"i sekarang -> {i}")

print("akhir dari program [2]\n")

# menggunakan string

data_str = "saya ganteng abiez"

for i in data_str:
    print(i)
    
print("akhir dari program [3]\n")
print("")

print("PR : Program angkot\n")

jumlahangkot = 10
angkotberoperasi = 6
angkotlembur = 8
angkot = 0

while angkot < jumlahangkot:
    angkot = angkot + 1

    if angkot < angkotberoperasi:
        print(f"Angkot no.{angkot} beroperasi dengan baik.")
        
    elif angkot is angkotlembur:
        print(f"Angkot no.{angkot} sedang lembur.")

    else:
        print(f"Angkot no.{angkot} tidak dapat beroperasi.")

print("Akhir dari program [4]")