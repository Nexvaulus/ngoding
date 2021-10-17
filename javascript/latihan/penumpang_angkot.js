// latihan 

var penumpang = [];
// ==== versi panjang ====
// var tambahPenumpang = function(namaPenumpang, penumpang) {
//     // jika angkot kosong
//     if(penumpang.length == 0) {
//         // tambah penumpang di awal array
//         penumpang.push(namaPenumpang);
//         // kembalikan isi array dan keluar dari function
//         return penumpang;
//     }    
//     else {
//         // telusuri seluruh kursi dari awal
//         for(var i = 0; i < penumpang.length; i++) {
//             // jika ada kursi kosong
//             if(penumpang[i] == undefined) {
//                 // tambah penumpang di kursi tersebut
//                 penumpang[i] = namaPenumpang;
//             }
//             // jika sudah ada nama yang sama
//             else if(penumpang[i] == namaPenumpang) {
//                 // tampilkan pesan kesalahannya
//                 console.log(namaPenumpang + " sudah ada di dalam angkot.")
//             }
//             // jika seluruh kursi terisi
//             else if(i == penumpang.length - 1) {
//                 // tambah penumpang di akhir array
//                 penumpang.push(namaPenumpang);
//             }
//     // kembalikan isi array dan keluar dari function
//     return penumpang;
//         }
//     }
// }

var tambahPenumpang = function(namaPenumpang, penumpang) {
    for(var i = 0; i < penumpang.length; i++) {
        if(penumpang[i] == undefined) {
            return penumpang.splice(i, 1, namaPenumpang);
        }
        else if(penumpang[i] == namaPenumpang) {
            console.log(namaPenumpang + " sudah ada di dalam angkot.");
            return penumpang;
        }
    }
    return penumpang.push(namaPenumpang);
}

// ==== versi panjang ====
// var hapusPenumpang = function(namaPenumpang, penumpang) {
//     // telusuri seluruh angkot dari awal
//     for(var i = 0; i < penumpang.length; i++) {
//     // jika angkot kosong
//     if(penumpang.length == 0) {
//         // tampilkan pesan bahwa angkot kosong
//         console.log("Angkot sedang kosong");
//         // kembalikan isi array dan keluar dari function
//         return penumpang;
//     }
//     else {
//             // jika nama penumpang sesuai
//             if(penumpang[i] == namaPenumpang) {
//                 // hapus penumpang dengan mengubah menjadi undefined
//                 penumpang[i] == undefined;
//                 // kembalikan isi array dan keluar dari function
//                 return penumpang
//             }
//             else if(i == null) {
//                 console.log(namaPenumpang + " tidak ada di dalam angkot");
//             }
//             return penumpang.splice(i, 1, null);
//         }
//     }
// }

var hapusPenumpang = function(namaPenumpang, penumpang) {
    if(penumpang.length == 0) {
        console.log("Angkot masih kosong.");
    }
    else {
        for(var i = 0; i < penumpang.length; i++) {
            if(i == penumpang.length - 1) {
                console.log(namaPenumpang + " tidak ada di dalam angkot.");
                return penumpang;
            }
            else if(penumpang[i] == namaPenumpang) {
                return penumpang[i] = undefined;
            }
        }
    }
} 


// implementasi object

// membuat object angkot
function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, bayar) {
        if(this.penumpang.length === 0) {
            alert("Angkot masih kosong.");
            return false;
        }
        for(var i = 0; i < this.penumpang.length; i++) {
            if(this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }
}

var angkot1 = new Angkot("Sandhika Galih", ["Cicaheum", "Cibiru"], [], 0);
var angkot2 = new Angkot("Tom Cruise", ["Antapani", "Ciroyom"], [], 0);

