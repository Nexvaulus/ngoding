// var angka = prompt("Masukkan angka ");
// if(angka % 2 === 0) {
//     alert("[" + angka + "] adalah bilangan GENAP");
// }

// else if(angka % 2 === 1) {
//     alert("["  + angka + "] adalah bilangan GANJIL");
// }

// else{
//     alert("Yang anda masukkan bukan angka");
// }

// alert("Akhir dari program")


console.log("PR : Juragan Angkot [4]");
var jumlahangkot = 10;
var angkotberoperasi = 6;
var angkotlembur1 = 8;
var angkotlembur2 = 10;
var angkotlembur3 = 5;
var angkot = 1;

for (angkot; angkot <= jumlahangkot; angkot++) {
	if( angkot <= angkotberoperasi && angkot !== angkotlembur3) {
		console.log('angkot no. ' + angkot + ' beroperasi dengan baik');
	} 

    else if(angkot === angkotlembur1 || angkot === angkotlembur2 || angkot === angkotlembur3) {
        console.log("angkot no. " + angkot + " sedang lembur.");
    } 

    else {
		console.log('angkot no. ' + angkot + ' tidak dapat beroperasi.');
	}
}


