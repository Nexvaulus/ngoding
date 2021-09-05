## operasi logika atau boolean
# not, or, and, xor

# NOT
print("=====NOT=====")
a = True 
c = not a
print("data a =", a)
print("---------- NOT")
print("data c =", c)

# OR (jika salah satu true, maka hasilnya true)
# mirip kaya ditambah
# 0 itu false dan 1 itu true
print("=====OR=====")
a = False
b = False
c = a or b
print(a, "OR", b, "=", c)
a = False
b = True 
c = a or b
print(a, "OR", b, " =", c)
a = True
b = False
c = a or b
print(a, " OR", b, "=", c)
a = True
b = True
c = a or b
print(a, " OR", b, " =", c)

# AND (jika dua nilai true, maka hasil true)
# mirip kaya dikali
# 0 itu false dan 1 itu true
print("=====AND=====")
a = False
b = False
c = a and b
print(a, "AND", b, "=", c)
a = False
b = True 
c = a and b
print(a, "AND", b, " =", c)
a = True
b = False
c = a and b
print(a, " AND", b, "=", c)
a = True
b = True
c = a and b
print(a, " AND", b, " =", c)

# XOR (akan true jika salah satu true, sisanya false)
print("=====XOR=====")
a = False
b = False
c = a ^ b
print(a, "XOR", b, "=", c)
a = False
b = True 
c = a ^ b
print(a, "XOR", b, " =", c)
a = True
b = False
c = a ^ b
print(a, " XOR", b, "=", c)
a = True
b = True
c = a ^ b
print(a, " XOR", b, " =", c)


## latihan logika dan komparasi

# membuat gabungan area rentang dari angka
# misalnya

# +++++++3------10+++++++

print("\n", 10*"=","\n")
inputUser = float(input("masukan angka yang bernilai kurang dari 3 atau lebih besar dari 10 : "))

# ++++++3------------------------
# memeriksa angka kurang dari 3
iskurangdari = inputUser < 3
print("kurang dari 3 =", iskurangdari)

# ------10+++++++++++++++++++++++
# memeriksa angka lebih dari 10
islebihdari = inputUser > 10
print("lebih dari 10 =", islebihdari)

isbenar = iskurangdari or islebihdari
print("angka yang anda masukan: ", isbenar)


# -------3++++++++10--------
# kasus irisan
print("\n", 10*"=","\n") # ini buat bikin section gitu
inputUser = float(input("masukan angka yang bernilai lebih dari 3 dan kurang dari 10 : "))

# ------3++++++++
# lebih dari 3
islebihdari = inputUser > 3
print("lebih dari 3 =", islebihdari)


# +++++++++10--------
# kurang dari 10
iskurangdari = inputUser < 10
print("kurang dari 10 =", iskurangdari)

# -------3++++++10-----
isbenar = iskurangdari and islebihdari
print("angka yang anda masukan: ", isbenar)



# pr logika dan komparasi

# ------0+++++++5-------8++++++11------
print("\n", 10*"=","\n")
main_1 = float(input("Masukan angka diantara 0 dan 5 atau 8 dan 11 : "))
a = main_1 < 5
b = main_1 > 0
is_1_1 = a and b

c = main_1 < 11
d = main_1 > 8
is_1_2 = c and d

up_1 = is_1_1 or is_1_2
print("Angka yang anda masukan :", up_1)


print("\n", 10*"=","\n")


# ++++++0--------5+++++++8--------11++++++
main_2 = float(input("Masukan angka dibawah 0, diantara 5 dan 8, atau diatas 11 :"))
e = main_2 < 0
f = main_2 > 5 
g = main_2 < 8
h = main_2 > 11

is_2_1 = f and g
up_2 = is_2_1 or e or h 

print("Angka yang anda masukan :", up_2)


