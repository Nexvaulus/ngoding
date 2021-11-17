// suit jawa v2.0

function getPilihanComputer() {
    const comp = Math.floor(Math.random() * (100 - 1) + 1);
    if(comp < 33) return "gajah";
    else if(comp >= 33 && comp < 66) return "semut";
    return "orang";
}

function getHasil(comp, player) {
    if(player == comp) return "SERI!";
    if(player == "gajah") return (comp == "semut") ? "KALAH!" : "MENANG!";
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
            
            const scoreComputer = document.querySelector('.score-computer');
            const scorePlayer = document.querySelector('.score-player');
        
            let x = 0
            let y = 0
            if(hasil == "MENANG!") {
                return scorePlayer.innerHTML = `Player : ${x++}`;
            } else if(hasil == "KALAH!") {
                    return scoreComputer.innerHTML = `Comp : ${y + 1}`;
                };
   
        }, 1500);
    });
});



const center = document.querySelector('.center');
const iMerah = center.querySelector('input[name=iMerah]');
const iHijau = center.querySelector('input[name=iHijau]');
const iBiru = center.querySelector('input[name=iBiru]');

center.addEventListener('input', function() {
    const r = iMerah.value;
    const g = iHijau.value;
    const b = iBiru.value;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
