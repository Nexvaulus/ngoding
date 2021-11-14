// template literals / template string
// const nama = "Sandhika";
// const umur = 33;
// console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun`);

// embedded expressions
// console.log(`${alert("halo")}`)
// const x = 10;
// console.log(`${(10 % 2 == 0) ? "genap" : "ganjil"}`)

// 1. HTML fragment
// const mhs = {
//     nama : "Sandhika Galih",
//     umur : "33",
//     nrp : "931341",
//     email : "sandhikagalih@unpas.ac.id"

// };

// const el = `
// <div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
    
// </div>
// `;

// document.body.innerHTML = el;


// 2. looping
// const mhs = [
//     {
//         nama: "Sandhika Galih",
//         email: "sandhikagalih@unpas.ac.id"
//     },
//     {
//         nama: "Doddy",
//         email: "doddy@unpas.ac.id"
//     },
//     {
//         nama: "Erik",
//         email: "erik@unpas.ac.id"
//     },
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`;

// document.body.innerHTML = el;


// 3. conditionals
// ternary
// const lagu = {
//     judul: "Tetap Dalam Jiwa",
//     penyanyi: "Isyana Sarasvati",
//     feat: "Rayi Putra"
// }

// const el = `<div class="lagu">
//     <ul>
//     <li>${lagu.penyanyi}</li>
//     <li>${lagu.judul} ${lagi.feat ? `(feat.${lagu.feat})` :""} </li>
//     </ul>
// </div>`;


// document.body.innerHTML = el;


// 4. nested
const mhs = {
    nama: "Sandhika Galih",
    semester: 5,
    mataKuliah: [
        `Rekayasa Web`,
        `Analisis dan Perancangan Sistem Informasi`,
        `Pemrogramana sistem interaktif`
        `Perancangan Sistem Berorientasi Object`
    ],
};

function cetakMataKuliah(mataKuliah) {
    return `
    <ol>
        ${mataKuliah.map(mk => `<li>${mk}}</li>`).join('')}
    </ol>
    `;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester : ${mhs.semester}</span>
    <h4>Mata Kuliah :</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`


document.body.innerHTML = el; 