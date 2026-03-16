console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false &&false);

// let age = 20;
// let hasLicence = true;
//oppure

// let age = 17;
// let hasLicence = false;
//Oppure


let age = 19;
let hasLicence = false;

console.log("Può guidare?", age > 18 && hasLicence);

//Con &&(che significa and) per avere vero tutte le condizioni devono essere vere


console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

//Con "or" almeno una deve essere vera 

console.log(!true);  //Con ! davanti diventa false
console.log(!false);  //Con ! davanti diventa true
console.log(!0);  //0 è un falsy value, ma con ! diventa true
console.log(!1);  //1 è true, ma ! diventa false
console.log(!"");  //La stringa vuota è falsy ma diventa true 
console.log(!"Valerio");  //Una stringa normale diventa false

//In generale con !(not) davanti si inverte l'espressione, si ottiene il risultato inverso


//Esempi

let isOnline = false;
console.log(!isOnline);
console.log(!(5 < 10));

console.log(!!"hello");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!![]);

//Il double not (!!) converte al boolean corrente, è una conversione veloce