# latihan konversi satuan temperature
# program konversi celcius ke satuan lain

print("\nPROGRAM KONVERSI TEMPERATURE\n")

celcius = float(input("Masukan suhu dalam celcius : "))
print("Suhu adalah", celcius, "celcius")

# reamur
reamur = (4/5) * celcius
print("Suhu dalam reamur adalah", reamur, "reamur")

# fahrenheit
fahrenheit = ((9/5) * celcius) + 32
print("Suhu dalam fahrenheit adalah", fahrenheit, "fahrenheit")

# kelvin
kelvin = celcius + 273
print("Suhu dalam kelvin adalah", kelvin, "kelvin")



## PR membuat program dari fahrenheit ke kelvin dan sebaliknya
print(" ")
print("===PR===")
F = float(input("Masukan suhu dalam Fahrenheit :"))
K = (F - 32) * 5/9 + 273
print("Suhu dalam kelvin adalah", K, "Kelvin")
print("=====")
Kel = float(input("Masukan suhu dalam Kelvin :"))
Fah = (9/5 * (Kel - 273)) + 32
print("Suhu dalam Fahrenheit adalah", F, "Fahrenheit")
