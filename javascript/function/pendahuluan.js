// nyoba

function volume2Kubus(x, y) {
    return (x**3 + y**3);
}

var x = prompt("Masukkan panjang kubus 1");
    y = prompt("Masukkan panjang kubus 2");

var kubus = (volume2Kubus(x, y));
console.log(kubus);
alert("Panjang sisi kubus 1 adalah " + x + "\nPanjang sisi kubus 2 adalah " + y + "\nMaka hasilnya adalah " + kubus);

function coba () {
  return arguments
}
var x = coba(2, 3, "Hello World", true);
console.log(x);

function tambah() {
  var hasil = 0;
  for(var i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}

var coba = tambah(1,2,3);
console.log(coba)