let persona = {
    nome: "Ugo",
    cognome: "Fantozzi",
    età: 91,
    indirizzo:{
        via:"Armani",
        cap:"79098",
        città: "Ancona"
    },
    interessi:["Filosofia", "Architettura"],
    segreteria: function(){
        return `Ciao sono ${this.nome} ${this.cognome}, lasciate un messaggio!`
    },
}
//Con "this" facciamo riferimento all'oggetto stesso, in questo caso persona, quindi this.nome è uguale a persona.nome, this.cognome è uguale a persona.cognome e così via.
//In questo modo possiamo accedere alle proprietà dell'oggetto all'interno della funzione segreteria, solo nell'oggetto persona, se avessimo un altro oggetto con una funzione segreteria, this farebbe riferimento a quell'oggetto e non a persona.

//"Nome" è la chiave, "Ugo" è il valore, così per tutte le altre coppie chiave-valore.
//In indirizzo abbiamo un oggetto dentro un oggetto, e in interessi abbiamo un array dentro un oggetto, questo è possibile perchè in JavaScript gli oggetti possono contenere qualsiasi tipo di dato, compresi altri oggetti e array.
console.log(persona);
console.log(persona.età);
console.log(persona["età"]);
//Usiamo la notazione a punto per accedere alle proprietà dell'oggetto quando conosciamo il nome della proprietà, mentre usiamo la notazione a parentesi quando il nome della proprietà è dinamico o non è un identificatore valido (ad esempio, se contiene spazi o caratteri speciali).


let sceltaUtente = "indirizzo";
console.log(persona[sceltaUtente]["cap"]);

//Se la chiave è dinamica vuol dire che è contenuta in una variabile

let sceltaUtente2 = "città";
console.log(persona["indirizzo"]["città"]);

persona.nome = "Gianluca";  //Modificare il valore di una chiave
persona.indirizzo.via ="Toledo"; 
delete persona.interessi; //Eliminare il l'elemento dell'oggetto

console.log(persona);

console.log(persona.segreteria());

//Metodi degli oggetti
console.log(Object.values(persona)); //Sono tutti i valori delle chiavi
console.log(Object.keys(persona));  //Sono tutte le chiavi
console.log(Object.entries(persona)); //È un array che ci restituisce degli array con le coppie chiave-valore.

let {nome, cognome} = persona;

console.log(nome);
console.log(cognome);

//Con questa sintassi stiamo facendo un'operazione chiamata destructuring, che ci permette di estrarre le proprietà di un oggetto e assegnarle a delle variabili con lo stesso nome delle proprietà. In questo caso stiamo creando due variabili nome e cognome che prendono i valori delle proprietà nome e cognome dell'oggetto persona.