// object adalah array yang lebih sakti
// object ditulis dengan kurung kurawal
// variabel yang ada di dalam object disebut dengan properti
// function yang ada di dalam object disebut method
// contoh

var mahasiswa = {
    nama : "Ucup",
    umur : 21,
    pekerjaan : "mahasiswa",
    sapa: function() {
        return "Hi, nama saya " + this.nama + 
                'usia saya ' + this.umur + " tahun, " + 
                "dan saya adalah seorang " + this.pekerjaan;
    }
}

console.log(mahasiswa.nama)