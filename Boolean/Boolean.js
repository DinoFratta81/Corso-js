//Esempi

let isLoggedIn = true;
let isOn = false;
let hasPermission = false;

console.log(typeof isLoggedIn);


//I 6 valori falsy(sempre falsi)

console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

//Esempi di Valori truthy
console.log(Boolean(true));    // True
console.log(Boolean(3));    // True
console.log(Boolean(-1));    // True,-1≠0, quindi ok
console.log(Boolean("hello"));    // True (stringa non vuota)
console.log(Boolean("0"));    // True (0 come stringa, non come numero!)
console.log(Boolean(" "));    // True, non è una stringa vuota, ma c'è uno spazio
console.log(Boolean([]));    // True, array vuoto
console.log(Boolean({}));    // True, oggetto vuoto


//Operatori di confronto

console.log(5 > 10);   //Maggiore 
console.log(5 < 10);   //Minore
console.log(5 == 10);   //Uguale(doppio uguale)
console.log("10"== 10);   //True. Perchè svolge conversione implicita e c'è l'ugualianza tra i valori, quindi 10 stringa diventa 10 numero è 10 è effetivamente uguale a 10
console.log("10" === 10);   //False. Qui abbiamo anche il confronto del tipo di dato, e 10 stringa non è uguale a 10 numero
console.log("10" != 10);    //False. Dopo la conversione 10=10. != indica la disugualianza.
console.log("10" !== 10);   //True.  10 stringa è diverso da 10 numero 

//Tutti gli operatori possibili

// == stesso valore
// === identici
// != diverso
// !== diverso anche nel tipo di dato
// > maggiore
// < minore
// >= maggiore uguale
// <= minore uguale

console.log(9 <= 9);
console.log(9 != 9);
console.log(9 !== 9);
console.log(9 != "9");
console.log(9 !== "9");

// espressione = qualcosa che fornisce un valore


let isFinished = 9 != 9;
console.log(isFinished);
console.log(typeof isFinished);
console.log(isNaN(89796));
console.log(isNaN("sd123"));
console.log(isNaN("sd123"- 8));

let text = "Hi, I am an italian student";

console.log(text.startsWith("Hi"));
console.log(text.startsWith("Ho"));
console.log(text.endsWith("student"));
console.log(text.endsWith("studest"));