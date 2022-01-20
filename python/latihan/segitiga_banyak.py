# latihan percabangan dan perulangan

# console.log("Segitiga [1]")
# var spasi = "";
# for(var x = 1; x <= 5; x++) {
#     for(var y = 1; y <= x; y++) {
#         spasi += "*";
#     }
#     spasi += "\n";
# }
# console.log(spasi);

spasi = ""

print("Latihan Segitiga")


print("\nSegitiga [1]")
x = 1 
while x <= 5:
    spasi = x * "*"
    print(spasi)
    x += 1

x = 6
while x >= 1: 
    spasi = x * "*"
    print(spasi)
    x -= 1


print("")
print("")
print("")

print("Segitiga [2]")
x = 1 
y = 1
while x <= 5:
    spasi = x * " * "
    print(spasi)
    x += 1


string = ""

bar = int(input("Masukkan angka :"))

#Looping Baris
while bar >= 0:
	kol = bar

	# Looping Kolom
	while kol > 0:
		string = string + " * "
		kol = kol - 1
		
	string = string + "\n"
	bar = bar - 1
	
print (string)

string = ""

x = int(input("Masukkan angka :"))
bar = x
# Looping Baris
while bar >= 0:

	# Looping Kolom Spasi Kosong
	kol = bar
	while kol > 0:
		string = string + "   "
		kol = kol - 1
	
	# Looping Kolom Bintang	
	kanan = 1
	while kanan < (x - (bar-1)):
		string = string + " * "
		kanan = kanan + 1		
		
	string = string + "\n"
	bar = bar - 1
	
print (string)


bar = int(input("Masukkan angka : "))
# Looping Baris
while bar >= 0:
	# Looping Kolom Spasi Kosong
	kol = bar
	while kol > 0:
		string = string + "   "
		kol = kol - 1
	# Looping Kolom Bintang Sisi Kiri	
	kiri = 1
	while kiri < (x - (bar-1)):
		string = string + " * "
		kiri = kiri + 1		
	# Looping Kolom Bintang Sisi Kanan
	kanan = 1
	while kanan < kiri -1:
		string = string + " * "
		kanan = kanan + 1	

	string = string + "\n\n"
	bar = bar - 1
	
print (string)