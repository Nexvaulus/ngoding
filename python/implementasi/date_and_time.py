# # date and time 

# import datetime as dt

# sekat = "date and time".center(21,"=")
# print(sekat)
# tanggal = int(input("Tanggal \t: "))
# bulan = int(input("Bulan \t\t: "))
# tahun = int(input("Tahun \t\t: "))

# tanggal_lahir = dt.date(tahun, bulan, tanggal)
# print(f"Tanggal lahir anda adalah : {tanggal_lahir}")
# print(f"Hari nya adalah : {tanggal_lahir:%A}")

# hari_ini = dt.date.today()
# print(f"\nHari ini tanggal : {hari_ini}")
# umur_hari = hari_ini - tanggal_lahir
# umur_tahun = umur_hari.days // 365
# print("umur anda \t : ", umur_tahun, "tahun")
# print(f"Umur anda adalah : {umur_tahun} tahun, {umur_hari}")

buku = float(input("Masukan jumlah buku yang ingin anda beli : "))
pensil = float(input("Masukan jumlah pensil yang ingin anda beli : "))
buku = 10000
pensil = 3000
total = buku + pensil
total_harga = f"Total pembayaran : {total}"
print(total_harga)
