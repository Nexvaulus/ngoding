// rekursif adalah function yang memanggil dirinya sendiri
// dibutuhkan base case untuk menghentikan looping didalam function

// contoh
function angkaUrut(x) {
    if(x == 0) return x;
    console.log(x);
    return x = angkaUrut(x-1);
}
angkaUrut(5)

// faktorial
function faktorial(y) {
    if(y == 1) return y;
    return y * faktorial(y - 1);

}
console.log(faktorial(5));

