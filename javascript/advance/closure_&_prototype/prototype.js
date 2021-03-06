// cara untuk membuat object pada javascript
// 1. object literal
// problem : tidak efektif
// let mahasiswa = {
//     nama: "Sandhika",
//     energi: 10,
//     makan: function(porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.nama} selamat makan!`)
//     }
// }


// 2. function declaration

// const methodMahasiswa = {
//     makan : function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     },

//     main : function(jam) {
//         this.energi -= jam;
//         console.log(`Selamat bermain ${this.nama}`);
//     },
    
//     tidur : function(jam) {
//         this.energi += jam * 2;
//         console.log(`Selamat tidur ${this.nama}`);
//     }
// };

// function siswa(nama, umur, energi) {
//     let siswa = Object.create(methodMahasiswa)
//     siswa.nama = nama;
//     siswa.umur = umur;
//     siswa.energi = energi;
//     return siswa;
// }

// harus dimasukin ke dalam variabel dengan memanggil functionnya
// sandhika = siswa("Sandhika", 10, 10);


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
// fungsi nya buat integrasi/nyambungin object ke parent nya atau inherited


function siswa(nama, energi) {
    // let siswa = Object.create(methodMahasiswa)
    this.nama = nama;
    this.energi = energi;
    // return siswa; constructor ga perlu return
}

siswa.prototype.makan = function(porsi) {
    this.energi += porsi;
    `Halo ${this.nama}, selamat makan!`;
}

siswa.prototype.main = function(jam) {
    this.energi -= jam;
    `Halo ${this.nama}, selamat bermain!`
}

siswa.prototype.tidur = function(jam) {
    this.energi += jam * 2;
    `Halo ${this.nama}, selamat tidur`
}

let sandhika = new siswa("Sandhika", 10);


// versi class
class mahasiswi {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        `Halo ${this.nama}, selamat makan!`;
    }
    
    main(jam) {
        this.energi -= jam;
        `Halo ${this.nama}, selamat bermain!`
    }
    
    tidur(jam) {
        this.energi += jam * 2;
        `Halo ${this.nama}, selamat tidur`
    }
}

let mamat = new mahasiswi("Mamat", 10);
let dody = new mahasiswi("Dody", 10);

console.log(sandhika.energi);