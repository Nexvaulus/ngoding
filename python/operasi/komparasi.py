## operasi komparasi
# operasi komparasi adalah membandingkan
# setiap hasil dari operasi komparasi adalah boolean
# >, <, >=, <=, ==, !=, is, is not

g = 4
h = 2

# lebih besar dari >
print("========= lebih besar dari (>)")
hasil = g > 3
print(g, '>', 3, '=', hasil)
hasil = h > 3
print(h, '>', 3, '=', hasil)
hasil = h > 2
print(h, '>', 2, '=', hasil)

# kurang dari <
print(" ")
print("========= kurang dari (<)")
hasil = g < 3
print(g, '<', 3, '=', hasil)
hasil = h < 3
print(h, '<', 3, '=', hasil)
hasil = h < 2
print(h, '<', 2, '=', hasil)

# lebih besar dari sama dengan >=
print(" ")
print("========= lebih besar dari sama dengan (>=)")
hasil = g >= 3
print(g, '>=', 3, '=', hasil)
hasil = h >= 3
print(h, '>=', 3, '=', hasil)
hasil = h >= 2
print(h, '>=', 2, '=', hasil)

# kurang dari sama dengan <=
print(" ")
print("========= kurang dari sama dengan (<=)")
hasil = g <= 3
print(g, '<=', 3, '=', hasil)
hasil = h <= 3
print(h, '<=', 3, '=', hasil)
hasil = h <= 2
print(h, '<=', 2, '=', hasil)

# sama dengan ==
print(" ")
print("========= sama dengan (==)")
hasil = g == 4
print(g, '==', 4, '==', hasil)

# tidak sama dengan !=
print(" ")
print("========= tidak sama dengan (!=)")
hasil = g != 4
print(g, '!=', 4, '=', hasil)

# 'is' dan 'is not' sebagai komparasi object identity
print(" ")
print("========= object identity (is)")
x = 5 # ini adalah assignment membuat object
y = 5
print("nilai x =", x, "id =", hex(id(x)))
print("nilai x =", y, "id =", hex(id(y)))
hasil = x is y
print('x is y =', hasil)

x = 5 # ini adalah assignment membuat object
y = 6
print("nilai x =", x, "id =", hex(id(x)))
print("nilai x =", y, "id =", hex(id(y)))
hasil = x is y
print('x is y =', hasil)

print(" ")
print("========= object identity (is not)")
x = 5 # ini adalah assignment membuat object
y = 5
print("nilai x =", x, "id =", hex(id(x)))
print("nilai x =", y, "id =", hex(id(y)))
hasil = x is not y
print('x is not y =', hasil)

x = 5 # ini adalah assignment membuat object
y = 6
print("nilai x =", x, "id =", hex(id(x)))
print("nilai x =", y, "id =", hex(id(y)))
hasil = x is not y
print('x is not y =', hasil)

## shell dibuka di terminal dengan menuliskan python
## id bisa di cek di shell interactive dengan cara id(variabel/object)
## id bisa di cek biasa atau dalam bentuk hexadecimal
## nilai yang sama id juga sama