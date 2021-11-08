// higher order function adalah function yang memiliki function sebagai argumen nya
// function yang ada di dalam argumen disebut callback
// function yang memiliki callback disebut higher order function

// function kerjakanTugas(mataKuliah, selesai) {
//     console.log(`Mulai mengerjakan tugas ${mataKuliah} ...`);
//     selesai();
// }

// function selesai() {
//     alert(`Selesai mengerjakan tugas!`);
// }

// kerjakanTugas("Ti", selesai);

// contoh higher order function filter, map, & reduce

// const angka = [-1, 8, 9, 4, 6, 5, 7, -2, 10, 3];

// mencari angka >= 3

// menggunakan for loop
// const wadah = [];
// for(let i = 0; i < angka.length; i++) {
//     if(angka[i] >= 3) {
//         wadah.push(angka[i]);
//     } 
// }
// console.log(wadah);

// menggunakan fiter
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);

// menggunakan map
// kalikan semua angka dengan 2
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);

// reduce
// jumlahkan seluruh elemen pada array
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(newAngka);

// method chaining 
// cari angka > 5
// kalikan 3
// jumlahkan
// const hasil = angka.filter(a => a > 5) 
//     .map(a => a * 3)
//     .reduce((acc, cur) => acc + cur);
// console.log(hasil);


// latihan filter map reduce

// pilih hanya yang 'Javascript lanjutan'
const ambil = document.querySelector('data-duration')
console.log(ambil)

// ambil durasi masing masing video

// ubah durasi menjadi integer, ubah menit jadi detik

// jumlahkan semua detik

// ubah formatnya jadi jam menit detik

// simpan di DOM
