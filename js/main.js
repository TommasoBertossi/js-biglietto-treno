const kilometers = parseInt(prompt("Quanti chilometri devi percorrere?"));
const age = parseInt(prompt("Quanti anni hai?"));
const fullPrice = kilometers * 0.21;
let inizialPhrase = ("Il prezzo del tuo biglietto è di ");
let price;

if(isNaN(kilometers) || isNaN(age)) {
    alert('Errore! Scrvi i dati in numeri.');
    }else if(age < 18) {
        price = fullPrice - (fullPrice / 100) * 20;
    }else if(age > 65) {
        price = fullPrice - (fullPrice / 100) * 40;
    } else price = fullPrice;

price = price.toFixed(2);
const screenPrint = inizialPhrase + price

document.getElementById("ticketPrice").innerHTML = screenPrint;