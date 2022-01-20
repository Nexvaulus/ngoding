# continue, pass, break

# pass -> dia berfungsi sebagai dummy, tidak akan dieksekusi

# angka = 0

# while angka < 5:
#     angka += 1
#     print(angka)

#     if angka == 3:
#         # print("ok")
#         pass # ini tidak akan dieksekusi


# continue

angka = 0


while angka < 5:
    angka += 1
    print(f"angka sekarang -> {angka}")

    if angka == 3:
        print("nice")
        continue # akan membuat loop melompat ke aksi selanjutnya
        # mirip return tapi ini balik lagi ke awal loop
        
        
    print("whassup")

print('Pinish')