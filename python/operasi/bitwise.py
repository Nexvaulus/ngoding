## operator bitwise, operasi biner, binary

a = 9
b = 5

# bitwise or (|)
c = a | b 
print("\n===========OR===========")
print("nilai :", a, " , binary :",  format(a, "08b"))
print("nilai :", b, " , binary :",  format(b, "08b"))
print("---------------------------------------(|)")
print("nilai :", c, " , binary :",  format(c, "08b"))

# bitwise AND (&)
c = a & b 
print("\n===========AND===========")
print("nilai :", a, " , binary :",  format(a, "08b"))
print("nilai :", b, " , binary :",  format(b, "08b"))
print("---------------------------------------(&)")
print("nilai :", c, " , binary :",  format(c, "08b"))

# bitwise XOR (^)
c = a ^ b 
print("\n===========XOR===========")
print("nilai :", a, " , binary :",  format(a, "08b"))
print("nilai :", b, " , binary :",  format(b, "08b"))
print("---------------------------------------(^)")
print("nilai :", c, " , binary :",  format(c, "08b"))

# bitwise NOT (~)
c = ~a  
print("\n===========AND===========")
print("nilai :", a, " , binary :",  format(a, "08b"))
print("---------------------------------------(~)")
print("nilai :", c, " , binary :",  format(c, "08b"))
print("---------------------------------------(^)")
d = 0b0000001001
e = 0b1111111111
print("nilai :",e^d, " , binary :", format(c, "08b"))

# shifting
# untuk menggeser nilai
# ga bisa pake (-)

# shift right (>>)
c = a >> 1
print("\n===========>>===========")
print("nilai :", a, " , binary :",  format(a, "08b"))
print("---------------------------------------(>>)")
print("nilai :", c, " , binary :",  format(c, "08b"))

# shift left (<<)
c = a << 1
print("\n===========>>===========")
print("nilai :", a, " , binary :",  format(a, "08b"))
print("---------------------------------------(<<)")
print("nilai :", c, " , binary :",  format(c, "08b"))



## operator assignment
# fungsi nya buat ringkas
# contoh

a = 5 # ini assignment
a = a * 5 
a *= 5 # bisa di ringkas kaya gini (ini artinya a = a * 5)

print("nilai a :", a)

# berlaku untuk operasi matematika, bitwise, dan shifting
# jika untuk bitwise akan menjadi operator logika biasa