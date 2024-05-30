// Constanten voor de buttons 
const btnEetHoning = document.querySelector("#honing");
const btnDrinkBier = document.querySelector("#bier");
const btnSlaap = document.querySelector("#slaap");
const btnSpeel = document.querySelector("#speel");

// Constanten voor de bars
const hongerBar = document.querySelector("#honger-bar");
const dorstBar = document.querySelector("#dorst-bar");
const slaapBar = document.querySelector("#slaap-bar");
const vermaakBar = document.querySelector("#vermaak-bar");

// Lets voor het afspelen van sounds Bron: https://noaheakin.medium.com/adding-sound-to-your-js-web-app-f6a0ca728984 
const honingSound = new Audio("sounds/honingslurp.mp3");
const bierSound = new Audio("sounds/drinkbier.mp3");
const slaapSound = [
    new Audio("sounds/snurk.mp3"),
    new Audio("sounds/snurk2.mp3")
]
const balSound = new Audio("sounds/balbonk.mp3");

// Lets om het plaatje van de beer te veranderen 
let bearVeranderen = document.querySelector("#default");
let honingStatus = false;
let bierStatus = false;
let slaapStatus = false;
let speelStatus = false;

// Let om de tekst onder de beer te veranderen 
let tekstVeranderen = document.querySelector("#tekst");

// Lets voor de waarde van de bars
let honger = 100;
let dorst = 100;
let moeheid = 100;
let vermaak = 100;

// Lets om de intervals op te slaan en om de x aantal miliseconden worden deze decrease functies uitgevoerd
let intervalHonger = setInterval(decreaseHonger, 750);
let intervalDorst = setInterval(decreaseDorst, 1125);
let intervalSlaap = setInterval(decreaseSlaap, 1500);
let intervalVermaak = setInterval(decreaseVermaak, 900);
let intervalDood = setInterval(controleerDood, 750) // Check elke 750 miliseconden of de beer al dood is
 
// Functions van de buttons 
// ChatGPT heeft mij geholpen met het schrijven van de code voor de bars
// ChatGPT: https://chatgpt.com/share/38f76a65-2117-401b-a17c-e01ad76ec2f8
// ChatGPT: https://chatgpt.com/share/3f6e4d84-296d-4cc4-9037-30ed8c6b37c2
// ChatGPT: https://chatgpt.com/share/af7f17b4-8b77-4728-a41d-1f69de0bcba9 
function honing() {
    if (honingStatus == false){ // Checkt of honingStatus true of false is (is false by default)
        bearVeranderen.src = "images/bearhoning.png"; // Wanneer honingstatus dus false is en je klikt op de button verandert het plaatje
        honingStatus = true; // Zet honingstatus naar true
        tekstVeranderen.textContent = "De beer eet honing"; // Verandert de text
        honingSound.play() // Speelt mp3 af

        let randomHonger = Math.floor(Math.random() * 50) + 15; // Kiest een random getal en rond deze af
        honger += randomHonger; // Voegt het random getal aan de honger toe
        hongerBar.style.width = honger + '%'; // hongerBar wordt geupdate (Bijvoorbeeld als honger 50 is dan is het % van de balk ook 50)
        
        if (honger > 100) { // Zorgt ervoor dat de honger niet hoger dan 100 kan, dus dat het niet buiten de bar komt
            honger = 100;
            hongerBar.style.width = vermaak + '%'; 
        }

        setTimeout (() => { // Na 500 miliseconden wordt alles weer terug gezet naar de default status van de beer
            bearVeranderen.src = "images/bear.png";
            honingStatus = false;
            tekstVeranderen.textContent = "De beer heeft de honing op";
        }, 2000) ;
    } 
}

function decreaseHonger() { //Zorgt ervoor dat de honger bar langzaam leeg loopt
    if (honger > 0) { // Als honger hoger dan 0 is dan vermindert hij de honger met 1
        honger -= 1; 
        hongerBar.style.width = honger + '%'; // hongerBar wordt geupdate (Bijvoorbeeld als honger 50 is dan is het % van de balk ook 50)
    }
}

