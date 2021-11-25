// spread operator
// memecah iterables menjadi single element


// console.log(...mhs[0]);

// menggabungkan dua array
// const mhs = ["Sandhika", "Doddy", "Erik"];
// const dosen = ["Ade", "Hendra", "Wanda"];
// const orang = [...mhs, ...dosen]; // bisa masukin di tengah tengah
// const orang = mhs.concat(dosen);


// meng-copy array
// const mhs = ["Sandhika", "doddy", "Erik"];
// const mhs1 = mhs;
// mhs1[0] = "Fajar";
// const mhs1 = [...mhs];
// mhs1[0] = "Fajar";
// console.log(mhs1);


// const liMhs = document.querySelectorAll("li");
// console.log(liMhs[0].textContent)

// for(let i = 0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent)
// }

// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs)


// const nama = document.querySelector(".nama");
// const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join("")
// nama.innerHTML = huruf;



// rest parameter



// function myFunc(a, b, ...myArgs) {
//     return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
//     return myArgs;
//     return Array.from(arguments); -> menghasilkan object bukan array
//     return [...arguments]; -> menghasilkan array
// }


// console.log(myFunc(1, 2, 3, 4, 5));


// function jumlahkan(...angka) {
    // return angka.reduce((x, y) => x + y);
    // let total = 0;
    // for(const x of angka) total += x;
    // return total;
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));


// array destructuring
// const kelompok1 = ["Sandhika", "Doddy", "Erik", "Fajar", "Hendra"];

// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota.join(", "));


// object destructuring
// const team = {
//     pm: "Sandhika",
//     frontEnd1: "Doddy",
//     frontEnd2: "Erik",
//     backEnd: "Fajar",
//     ux: "hendra",
//     devOps: "Ferry",
// }

// const {pm, ...myTeam} = team;
// console.log(myTeam);

// filtering
// function filterBy(type, ...values) {
//     return values.filter(x => typeof(x) === type);
// }

// console.log(filterBy("boolean", 1, 2, 3, "sandhika", false, 10, true, "doddy"));
