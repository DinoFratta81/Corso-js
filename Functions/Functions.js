function saluta(nome = "Giada") { //Il paramentro può essere predefinito o modificabile tra le parentesi
    console.log(`Ciao ${nome}!`)
}

//dentro la dichiarazione della funzione "nome" prende il valore di paramentro
//fuori invece quando viene richiamata è l'argomento

saluta("Aziz")
saluta("Harry")
saluta()


function add(x, y) {
    return x + y  //Con return il risultato ci torna indietro
}


console.log(`Il risultato è ${add(2, 3)}`)


function add(x, y) {
    if (!isNumber(x) || !isNumber(y)) {
        return "Argomenti non validi"
    }
    return x + y
}

function isNumber(valore) {
    return typeof valore === "number"

}

console.log(`Il risultato è ${add(2, 3)}`)
console.log(`Il risultato è ${add("Hsfui", 3)}`)


let moltiplica = function (x, y) { } //Funzione anonima assegnata a una variabile


//Scope, indica lo scopo di una variabile, cioè la parte del codice in cui è accessibile. 

let rana = "Rana";  //Varibili fuori qualsiasi blocco di codice hanno uno scope globale, cioè possono essere usate da tutti


function somma() {
    // let rana = "zaino"
    let età = "sessanta";
    console.log(rana);
    console.log(età);


    return età
}

//Le variabili dichiarate dentro una funzione hanno uno scope locale, cioè possono essere usate solo all'interno di quella funzione, 

somma();
console.log("dfafdafwg" ,somma());
console.log(rana);


//Da fuori non posso accedere a ciò che è dentro la funzione, per farlo dovrei usare un return per far tornare il valore fuori dalla funzione