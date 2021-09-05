## belajar casting
# merubah dari satu tipe ke tipe lain
# tipe data = integer, float, str, bool

# integer
print("===integer===")
data_int = 9
print("data = ", data_int, "type =", type(data_int))

data_float = float(data_int) # akan dibulatkan kebawah contoh 9,9 jadi 9
data_string = str(data_int)
data_bool = bool(data_int) # akan false jika nilai integer = 0

print("data =", data_float, "type =", type(data_float))
print("data =", data_string, "type =", type(data_string))
print("data =", data_bool, "type =", type(data_bool))
print(" ")

#float
print("===float===")
data_float = 9.5
print("data = ", data_float, "type =", type(data_float))

data_int = int(data_float) # akan dibulatkan kebawah contoh 9,9 jadi 9
data_string = str(data_float)
data_bool = bool(data_float) # akan false jika nilai float = 0

print("data =", data_int, "type =", type(data_int))
print("data =", data_string, "type =", type(data_string))
print("data =", data_bool, "type =", type(data_bool))
print(" ")

#string
print("===string===")
data_str = "0"
print("data = ", data_str, "type =", type(data_str))

data_int = int(data_str) # string harus angka
data_float = float(data_str) # string harus angka
data_bool = bool(data_str) # akan false jika string kosong

print("data =", data_int, "type =", type(data_int))
print("data =", data_float, "type =", type(data_float))
print("data =", data_bool, "type =", type(data_bool))
print(" ")

#bool
print("===bool===")
data_bool = False
print("data = ", data_bool, "type =", type(data_bool))

data_int = int(data_bool)
data_float = float(data_bool)
data_string = str(data_bool)

print("data =", data_int, "type =", type(data_int))
print("data =", data_float, "type =", type(data_float))
print("data =", data_string, "type =", type(data_string))
print(" ")

## input user
# data yang dimasukan pasti string
print("===input user===")
data = input("Masukan data : ")
print("data =", data, "type =", type(data))

# jika kita ingin mengambil integer, maka
udin = int(input("Masukan angka : "))
print("data: ", udin, "type: ", type(udin))

# jika kita ingin mengambil float, maka
udin = float(input("Masukan angka desimal : "))
print("data: ", udin, "type: ", type(udin))

# bagaimana dengan boolean
mamat = bool(int(input("Masukan nilai boolean : ")))
print("data: ", mamat, "type: ", type(mamat))
