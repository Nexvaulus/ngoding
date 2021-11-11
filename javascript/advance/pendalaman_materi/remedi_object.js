// latihan materi object

// latihan pake class
// class Mahasiswa {
//     constructor(nama, jurusan, id, hobi) {
//         this.nama = nama;
//         this.jurusan = jurusan;
//         this.id = id;
//         this.hobi = hobi;
//     }
// };

// pembuatan object dengan protorype inheritence

// const Mahasiswa = function(nama, energi, jurusan, hobi) {
//     // yang sebenarnya terjadi di belakang layar adalah
//     // let this = Object.create(Mahasiswa.prototype);
//     this.nama = nama;
//     this.energi = energi;
//     this.jurusan = jurusan;
//     this.hobi = hobi;
// };

// const methodMahasiswa = {
//     main : function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama} selamat bermain!!`);
//     },
//     makan : function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama} selamat makan!!`);
//     },
//     tidur : function(jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama} selamat tidur!!`);
//     }
// };

// kekurangan nya yang diatas itu perlu ngurus dua object kalo yang bawah tinggal dimasukin kapanpun pake prototype

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama} selamat makan!!`;
// }
// Mahasiswa.prototype.main = function(jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama} selamat bermain!!`;
// }
// Mahasiswa.prototype.tidur = function(jam) {
//     this.energi += jam*2;
//     return `Halo ${this.nama} selamat tidur!!`;
// }

// const sandhika = new Mahasiswa("Sandhika Galih", 10, "Informatika", ["Ngoding", "Bermain game"]);


// versi class

class Mahasiswa {
    constructor(nama, energi, jurusan, hobi) {
        this.nama = nama;
        this.energi = energi;
        this.jurusan = jurusan;
        this.hobi = hobi;
    }

    main(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama} selamat bermain!!`);
        return ""
    }
    makan(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama} selamat makan!!`);
        return ""
    }
    tidur(jam) {
        this.energi += jam * 2;
        console.log(`Halo ${this.nama} selamat tidur!!`);
        return ""
    }
}

const sandhika = new Mahasiswa("Sandhika", 10, "Tehnik Informatika", ["Main game", "Ngoding"]);

Mahasiswa.prototype.kerja = function(jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama} selamat bekerja!!`);
    return ""
};

console.log(`
    energi sekarang = ${sandhika.energi}, kemudian main ${sandhika.main(2)}
    energi setelah main = ${sandhika.energi}, kemudian makan ${sandhika.makan(1)}
    energi setelah makan = ${sandhika.energi}, kemudian tidur ${sandhika.tidur(3)}
    energi setelah tidur = ${sandhika.energi}, kemudian kerja ${sandhika.kerja(4)}
    energi sekarang = ${sandhika.energi}
`)

