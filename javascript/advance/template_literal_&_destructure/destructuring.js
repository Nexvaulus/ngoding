// destructuring 

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
const mhs1 = {
    nama: "Sandhika Galih",
    umur: 33,
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 75
    }
};


// function cetakMhs(mhs) {
//     return `Halo nama saya ${mhs.nama}, umur saya ${mhs.umur}`;   
// }

// console.log(cetakMhs(mhs1));

function cetakMhs({nama, umur, nilai : {tugas, uts, uas}}) {
    return `Halo nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}`;
}

console.log(cetakMhs(mhs1));
