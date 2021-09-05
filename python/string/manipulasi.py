# operasi dan manipulasi string

# 1. menyambung string (concatenate)
nama_pertama = "Ucup"
nama_tengah = "D"
nama_akhir = "Fame"

nama_lengkap = nama_pertama + " " + nama_tengah + "'" + nama_akhir
print(nama_lengkap)

# 2. menghitung panjang string
panjang = len(nama_lengkap) # menghitung mulai dari 1
print(panjang)

# mengecek apakah ada komponen character atau string di string
d = "d"
status = d in nama_lengkap
print(d)

D = "D"
status = d not in nama_lengkap
print(d)

# mengulang string
print(15*"awok")
print(" ")

#  indexing
print("index ke-0 : " + nama_lengkap[0]) # index mulai dari 0
print("index ke-(-1) : " + nama_lengkap[-1]) # kalo (-) mulai dari belakang
print("index ke-[0:3]:" + nama_lengkap[0:3]) # titik dua artinya sampai, kalo hitung kaya gitu yang terakhir ga dianggap
print("index ke-[0,2,4,6,8,10]:" + nama_lengkap[0:11:2]) # buat panggil string yang loncat loncat
print(" ")

# item paling kecil
print("paling kecil : " + min(nama_lengkap))
# item paling besar
print("paling beasr : " + max(nama_lengkap))

ascii_code = ord(" ")
print(" ")
print("ASCII code untuk spasi adalah " + str(ascii_code))
data = 117
print("char untuk ASCII 117 adalah " + chr(data))

# 4. operator dalam bentuk method

data = "otong surotong pararotong"
jumlah = data.count("o")
print("jumlah o pada " + data + " = " + str(jumlah))







