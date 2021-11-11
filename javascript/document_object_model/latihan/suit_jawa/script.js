// suit jawa v2.0

function angkaRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.round(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
    
var comp = angkaRandom(1, 10);

if(comp < 2) {
    comp = "gajah";
} 
else if(comp >= 2 && comp < 7) {
    comp = "semut";
} 
else {
    comp = "orang";
}

function getPilihanComputer() {
    const comp = Math.floor(Math.random() * (100 - 1) + 1);
    if(comp < 33) return "gajah";
    else if(comp >= 33 && comp < 66) return "semut";
    return "orang";
}

function getHasil(comp, player) {
    if(player == comp) return "SERI!";
    if(player == "gajah") return (comp == "orang") ? "MENANG!" : "KALAH!";
    if(player == "orang") return (comp == "gajah") ? "KALAH!" : "MENANG!";
    if(player == "semut") return (comp == "orang") ? "KALAH!" : "MENANG!";
}

function putar() {
    const imgComputer = document.querySelector('.img-computer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if(new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return
        }
        imgComputer.setAttribute(`src`, `img/${gambar[i++]}.png`);
        if(i == gambar.length) i = 0;
    }, 100);
};

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(i) {
    i.addEventListener('click', function() {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = i.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        putar();

        setTimeout(function() {
            const imgComputer = document.querySelector('.img-computer');
            imgComputer.setAttribute('src', `img/${pilihanComputer}.png`);
    
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1500);
    });
});


// versi panjang

// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', `img/${pilihanComputer}.png`);

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', `img/${pilihanComputer}.png`);

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer  = pSemut.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
    
//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', `img/${pilihanComputer}.png`);

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });


