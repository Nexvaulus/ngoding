var ulang = true;

alert("Looping while")
while(ulang) {
    console.log("Hello World");
    ulang = confirm("Lagi?");
}

console.log("")
alert("Contoh lagi");
var  nilaiAwal = 1;
while(nilaiAwal <= 10) {
    console.log("Hello World [angka sekarang " + nilaiAwal + "x]");
    nilaiAwal++;
}

console.log("\n")
console.log("PR : Juragan Angkot");
var jumlahangkot = 10;
var angkot = 1;
while(angkot <= jumlahangkot) {
    console.log("Angkot no. " + angkot + " beroperasi dengan baik.");
    angkot++
}