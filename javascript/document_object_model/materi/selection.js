// DOM selection
// node adalah satuan atau elemen apapun yang tunggal (disebbut node)
// nodelist adalah kumpulan node entah itu element atau atribut
// HTMLcollection adalah kumpulan node yang isinya element

// bisa ambil elemen dengan cara

// document.getElementById() => menghasilkan element saja
// const judul = document.getElementById("judul");
// judul.style.color = "red";
// judul.style.backgroundColor = "#ccc";
// judul.innerHTML = "Sandhika Galih";


//  document.getElementsByTagName() => menghasilkan HTMLCollections
// const p = document.getElementsByTagName("p");
// bisa pake cara manual
// p[0].style.backgroundColor = "lightblue";
// p[1].style.backgroundColor = "lightblue";
// p[2].style.backgroundColor = "lightblue";
// p[3].style.backgroundColor = "lightblue";

// bisa dengan looping
// for(let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = "lightblue";
// }

// const h1 = document.getElementsByTagName("h1")[0];
// h1.style.fontSize = "50px";


// document.getElementsByClassName() => menghasilkan HTMLCollection
// const p1 = document.getElementsByClassName("p1")[0];
// p1.innerHTML = "ini diubah dari javascript";


// document.querySelector() => menghasilkan element
// const p4 = document.querySelector("#b p");
// p4.style.color = "green";
// p4.style.fontSize = "30px";

// const li2 = document.querySelector("section#b ul li:nth-child(2)")
// li2.style.backgroundColor = "orange";

// kalo querySelector dipake buat cari selector yang banyak bakal diambil yang paling pertama aja
// const p = document.querySelector("p");
// p.innerHTML = "ini diubah dengan javascript";

// document.querySelectorAll("p") => mengembalikan nodeList
// const p = document.querySelectorAll("p");
// for(let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = "lightblue";
// }

// mengubah node root

// const b = document.querySelector('section#b');
// const p4 = b.getElementsByTagName('p')[0];
// p4.style.backgroundColor = "orange";


