console.log("Latihan : Percabangan dan Perulangan Bersarang [7]");

console.log("Segitiga Pascal")

var spasi = ""

for(var x = 1; x <= 5; x++) {
    for(var z = x; z <= 5; z++) {
        spasi += " "
    }
    for(var y = 1; y <= x; y++) {
        spasi += "* "
    }
    // for(var d = 1; d <= x - 1; d++) {
    //     spasi += "*"
    // }
    spasi += "\n"
}
console.log(spasi)








console.log("==================")
console.log("Akhir dari program")
console.log("==================")