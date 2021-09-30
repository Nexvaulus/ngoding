console.log("Latihan : Percabangan dan Perulangan Bersarang [3]");

console.log("Segitiga [1]")
var spasi = "";
for(var x = 1; x <= 5; x++) {
    for(var y = 1; y <= x; y++) {
        spasi += "*";
    }
    spasi += "\n";
}
console.log(spasi);

console.log("segitiga [2]")
var spasi = "";
for(var a = 5; a >= 1; a--) {
    for(var b = 1; b <= a; b++) {
        spasi += "*";
    }
    spasi += "\n";
}
console.log(spasi);

console.log("segitiga [3]")
var spasi = "";
for(var a = 5; a >= 1; a--) {
    for(var d = a; d <= 5; d++) {
        spasi += " ";
    }
    for(var b = 1; b <= a; b++) {
        spasi += "*";
    }
    spasi += "\n";
}
console.log(spasi);

console.log("segitiga [4]")
var spasi = "";

for(var x = 1; x <= 5; x++) {
    for(var z = x; z <= 5; z++) {
        spasi += " ";
    }
    for(var y = 1; y <= x; y++) {
        spasi += "*"; 
    }
spasi += "\n";
}
console.log(spasi);

console.log("==================")
console.log("Akhir dari program")
console.log("==================")

