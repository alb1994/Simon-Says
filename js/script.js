//creo funzione che confronta due array per individuare elementi comuni 
function confrontaarray(array1, array2) {
  let elementiComuni = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      elementiComuni.push(array1[i]);
    }
  }
  return elementiComuni;
}
////////////////////////////////////////////////////
//creo l array per raccogliere i numeri damostrare
let numero_casuale =[]
//genero 5 numeri casuali da 1 a 100 e li immetto nell' array
for(let i=0; i<=4; i++){
numeri= (Math.floor(Math.random() * 100) + 1);
numero_casuale.push(numeri);
}
console.log("numeri casuali",numero_casuale);
//mando all' html i 5 numeri casuali
document.getElementById("numeri_generati").innerText = numero_casuale;
//faccio scomparire i numeri dall' html 
setTimeout(function() {
    document.getElementById("numeri_generati").innerText = "";
  }, 1000);
//creo un array dove andro a pushare i numeri inseriti dall' utente
let arrayNumeri = [];
//creo strumento per recupero dei numeri dal dom 
document.getElementById("vai").addEventListener("click", function() {
    let inputValore = document.getElementById("numeri_inseriti").value;
    let numeriInseriti = inputValore.split(",").map(function(numero) {
      return parseInt(numero.trim(), 10);
    });
    //creo un ciclo for per pushare i numeri inseriti nell arraynumeri
    for (let i = 0; i < numeriInseriti.length; i++) {
      let numero = numeriInseriti[i];
      arrayNumeri.push(numero);
    }

    console.log("numeri inseriti dall' utente",arrayNumeri);
    //richiamo funzione per controlare se ci sono numeri uguali
    let numeriUguali = confrontaarray(arrayNumeri, numero_casuale);
    //controllo quali sono i numeri uguali
    let contatoreUguali = numeriUguali.length;
    //stampo quanti numeri su 5 sono stati indovinati
    console.log("L' utente ha indovinato ",contatoreUguali,"numeri su 5");
    //stampo i numeri indovinati
    console.log(numeriUguali);
  });
