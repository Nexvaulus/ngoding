// // ini namanya implisit return, return nya ga ditulis karna function nya cuma sebaris
// const tampilpesan = nama => `Halo ${nama}`;
// console.log(tampilpesan("Galih"));


// const tampilNama = (nama, waktu) => `Halo ${nama}, selamat ${waktu}`;
// console.log(`${tampilpesan("Galih")}, ${tampilNama("Sandhika", "pagi")}`);

// let mahasiswa = ["Sandhika Galih", "Doddy Ferdiansyah", "Erik"];

// let jumlahHuruf = mahasiswa.map(function(nama) {
//     return nama.length;
// })
// console.log(jumlahHuruf)

// const jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf)

// let jumlahHuruf = mahasiswa.map(nama => ({nama, jmlHuruf: nama.length}));
// console.table(jumlahHuruf);

// konsep this pada arrow function

//  constructor function
// const Mahasiswa = function() {
//     this.nama = "Sandhika";
//     this.umur = 33;
//     this.sayHello = function() {
//         console.log(`Halo ${this.nama} dan saya ${this.umur} tahun`);
//     }
//     console.log(this);
// }

// arrow function
// const Mahasiswa = function() {
//     this.nama = "Sandhika";
//     this.umur = 33;
//     this.sayHello = function() {
//         console.log(`Halo, saya ${this.nama} dan saya ${this.umur} tahun`);
//     }
// }

// object literal 
// const mhs1 = {
//     nama : "Sandhika",
//     umur : 33,
//     sayHello : () => {
//         console.log(`Halo saya ${nama} dan saya ${umur} tahun`);
//     }
// }

// const Mahasiswa = function() {
//     this.nama = "Sandhika";
//     this.umur = 33;
//     this.sayHello = function() {
//         console.log(`Halo, saya ${this.nama} dan saya ${this.umur} tahun`);
//     }

    
//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500);
// }

// const sandhika = new Mahasiswa();

const box = document.querySelector('.box');
box.addEventListener('click', function(){
    let satu = 'size';
    let dua = 'caption';

    if(this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});