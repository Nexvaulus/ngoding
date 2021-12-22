// coba masukin rumus fisika

// ketidakpastian pengukuran berulang

function ketidakPastian(arr) {
    console.log(arr);

    // N adalah jumlah pengukuran
    // didapat dari length array
    const N = arr.length;
    console.log(N);

    // xo adalah hasil pengukuran nilai rata rata (pengukuran berulang)
    const sigmaX = arr.reduce((x, y) => x + y);
    console.log(sigmaX);
    const Xo = (sigmaX / N).toPrecision(4);
    console.log(Xo);

    // untuk mendapatkan sigma yang dipangkat
    const xPertama = (arr.map(x => (x ** 2)).reduce((x, y) => x + y)).toPrecision(4);
    const xKedua = arr.reduce((x, y) => x + y) ** 2;
    console.log(xPertama);
    console.log(xKedua);
    
    // untuk mengerjakan yang di dalam akar
    const resultSementara = ((N * xPertama - xKedua));
    console.log(resultSementara);

    // untuk mengeluarkan dari akar
    const akar = Math.sqrt(resultSementara);
    console.log(akar);

    // hasil akhir 
    const hasilAkhir = akar % N;
    console.log(hasilAkhir);

    const result = templateString(arr, ketidakPastianRelatif(Xo, hasilAkhir), hasilAkhir);
    console.log(result);

    return result;
}


function ketidakPastianRelatif(hasilPengukuran, ketidakPastian) {
    const hitung = Math.round((ketidakPastian / hasilPengukuran) * 100);
    return hitung;
}

function templateString(arr, ketidakPastianRelatif, ketidakPastianPengukuran) {
    return `
    data pengukuran = ${arr} ; 
    ketidakpastian pengukuran = ${ketidakPastianPengukuran} ;
    ketidakpastian relatif = ${ketidakPastianRelatif}% ;
    `
}

// percobaan pertama
// const percobaanPertama = [12.3, 12.4, 12.5, 12.6, 12.8, 12.9];
// console.log(percobaanPertama);
// console.log(ketidakPastian(percobaanPertama))

// percobaan kedua
const percobaanKedua = [7.64, 7.74, 7.79, 7.59, 7.74]
console.log(percobaanKedua);
console.log(ketidakPastian(percobaanKedua));


