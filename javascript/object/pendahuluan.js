// object adalah array yang lebih sakti
// object ditulis dengan kurung kurawal
// variabel yang ada di dalam object disebut dengan properti
// function yang ada di dalam object disebut method
// contoh

var orang = {
    nama : "Ucup",
    umur : 21,
    pekerjaan : "mahasiswa",
    sapa: function() {
        return "Hi, nama saya " + this.nama + 
                'usia saya ' + this.umur + " tahun, " + 
                "dan saya adalah seorang " + this.pekerjaan;
    }
}

// console.log(mahasiswa.nama)

// membuat object 

// object literal
var mhs1 = {
    nama : "Sandhika Galih",
    nrp : "034384384",
    email : "kaptenmagma.ac.id",
    jurusan : "Tehnik Informatika"
}

// function declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}
var mhs3 = buatObjectMahasiswa("Nofariza", "343242123", "nofaq@yahoo.com", "Tehnik Pangan")

// constructor
function Mahasiswa(nama, nrp, email, jurusan) {
    this.nama = nama;
    this.nrp =  nrp;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa("Erik", "131214", "erik@icloud.com", "Tehnik Mesin");