// destructuring assignment

// destructuring array
// const perkenalan = ["Halo", "nama", "saya", "Sandhika Galih"];

// const [salam, satu, dua, nama] = perkenalan;

// skipping items
// const [salam, , , nama] = perkenalan;
// console.log(salam);


// swap items 
// let a = 1;
// let b = 2;
// console.log(a);
// [a, b] = [b, a];
// console.log(a);


// return value pada function
// function coba () {
//     return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);


// rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);


// destructuring object
// const mhs = {
//     nama: "Sandhika Galih", 
//     umur: 33,
// }

// const {nama, umur} = mhs;


// assignment tanpa deklarasi object

// ({ nama, umur } = {
//     nama: "Sandhika Galih",
//     umur: 33,
// });
// console.log(nama);


// assign ke variable baru

// const mhs = {
//     nama: "Sandhika Galih", 
//     umur: 33,
// }

// const {nama : n, umur : u} = mhs;
// console.log(n)


// memberikan default value
// const mhs = {
//     nama: "Sandhika Galih", 
//     umur: 33,
//     email : "sandhikagalih@unpas.ac.id"
// }

// const {nama : n, umur : u, email = "email@default.com"} = mhs;
// console.log(email)



// rest parameter
// const mhs = {
//     nama: "Sandhika Galih",
//     umur: 33,
//     email: "sandhikagalih@unpas.ac.id"
// }

// const { nama, ...value } = mhs;
// console.log(value)



// mengambil field pada object, setelah dikirim sebagai parameter untuk function
// const mhs = {
//     id : 123,
//     nama: "Sandhika Galih",
//     umur: 33,
//     email: "sandhikagalih@unpas.ac.id",
// }

// function getIdMhs({id}) {
//     return id
// }


// destructuring function

// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
// };

// const jumlah = penjumlahanPengurangan(2, 3)[0];
// const kali = penjumlahanPengurangan(2,3)[1]'

// const [tambah, kurang, kali, bagi] = kalkulasi(2, 3);

// console.log(jumlah);
// console.log(kali);

// function kalkulasi(a, b) {
//     return {
//         tambah : a + b,
//         kurang : a - b,
//         kali : a + b,
//         bagi : a / b
//     };
// };

// const {bagi, tambah, kali, kurang} = kalkulasi(2,3);
// console.log(kurang)


// destructuring function arguments
// const mhs1 = {
//     nama: "Sandhika Galih",
//     umur: 33,
//     nilai: {
//         tugas: 80,
//         uts: 85,
//         uas: 75
//     }
// };


// function cetakMhs(mhs) {
//     return `Halo nama saya ${mhs.nama}, umur saya ${mhs.umur}`;   
// }

// console.log(cetakMhs(mhs1));

// function cetakMhs({nama, umur, nilai : {tugas, uts, uas}}) {
//     return `Halo nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}`;
// }

// console.log(cetakMhs(mhs1));
