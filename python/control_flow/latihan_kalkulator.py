# latihan
# kalkulator sederhana

print(20*"=")
print("Kalkulator sederhana")
print(20*"=" + "\n")

angka_1 = float(input("Masukkan angka 1 = "))
operator = input("Masukkan operator (+, -, x, /) : ")
angka_2 = float(input("Masukkan angka 2 = "))

# percabangan

if operator == "=":
    print(angka_1, angka_2)
elif operator == "+":
    hasil = angka_1 + angka_2
    print(f"hasilnya adalah {hasil}")
elif operator == "-":
    hasil = angka_1 - angka_2
    print(f"hasilnya adalah {hasil}")
elif operator == "x" or operator == "*":
    hasil = angka_1 * angka_2
    print(f"hasilnya adalah {hasil}")
elif operator == "/":
    hasil = angka_1 / angka_2
    print(f"hasilnya adalah {hasil}")
else:
    print("Invalid")

print("Akhir dari program, terimakasih")

