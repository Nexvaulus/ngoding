## operator dalam bentuk methods
## merubah case dari string

# merubah semua ke upper case
sekat = "upper case".center(20,"=")
print(sekat)
salam = "halo"
print("normal = " + salam)
salam = salam.upper()
print("upper = " + salam)
print(" ")

# merubah semua ke lower case
sekat = "lower case".center(20,"=")
print(sekat)
alay = "aKu KeCe AbieZzZzZ"
print("normal = " + alay)
alay = alay.lower()
print("lower = " + alay)
print(" ")

## pengecekan dengan isX method

# contoh untuk pengecekan lower case
sekat = "mengecek".center(20,"=")
print(sekat)
salam = "sist"
apakah_lower = salam.islower() # hasilnya bool
print(salam + " is lower = " + str(apakah_lower))
apakah_upper = salam.isupper()
print(salam + " is upper = " + str(apakah_upper))

# isalpha() <-- untuk mengecek semuanya huruf
# isalnum() <-- huruf dan angka
# isdecimal() <-- angka saja
# isspace () <-- spasi, tab, newline \n
# istitle() <-- semua kata dimulai dengan huruf besar

kapital_angka = "Tes1"
kecil_semua = "tes tes"
angka = "1"

print(" ")

is_alpha = kecil_semua.isalpha()
print(kecil_semua + " is alpha = " + str(is_alpha))

is_alnum = kapital_angka.isalnum()
print(kapital_angka + " is alnum = " + str(is_alnum))

is_decimal = angka.isdecimal()
print(angka + " is decimal = " + str(is_decimal))

is_space = kecil_semua.isspace()
print(kecil_semua + " is space = " + str(is_space))

is_title = kapital_angka.istitle()
print(kapital_angka + " is title = " + str(is_title))

print(" ")

## ngecek komponen startswith() endswith() <-- keren
sekat = "mengecek".center(20,"=")
print(sekat)
cek_start = "tes ceritanya".startswith("tes")
print("start = " + str(cek_start))

cek_end = "tes kedua".endswith("kedua")
print("end = " + str(cek_end))

## penggabungan komponen join() split()
pisah = ["aku", "saya", "kamu"]
gabung = ','.join(pisah)
print(pisah)
print(gabung)

gabungan = " ".join(pisah)
print(gabungan)

gabungan = " ehm ".join(pisah)
print(gabungan)

gabungan = "akusayaehmkamu"
print(gabungan.split("ehm"))

### alokasi karakter rjust(), ljust(), center()
kanan = "kanan".rjust(10)
print("'"+ kanan + "'")

kiri = "kiri".ljust(10)
print("'"+ kiri + "'")

tengah = "tengah".center(20,"=")
print("'"+ tengah + "'")

# kebalikannya -> strip()
tengah = tengah.strip("=") # menghilangkan tanda :
print("'"+ tengah + "'")