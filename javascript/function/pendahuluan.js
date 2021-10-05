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

// variabel scope
// yang ada di dalam kurung kurawal adalah block scope
// variabel yang ada di dalam function adalah variabel lokal
// variabel yang diluar function adalah variabel global
// variabel yang ada di dalam function tidak bisa dipanggil jika sudah dideklarasi di dalam tapi yang diluar bisa
// variabel yang ada di dalam function bisa dipanggil jika tidak dideklarasi di dalam dan tidak ada deklarasi diluar