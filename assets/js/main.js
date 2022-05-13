console.log('los gehts');
let aufschlag = document.getElementById('aufschlag');
let abzug = document.getElementById('abzug');
let neunZehn = document.getElementById('neunZehn');
let siebZehn = document.getElementById('siebZehn');
let betrag = document.getElementById('euro');
let outputMwst = document.getElementById('outputMwst');
let outputEndpreis = document.getElementById('outputEndpreis');




const berechnen = () => {
    console.log('berechnen');
    console.log(aufschlag.checked);
    console.log(abzug.checked);
    if (aufschlag.checked == true && neunZehn.checked == true) {

        outputMwst.innerHTML = (Number(betrag.value) / 100 * 19).toFixed(2);
        outputEndpreis.innerHTML = Number(betrag.value) + Number(betrag.value) / 100 * 19;
    }
    else if (aufschlag.checked == true && neunZehn.checked == false) {
        outputMwst.innerHTML = (Number(betrag.value) / 100 * 7).toFixed(2);
        outputEndpreis.innerHTML = Number(betrag.value) + Number(betrag.value) / 100 * 7
    }
    else if (aufschlag.checked == false && neunZehn.checked == true) {
        outputMwst.innerHTML = (Number(betrag.value) / 100 * 19).toFixed(2);
        outputEndpreis.innerHTML = Number(betrag.value) - Number(betrag.value) / 100 * 19;
    }
    else if (aufschlag.checked == false && neunZehn.checked == false) {
        outputMwst.innerHTML = (Number(betrag.value) / 100 * 7).toFixed(2);
        outputEndpreis.innerHTML = Number(betrag.value) - Number(betrag.value) / 100 * 7;

    }

}