## format string

# contoh generic
# string
nama = "Marlene"
format_str = f"hello {nama}"
print(format_str)

# boolean
boolean = True
format_str = f"boolean {boolean}"
print(format_str)

# angka 
angka = 2005.5
format_str = f"angka {angka}"
print(format_str)

# bilangan bulat 
angka = 15
format_Str = f"nomor = {angka:d}" # d nya ga ada gpp
print(format_str)

# bilangan ribuan
angka = 2000
format_str = f"ribuan = {angka:,}"
print(format_str)

# bilangan desimal
angka = 2005.54321
format_str = f"desimal = {angka:.2f}" # 2 f (f = fromat) buat nampilin berapa angka dibelakang koma
print(format_str)

# bilangan ribuan
angka = 2005.54321
format_str = f"ribuan = {angka:9.3f}"
print(format_str)

# menampilkan tanda + atau -
angka_minus = -10
angka_plus = +10.1093
format_minus = f"minus = {angka_minus:+d}"
format_plus = f"plus = {angka_plus:+.2f}"

print(format_minus)
print(format_plus)

# memfortmat persen
persentase = 0.045
format_persen = f"persen = {persentase:.2%}"
print(format_persen)

# melakukan operasi aritmatika di dalam placeholder
harga = 10000
jumlah = 5

format_string = f"harga total = {harga+jumlah}:."
print(format_string)

# format angka lain (binary, octal, hexadecimal)
angka = 255
format_binary = f"binary = {bin(angka)}"
format_octal = f"binary = {oct(angka)}"
format_hex = f"hex = {hex(angka)}"

print(format_binary)
print(format_octal)
print(format_hex)