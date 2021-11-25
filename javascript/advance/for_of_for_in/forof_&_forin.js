// for..of

// array
// const mhs = ["Sandhika", "Doddy", "Erik"];

// for(let i = 0; i < mhs.length; i++) console.log(mhs[i]);
// mhs.forEach(x => console.log(x));

// for(const m of mhs) {
//     console.log(m);
// };



// string

// forEach khusus array ga bisa string

// const nama = "Sandhika";
// for(const n of nama) {
//     console.log(n);
// };


// const mhs = ["Sandhika", "Doddy", "Erik"];
// mhs.forEach((m, i) => {
//     console.log(`${m} adalah index ke-${i + 1}`)
// });

// for(const [i, m] of mhs.entries()) {
//     console.log(`${m} adalah index ke-${i + 1}`)
// }


// nodeList

// const liNama = document.querySelectorAll('.nama');
// console.log(liNama);
// liNama.forEach(n => console.log(n.innerHTML));
// for(n of liNama) {
//     console.log(n.innerHTML);
// }


// arguments

// function jumlahkanAngka() {
    // arguments.reduce((a, i) => a + i); -> ga bisa argument pake forEach
    // arguments.forEach(a => {});
//     let jumlah = 0
//     for(a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;
// }


// jumlahkanAngka(1, 2, 3, 4, 5);


// for..in
// const mhs = {
//     nama : "sandhika",
//     umur : 33,
//     email : "sandhikagalih@unpas.ac.id"
// }

// for(n in mhs) console.log(mhs[n]);