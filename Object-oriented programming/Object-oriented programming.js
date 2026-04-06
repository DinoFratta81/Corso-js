// La programmazione ad oggetti è un modo di scrivere codice, che si chiama pattern, che si basa su oggetti, che sono delle entità che rappresentano qualcosa del mondo reale, come una persona, un animale, una macchina, ecc. Gli oggetti hanno delle proprietà, che sono delle caratteristiche che li descrivono, e dei metodi, che sono delle azioni che possono compiere.

//Sintassi:
class persona { // Persona è il nome della classe, che è un modello per creare oggetti
//     nome = "Matteo" //Proprietà, nome è una proprietà della classe persona, che rappresenta il nome di una persona
//     cognome = "Zingaretti" //Proprietà, cognome è una proprietà della classe persona, che rappresenta il cognome di una persona
    constructor(nome = "Dino", cognome = "Fratta"){
        this.nome = nome //Accetto altri parametri dall'esterno, se non passo dei valori, prenderà i valori di default, altrimenti avrà i valori che ho passato
        this.cognome = cognome //Accetto altri parametri dall'esterno, se non passo dei valori, prenderà i valori di default, altrimenti avrà i valori che ho passato
    }
    saluta(capo){ 
        return `Ciao ${capo}, sono ${this.nome} ${this.cognome}`
    }
}

//Con la sintassi constructor  sintassi dico sostanzialmente che ogni volta che creo un oggetto, di default avrà nome: "Dino" e cognome: "Fratta", ma posso anche passare dei valori diversi al momento della creazione dell'istanza, se la classe è stata definita con un costruttore che accetta dei parametri, come in questo caso. In questo modo, se non passo dei valori, l'oggetto avrà i valori di default, altrimenti avrà i valori che ho passato.

//nome e cognome formano il corpo della classe persona, che è un insieme di proprietà che descrivono una persona

//Ogni volta che creo un oggetto, sto creando un'istanza, che è un nuovo ogetto derivante da quella classe, chiamabile sia istanza che oggetto

let persona1 = new persona();
persona1.nome = "Vito"
persona1.cognome = "Eder"
let persona2 = new persona(); // Sarà Dino Fratta, perché non ho passato dei valori, quindi prenderà i valori di default
let persona3 = new persona("Giacomo", "Favino");  // Posso passare i valori direttamente al momento della creazione dell'istanza, se la classe è stata definita con un costruttore che accetta dei parametri

console.log(persona1.saluta("Sgn.Mario"));
console.log(persona2.saluta("Mister"));
console.log(persona3.saluta("Sgn.Amministratore")); //Ciò che sta dentro le parentesi sarebbe "capo", che sta nella funzione saluta


// In programmazione qualcosa che è fuori si chiama variabile, se è dentro è una proprietà
// In programmazione un funzione si chiama tale fuori la programmazione ad oggetti, dentro invece metodo 