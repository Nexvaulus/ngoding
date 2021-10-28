// cara untuk membuat object pada javascript
// 1. object literal

let mahasiswa = {
    nama: "Sandhika",
    energi: 10,
    makan: function(porsi) {
        this.energi += porsi;
        console.log(`halo ${this.nama} selamat makan!`)
    }
}


// 2. function declaration

function siswa(nama, umur, energi) {
    let siswa = {}
    siswa.nama = nama;
    siswa.umur = umur;
    siswa.energi = energi;

    siswa.makan = function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan`)
    }

    siswa.main = function(jam) {
        this.energi -= jam;
        console.log(`Selamat bermain ${this.nama}`)
    }

    return siswa;
}

// harus dimasukin ke dalam variabel dengan memanggil functionnya
sandhika = siswa("Sandhika", 10, 10);


// 3. constructor function

function orang(nama, umur, energi) {
    this.nama = nama;
    this.umur = umur;
    this.energi = energi;

    this.makan = function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan`)
    }

    this.main = function(jam) {
        this.energi -= jam;
        console.log(`Selamat bermain ${this.nama}`)
    }
}

// harus pake keyword new pas dimasukin ke dalam variabel
let ucup = new orang("ucup", 10);

// 4. object.create

