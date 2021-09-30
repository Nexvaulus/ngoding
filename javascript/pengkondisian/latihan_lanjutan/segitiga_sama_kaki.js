console.log("Latihan : Percabangan dan Perulangan Bersarang [4]");

console.log("Segitiga [1]")
var spasi = ""
for(var h = 1; h <= 5; h++) {
    for(var i = h; i <= 5; i++) {
        spasi += " "
    }
    for(var j = 1; j <= h; j++) {
        spasi += "*"
    }
    for(var k = 1; k <= h - 1; k++) {
        spasi  += "*"
    }
    spasi += "\n"
}
console.log(spasi)

console.log("Segitiga [2]")
var spasi = ""
for(var h = 5; h >= 1; h--) {
    for(var i = h; i <= 5; i++) {
        spasi += " "
    }
    for(var j = 1; j <= h; j++) {
        spasi += "*"
    }
    for(var k = 1; k <= h - 1; k++) {
        spasi  += "*"
    }
    spasi += "\n"
}
console.log(spasi)

console.log("==================")
console.log("Akhir dari program")
console.log("==================")