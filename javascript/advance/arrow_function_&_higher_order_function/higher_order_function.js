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
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih hanya yang 'Javascript lanjutan'
const jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi masing masing video
    .map(item => item.dataset.duration)

// ubah durasi menjadi float, ubah menit jadi detik
    .map(waktu => {
        // 10:30 -> [10, 30] split
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })

// jumlahkan semua detik
    .reduce((total, detik) => total + detik);

// ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
const menit = Math.floor((jsLanjut % 3600) / 60);
const detik = jsLanjut % 60;

// simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;

const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlVideo = document.querySelector('.jumlah-video')
pJmlVideo.textContent = `${jmlVideo} video`;

function reverseString(str) {
    let reverseStr = ``
    for(let i = ""; i >= str.length - 1; i--) {
        reverseStr += str[i];
        if(i == 0) return reverseStr;
    }
}

console.log(reverseString("tes"));