/*
constanten 
let
functions
event listeners
EN VOEG COMMENTS TOE
*/

// CONSTANTEN VOOR DE BUTTONS //
const btnEetHoning = document.querySelector("#honing");
const btnDrinkBier = document.querySelector("#bier");
const btnSlaap = document.querySelector("#slaap");
const btnSpeel = document.querySelector("#speel");

// LETS OM PLAATJE VAN DE BEER TE VERANDEREN VOOR HET SLAPEN //
let slaapVeranderen = document.querySelector("#default")
let slaapStatus = false

// LETS OM DE TEKST ONDER DE BEER TE VERANDEREN //
let tekstVeranderen = document.querySelector("#tekst");

// FUNCTIONS VAN DE BUTTONS //
function honing() {
    tekstVeranderen.textContent = "De beer heeft honing gegeten";
}

function bier() {
    tekstVeranderen.textContent = "De beer heeft bier gedronken";
}

    /* Wat deze code doet is de slaapStatus staat standaard op false door de let, 
    wanneer je dan op de button klikt veranderd de image naar bearslaap.png en de slaapStatus 
    naar true. Dan na 2 seconden veranderd de image terug naar dat de beer wakker is en wordt de slaapStatus
    naar false veranderd zodat je nog een keer op de knop kan klikken zonder bugs of fouten. */
function slaap() {
    if (slaapStatus == false){
        slaapVeranderen.src = "images/bearslaap.png" 
        slaapStatus = true
        tekstVeranderen.textContent = "De beer slaapt";
        setTimeout (() => {
            slaapVeranderen.src = "images/bear.png";
            slaapStatus = false;
            tekstVeranderen.textContent = "De beer is wakker";
        }, 2000) ;
    } else { 
        slaapVeranderen.src = "images/bear.png"
        slaapStatus = false
        tekstVeranderen.textContent = "De beer is wakker";
    }
}

function speel() {
    tekstVeranderen.textContent = "De beer heeft met de bal gespeeld";
}

// OM ER VOOR TE ZORGEN DAT DE BUTTONS DE FUNCTIONS UITVOEREN //
btnEetHoning.addEventListener("click", honing);
btnDrinkBier.addEventListener("click", bier);
btnSlaap.addEventListener("click", slaap);
btnSpeel.addEventListener("click", speel);