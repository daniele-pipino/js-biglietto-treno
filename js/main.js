// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
// Questo richiederà un minimo di ricerca.



// chiedere età e numero di chilometri

var passengerAge = prompt('Quanti anni hai?');
console.log('Passenger Age', passengerAge);

var kilometres = prompt('Di quanti Chilometri devi Spostarti?');
console.log('Km', kilometres);


// prezzo per chilometro

 var kilometresPrice = 0.21;

// calcolo costo del biglietto

var ticketCost = kilometres * kilometresPrice;
console.log('Costo del biglietto', ticketCost);

// definizione sconti 


if (passengerAge < 18) {
    
    var scontoMinori = (ticketCost / 100) * 20;
    console.log('Sconto Minori: ', scontoMinori);
    discountSpot.innerText = 'Discount: 20%.'
   
}

else if (passengerAge > 65) {

    var scontoadulti = (ticketCost / 100) * 40;
    console.log('Sconto adulti: ', scontoadulti);
    discountSpot.innerText = 'Discount: 40%;'

}

else  {
    discountSpot.innerText = 'Discount: 0.'
}

// aggiunta testo in html

var kmSpot = document.getElementById('kilometres').innerText = kilometres;
var priceSpot = document.getElementById('price');
var discountSpot = document.getElementById('discount');
var totalSpot = document.getElementById('total');









