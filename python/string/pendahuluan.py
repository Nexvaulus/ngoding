## pengenalan string

data = "ini adalah string"
print(data)
print(type(data))

print(" ")

# 1. cara membuat string

'''
    1. dengan menggunakan single quote '...'
    2. dengan menggunakan double quote "..."
'''

data = 'menggunakan single quote'
print(data)

data = "menggunakan double quote"
print(data)


print('"Halo, apa kabar?"') # membuat percakapan

print(" ")

# 2. menggunakan tanda \ 

sekat = "tanda [\]".center(22, "=")
print(sekat)

# membuat tanda ' menjadi string
print('mari shalat jum\'at')

# backslash 
print("c:\\user\\Ucup")

# tab
print("ucup\tmamat, jadi jauhan")

# backspace
print("ucup\bmamat, jadi deketan")

print(" ")
sekat = "newline".center(15, "=")
print(sekat)

# newline
print("baris pertama.\nbaris kedua.") # LF -> line feed (unix, macos, linux)
print("baris pertama.\rbaris kedua.") # CR -> carriage return (commodore, acorn, lisp)
print("baris pertama.\r\nbaris kedua") # CRLF -> line feed carriage return (dipakai oleh windows)

print(" ")

# 3. string literal atau raw

# hati-hati
print('C:\\new folder') # akan salah path nya

# menggunakan raw string
print(r'C:\new folder')

# multiline literal string
print("""
Nama : Ucup
Kelas : 3 SD
""")

# multiline literal string dan raw

print(r"""
Nama : Ucup
Kelas : 3 SD
""")