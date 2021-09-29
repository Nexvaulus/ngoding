var item = prompt("Masukkan nama makanan / minuman : \n (cth : nasi, daging, susu, hamburger, softdrink");

switch (item) {
    case "nasi" :
    case "daging" :
    case "susu" :
        alert("makanan / minuman Sehat!");
        break;
    case "hamburger" :
    case "softdrink" :
        alert("makanan / minuman Tidak Sehat!");
        break;
    default :
    alert("Anda memasukkan nama makanan / minuman yang salah");
    break;
}