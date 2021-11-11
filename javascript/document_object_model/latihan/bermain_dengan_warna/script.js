// const colorPickerBG = document.querySelector('input');
// colorPickerBG.addEventListener('change', function () {
//     const rgb = colorPickerBG.value

//     document.body.style.backgroundColor = rgb;
// })

// ganti warna body dengan tombol
const tUbahWarna = document.getElementById('tUbahWarna');
// tUbahWarna.addEventListener('click', function(""))
tUbahWarna.onclick = function() {
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda');
}

// ganti warna body dengan warna random
const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tUbahWarna.after(tAcakWarna)

function acakAngka(max) {
    return Math.round(Math.random() * max + 1)
}

tAcakWarna.addEventListener('click', function () {
    const r = acakAngka(255);
    const g = acakAngka(255);
    const b = acakAngka(255);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})

// ganti warna dengan range button
const warna = document.getElementById('warna')
const sMerah = warna.querySelector('input[name=sMerah]');
const sHijau = warna.querySelector('input[name=sHijau]');
const sBiru = warna.querySelector('input[name=sBiru]');

warna.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})

// // ganti warna dengan posisi mouse
// document.body.addEventListener('mousemove', function (event) {
//     // posisi mouse
//     // console.log(event.clientX); dan y
//     // ukuran browser
//     // console.log(window.innerWidth);
//     const xPos = Math.round((event.clientX / window.innerWidth) * 255);
//     const yPos = Math.round((event.clientX / window.innerHeight) * 255);
//     document.body.style.backgroundColor = `rgb(${xPos}, ${yPos}, 100)`
// })