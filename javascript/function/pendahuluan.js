// nyoba

// function volume2Kubus(x, y) {
//     x **= 3;
//     y **= 3;
//     return (x + y);
// }

// var x = prompt("Masukkan panjang kubus 1");
//     y = prompt("Masukkan panjang kubus 2");

// var kubus = (volume2Kubus(x, y));
// console.log(kubus);
// alert("Panjang sisi kubus 1 adalah " + x + "\nPanjang sisi kubus 2 adalah " + y + "\nMaka hasilnya adalah " + kubus);



function angkaRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

var x = angkaRandom(1, 27)
console.log(x)