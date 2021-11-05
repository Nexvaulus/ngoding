// // Execution context, hoisting & scope

// console.log(nama);
// var nama = "Sandhika";

// // creation phase pada Global Context
// // javascript akan mencari keyword pembentukan variabel di dalam global(kecuali function scrope) kalo ada akan di set nama variabel = undefined tanpa mempedulikan operasi 
// // kalo ada function akan di set nama function = fn()
// // itu namanya hoisting
// // window = global object
// // this = window

// var umur = 33

// function sayHello() {
//     console.log(`Halo, nama saya ${nama}, saya ${umur} tahun`)
// }

// Closure
// Lexical scope adalah proses variabel mencari nilai ke local scrope => argument => global scope atau window
// function init() {
//     // let nama = "sandhika"; // local variable
//     return function(nama) { // inner function (closure*)
//         console.log(nama); // akses ke parent variable
//     }
    
// }

// let panggilNama = init();
// panggilNama("Galih")

// contoh penggunaan closure

// function factory

// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Halo ${nama}, selamat ${waktu}, selamat bersenang senang!`);
//     }
// }
// ucapkanSalam("pagi")("Galih")

let add = (function() {
    let counter = 0;
    return function() {
        return ++counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());