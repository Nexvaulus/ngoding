console.log("Latihan : Percabangan dan Perulangan Bersarang [2]");

var spasi = "";
for(var x = 1; x <= 5; x++) {
    for(var y = 1; y <= x; y++) {
        spasi += "*";
    }
    spasi += "\n";
}

for(var x = 6; x >= 1; x--) {
    for(var y = 1; y <= x; y++) {
        spasi += "*";
    }
    spasi += "\n";
}
console.log(spasi);

console.log("==================")
console.log("Akhir dari program")
console.log("==================")

