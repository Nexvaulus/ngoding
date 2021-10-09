// manipulasi array

// 1. menambah isi array
var arr = [];
arr[0] = "Sandhika";
arr[1] = "Galih";
arr[2] = "Nova";

// 2. menghapus isi array
var arr = ["Sandhika", "Galih", "Nova"];
arr[1] = undefined;

// 3. menampilkan isi array
var arr = ["Sandhika", "Galih", "Nova"];
for(var i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    // bisa untuk menampilkan data siswa
    console.log("Siswa ke-" + (i+1) + " : " + arr[i])
}


// method pada array 
// 1. join
// join untuk menampilkan isi array dalam bentuk string bukan object
console.log("");
var arr = ["Sandhika", "Galih", "Nofa"];
console.log(arr.join());

// 2. push & pop
console.log("");
arr.push("Doddy"); // push
console.log(arr.join());

arr.pop();
arr.pop();
console.log(arr.join()); // pop

// 3. unshift dan shift
console.log("");
arr.unshift("Doddy");

arr.shift();
console.log(arr.join());

// 4. splice
// rumus nya splice(indexAwal, mauDihapusberapa, elemenBaru1, elemenBaru2, ...);
console.log("");
var arr = ["Sandhika", "Galih", "Nofa"];
arr.splice(2, 0, "Doddy");
console.log(arr.join("-"));

// 5. slice
// slice(awal, akhir)
// misalnya slice(1, 3)
// yang keambil 1 sama 2
console.log("");
var arr = ["Sandhika", "Galih", "Nofa", "Doddy", "Fitri"];
var arr2 = arr.slice(1, 3);
console.log(arr2.join());

// 6. forEach
// forEach adalah for loop tapi lebih sakti karena bisa menggunakan function didalam array
console.log("");
var angka = [1,2,3,4,5,6,7,8];
// for (var  i = 0; i < angka.length; i++) {
//     console.log(angka[i])
    // bisa kaya gitu buat munculin array tapi bakal lebih sakti kalo forEach
// }
angka.forEach(function(n) {
    console.log(n);
});

var nama = ["Sandhika", "Galih", "Nofa"];
nama.forEach(function(e, i) {
    console.log("Mahasiswa ke-" + (i+1) + " adalah : "  + e);
})

// 7.map 
// map lebih baik dari forEach karena mengembalikan array
console.log("");
var angka = [1, 2, 3, 5, 6];
var angka2 = angka.map(function(r) {
    return r * 2;
})
console.log(angka2.join(","));

// 8. sort
// sort untuk mengurutkan
console.log("")
var angka = [1,2,15,28,39,5,8,4,6];
console.log(angka.join(" - "))
angka.sort(function(a,b) {
    return a - b;
});
console.log(angka.join(" - "))

// 9. filter
// filter mencari nilai dan mengembalikan dalam bentuk array
console.log("")
var angka = [1,2,15,28,39,5,8,4,6];
var angka2 = angka.filter(function(x) {
    return x > 5;
})
angka2.sort(function(a, b) {
    return a - b;
});
console.log(angka2.join(" - "));

// 10. find
// find hanya mencari satu nilai
console.log("")
var angka = [1,2,15,28,39,5,8,4,6];
var angka2 = angka.find(function(x) {
    return x == 5;
})
console.log(angka2);