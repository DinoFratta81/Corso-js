// 1. STRING - TESTO 
let name = "Giorgio"
let position = '15esimo'
let message = `Spiacente ${name}, sei arrivato ${position}; ritenta!`;
console.log(message);
// Queste erano stringhe di testo, componibili con tutti i tipi di apici sopra rappresentati

// 2.NUMERI

let number = 78;               //Intero 
let price = 65.99;             //Decimale
let temperature = -5;          //Negativo
let infinity = Infinity        //Infinito
let notANumber = NaN           //(esempio:34- "erba" = NaN : non esiste)

// 3.BOOLEN - Vero/Falso

let isLoggedIn = true;
let isStudent = false;

// 4.UNDEFINED

let userData;                  //Dichiarata ma non assegnata
let address = undefined;       // Esplicitamente undefined


// 5.NULL - Vuoto Intensionale

let selectedFiles = null;
let correntUser = null;


// 6.SYMBOL - Indentificatore Univoco
let id1 = Symbol("user");
let id2 = Symbol("user");


// 7.BIGINT - Numeri Molto Grandi

let bigNumber = 12762648716494634n;
let aBigNumber = BigInt("029843839985859303094");


console.log(typeof isStudent)
console.log(typeof correntUser)
console.log(typeof address)

//typeof serve per controllare il tipo di dato; a causa di un bug di js "null" viene restituito come "object"