function bier() {
    if (bierStatus == false){
        bearVeranderen.src = "images/bearbier.png" ;
        bierStatus = true;
        tekstVeranderen.textContent = "De beer drinkt bier";
        bierSound.play()

        let randomDorst = Math.floor(Math.random() * 50) + 15;
        dorst += randomDorst;
        dorstBar.style.width = dorst + '%';

        if (dorst > 100) {
            dorst = 100;
            dorstBar.style.width = vermaak + '%';
        }

        setTimeout (() => {
            bearVeranderen.src = "images/bear.png";
            bierStatus = false;
            tekstVeranderen.textContent = "De beer heeft het bier op";
        }, 2000) ;
    } 
}

function decreaseDorst() {
    if (dorst > 0) {
        dorst -= 1; 
        dorstBar.style.width = dorst + '%';
    }
}

function slaap() {
    if (slaapStatus == false){
        bearVeranderen.src = "images/bearslaap.png"; 
        slaapStatus = true;
        tekstVeranderen.textContent = "De beer slaapt";
        willekeurigSnurk();

        let randomMoeheid = Math.floor(Math.random() * 100) + 15;
        moeheid += randomMoeheid;
        slaapBar.style.width = moeheid + '%';

        if (moeheid > 100) {
            moeheid = 100;
            slaapBar.style.width = vermaak + '%';
        }

        setTimeout (() => {
            bearVeranderen.src = "images/bear.png";
            slaapStatus = false;
            tekstVeranderen.textContent = "De beer is wakker";
        }, 5000) ;
    } 
}

function decreaseSlaap() {
    if (moeheid > 0) {
        moeheid -= 1; 
        slaapBar.style.width = moeheid + '%';
    }
}

function speel() {
    if (speelStatus == false){
        bearVeranderen.src = "images/bearbal.png" ;
        speelStatus = true;
        tekstVeranderen.textContent = "De beer speelt met de bal";
        balSound.play()

        let randomVermaak = Math.floor(Math.random() * 50) + 15;
        vermaak += randomVermaak;
        vermaakBar.style.width = vermaak + '%';

        if (vermaak > 100) {
            vermaak = 100;
            vermaakBar.style.width = vermaak + '%';
        }

        setTimeout (() => {
            bearVeranderen.src = "images/bear.png";
            speelStatus = false;
            tekstVeranderen.textContent = "De beer is klaar met spelen";
        }, 2000) ;
    } 
}

function decreaseVermaak() {
    if (vermaak > 0) {
        vermaak -= 1; 
        vermaakBar.style.width = vermaak + '%';
    }
}

// Function om te checken of de beer al dood is of niet
function controleerDood () { 
if (honger == 0 || dorst == 0 || moeheid == 0 || vermaak == 0) { // Wanneer een van deze waardes op 0 komt sterft de beer
    bearVeranderen.src = "images/beardood.png"; // Het plaatje wordt dan aangepast
    tekstVeranderen.textContent = "Helaas, je hebt de beer niet goed genoeg verzorgd en nu is die gesneuveld"; // De tekst wordt dan veranderd
    btnEetHoning.removeEventListener("click", honing); // De buttons worden dan disabled
    btnDrinkBier.removeEventListener("click", bier);
    btnSlaap.removeEventListener("click", slaap);
    btnSpeel.removeEventListener("click", speel);
    clearInterval(intervalHonger) // De bars stoppen hierdoor met lopen want het cleart de interval waarmee ze constant -1 gedaan worden
    clearInterval(intervalDorst)
    clearInterval(intervalSlaap)
    clearInterval(intervalVermaak)
    }
}

// Function om willekeurig snurk geluid af te spelen
function willekeurigSnurk() {
    const randomIndex = Math.floor(Math.random() * slaapSound.length); // Pakt een random getal tussen 0 en 1 en vermenigvuldigt deze met de 2 (lengte van de slaapSound array). En rond deze daarna af naar beneden dus het wordt 0 of 1.
    const randomSnurk = slaapSound[randomIndex]; // Wanneer randomIndex 0 of 1 is pakt hij dus slaapSound 0 of slaapSound 1
    randomSnurk.play(); // De gekozen slaapSound wordt afgespeeld
}

// Om er voor te zorgen dat de buttons de functions uitvoeren
btnEetHoning.addEventListener("click", honing);
btnDrinkBier.addEventListener("click", bier);
btnSlaap.addEventListener("click", slaap);
btnSpeel.addEventListener("click", speel);