const kilometers = parseInt(prompt("Quanti chilometri devi percorrere?"));
const age = parseInt(prompt("Quanti anni hai?"));
const fullPrice = kilometers * 0.21;

if (isNaN(kilometers) || isNaN(age) {
    alert('Errore! Scrvi i dati in numeri.');
    }else if(age < 18) {
        let price = fullPrice - (fullPrice / 100) * 20;
    }else if(age > 65) {
        let price = fullPrice - (fullPrice / 100) * 40;
    } else price = fullPrice;

