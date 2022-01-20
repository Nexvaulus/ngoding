# latihan perulangan membuat segitiga

# sisi = 4

# 1. menggunakan for
# dummy variable
# count = 1
# for i in range(sisi):
#     print("*" * count)
#     count += 1

# print("akhir dari for")



# 2. menggunakan while
# count = 1
# while True:
#     print("*" * count)
#     count += 1
#     if(count > sisi) : break

# print("akhir dari while")



# 3. hanya ganjil saja
# count = 1
# while True:
#     # akan kembali ke atas jika ganjil
#     if (count % 2) : 
#         # print jika ganjil
#         print("*" * count)
#         count += 1
    
#     else :
#         # akan kembali ke atas jika ganjil
#         count += 1
#         continue

    
#     # akan break jika count melebihi sisi
#     if count > sisi : break



# sisi = 5

# count = 1
# spasi = int(sisi / 2)
# while True:
#     if (count % 2) : 
#         # print jika ganjil
#         print(" " * spasi, "*" * count)
#         spasi -= 1
#         count += 1
    
#     else :
#         # akan kembali ke atas jika ganjil
#         count += 1
#         continue

    
#     # akan break jika count melebihi sisi
#     if count > sisi : break


for i in range(0, 5):
    print(" " * (5 - i), end = "")
    for x in range(i):
        print("+ ", end = "")

    print()


for i in range(5, 0, -1):
    print(" "*(5-i), end='')
    for x in range(i):
        print("+ ", end='')
    print()

