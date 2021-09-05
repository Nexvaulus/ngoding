print("Hello World")
print("Test")
print("Test lagi")
print(" ")
sekat = "pendahuluan".center(23, "=")
print(sekat)
print(" ")
# Variabel adalah tempat menyimpan data
# Menaruh/assignment nilai
# Penamaan variabel ga boleh pake strip ato spasi tapi underscore bisa
# Ga boleh angka di depan variabel bolehnya dibelakang
# Pemanggilan sama kaya css diambil yang terakhir
# Variabel yang dipanggil harus diatas 
# Pemanggilan indirect variabel = variabel contoh x = y
# a = 10, a adalah variabel dengan nilai 10

x = 5
y = x + 5

print(y)
print("nilai y =", y)
print("nilai x =", x)

# tipe data = angka satuan yang ga ada koma nya (integer)

data_integer = 1
print("data : ", data_integer)
print("bertipe : ", type(data_integer))

# tipe data = angka yang ada koma nya (float)

data_float = 1,5
print("data : ", data_float)
print("bertipe : ", type(data_float))

# tipe data = kumpulan karakter (string)

data_string = "ucup"
print("data : ", data_string)
print("bertipe : ", type(data_string))

# tipe data = biner true/false (boolean)

data_bool = False
print("data : ", data_bool)
print("bertipe : ", type(data_bool))

print(" ")

## tipe data khusus
sekat = "data khusus".center(23, "=")

# bilangan kompleks

data_complex = complex(5,6)
print("data : ", data_complex)
print("bertipe : ", type(data_complex))
print(10*"=")
print(" ")

# tipe dari bahasa C

from ctypes import c_double

data_c_double = c_double(10,5)
print("data : ", data_c_double)
print("bertipe : ", type(data_c_double))

