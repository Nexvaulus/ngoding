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
var arr = ["Sandhika", "Galih", "Nofa"];
console.log(arr.join());

// 2. push & pop
arr.push("Doddy"); // push
console.log(arr.join());

arr.pop();
arr.pop();
console.log(arr.join()); // pop

// 3. unshift dan shift
arr.unshift("Doddy");

arr.shift();
console.log(arr.join());

// 4. splice
// rumus nya splice(indexAwal, mauDihapusberapa, elemenBaru1, elemenBaru2, ...)
var arr = ["Sandhika", "Galih", "Nofa"];
arr.splice(2, 0, "Doddy");
console.log(arr.join("-"));

// 5. slice
// slice(awal, akhir)
// misalnya slice(1, 3)
// yang keambil 1 sama 2
var arr = ["Sandhika", "Galih", "Nofa", "Doddy", "Fitri"];
var arr2 = arr.slice(1, 3);
console.log(arr2.join())

