# date and time 

import datetime as dt

print("""
Silahkan masukkan 
tanggal :
bulan : 
tahun : 
""")

tanggal = int(input("Tanggal \t: "))
bulan = int(input("Bulan \t\t: "))
tahun = int(input("Tahun \t\t: "))

tanggal_lahir = dt.date(tahun, bulan, tanggal)
print(tanggal_lahir)
