//creo l array per raccogliere i numeri damostrare
let numero_casuale =[]
//genero 5 numeri casuali da 1 a 100 e li immetto nell' array
for(let i=0; i<=4; i++){
numeri= (Math.floor(Math.random() * 100) + 1);
numero_casuale.push(numeri);
}
//mando all' html i 5 numeri casuali
document.getElementById("numeri_generati").innerText = numero_casuale;
//faccio scomparire i numeri dall' html 
setTimeout(function() {
    document.getElementById("numeri_generati").innerText = "";
  }, 1000);
//creo array con input utente
document.getElementById("vai").addEventListener("click", function() {
    let inputValore = document.getElementById("numeri_inseriti").value;
    let numeriInseriti = inputValore.split(",").map(function(numero) {
      return parseInt(numero.trim(), 10);
    });

    let arrayNumeri = [];

    for (let i = 0; i < numeriInseriti.length; i++) {
      let numero = numeriInseriti[i];
      arrayNumeri.push(numero);
    }

    console.log(arrayNumeri);
  });
//