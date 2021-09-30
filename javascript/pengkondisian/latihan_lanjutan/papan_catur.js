console.log("Latihan : Percabangan dan Perulangan Bersarang [6]");

console.log("Papan Catur")
spasi = ""
for(x = 1; x <= 10; x++) {
    if(x % 2 == 0) {
        for(y = 1; y <= 7; y++) {
            spasi += " #"
        }
    }
    if(x % 2 == 1) {
        for(y = 1; y <= 7; y++) {
            spasi += "# "
        }
    }
    spasi += "\n"
}

console.log(spasi)

console.log("==================")
console.log("Akhir dari program")
console.log("==================")