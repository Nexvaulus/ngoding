// menetapkan nyawa
var nyawa = 3;
lagi = true;

// menangkap angka random dari comp
function angkaRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

var x = angkaRandom

while(lagi == true)
  while(nyawa >= 1) {
    // menangkap value dari player
    var player = prompt("Masukkan Angka diantara 1 sampai 10 :");

    // menampilkan clue
    if(player == x) {
      alert("Jawaban anda benar")
    }
    else if(player < x) {
      alert("Angka anda terlalu kecil");
      nyawa--
    }

    else if(player > x) {
      alert("Angka anda terlalu besar");
      nyawa--
    }
      

  if(nyawa == 0) {
    lagi = confirm("Lagi?")
    }
  if(lagi == true) {
    nyawa + 3
    }
}

alert("Terimakasih sudah bermain")
