# width and multiline

# data

data_nama = "Ucup Surucup"
data_umur : 17
data_tinggi : 150.1
data_nomor_sepatu : 44

# string

data_string = f"nama = {data_nama}, umur = {data_umur}, tinggi = {data_tinggi}, nomor sepatu = {data_nomor_sepatu}"
print(5*"="+"data string"+5*"=")
print(data_string)

# string multiline (dengan menggunakan enter, newline, \n)

data_string = f"nama = {data_nama}, \numur = {data_umur}, \ntinggi = {data_tinggi}, \nnomor sepatu = {data_nomor_sepatu}"
print("\n"+5*"="+"data string"+5*"=")
print(data_string)

# striing multiline (kutip triplets)

data_string = f"""
nama = {data_nama}  
umur = {data_umur}
tinggi = {data_tinggi}
nomor sepatu = {data_nomor_sepatu}
"""
data_string = f"nama = {data_nama}, \numur = {data_umur}, \ntinggi = {data_tinggi}, \nnomor sepatu = {data_nomor_sepatu}"
print("\n"+5*"="+"data string"+5*"=")

# mengatur lebar

data_nama = "Ucup"
data_string = f"""
nama         = {data_nama:>5}  
umur         = {data_umur}
tinggi       = {data_tinggi}
nomor sepatu = {data_nomor_sepatu}
"""
data_string = f"nama = {data_nama}, \numur = {data_umur}, \ntinggi = {data_tinggi}, \nnomor sepatu = {data_nomor_sepatu}"
print("\n"+5*"="+"data string"+5*"=")

"""
Halo apa kabar >
Siapa nama mu
"""