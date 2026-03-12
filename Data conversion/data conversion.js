// La conversione può essere:

// implicita (coercion) 

// esplicita (casting)


//Esempi di conversione implicita


let result = "5" + 3;   //Stringa
let result2 = 9 + "7";  //Stringa
let result3 = "Il tuo punteggio è:" + 100;  //Stringa
console.log(typeof result);
console.log(typeof result2);
console.log(typeof result3);
console.log(result3);

//Tutte concatenazioni; quandi quando abbiamo una stringa + un numero o viceversa il rusltato è sempre una stringa per concatenazione

let result4 = "6" - "4";
let result5 = "3" * "12";
let result6 = "90" / "3";
let result7 = "7" - 3;
let result8 = "Ba9" - 8;
console.log(typeof result5);
console.log(typeof result7);
console.log(result8);

//Delle operazioni con dei numeri,purchè non sia un'addizione, anche se sono stringhe, daranno come risultato un numero, perchè operazioni "*", "-", "/" le riconosce come operazioni numeriche 

let result9 = true + 5;  // Fa 6 perchè true = 1 
let result10 = false + 3;  //Fa 3 perchè false = 0
let result11 = false * 9;
let result12 = true * 7;
console.log(result11);
console.log(result9);


//Esempi di conversione esplicita

//Numeri a stringa
let score = 30;
let scoreText = String(score);
console.log(scoreText);
console.log(typeof scoreText);
console.log(typeof score);


//Boolean a stringa
let isActive = false;
let statusText = String(isActive);
console.log(typeof isActive);
console.log(typeof statusText);

//Null a stringa

let undefinedValue = null;
let undefinedText = String(undefinedValue);
console.log(typeof undefinedValue); 
console.log(typeof undefinedText);

// Quindi con String() si converte un valore in stringa, oppure con Number() o Boolean() convertiamo in rispettivamente Numeri e Boolean


console.log(parseInt("123"));  // 123
console.log(parseInt("123.99")); // 123   (si ferma al punto)
console.log(parseInt("123gfq")); // 123   (si ferma alla g)
console.log(parseInt("gfq123"));  // NaN   (non inizia con un numero)
console.log(parseInt(""));  // NaN   (stringa vuota)
 
console.log(parseFloat("123.99")); // 123.99
console.log(parseFloat("123.99gfq")); // 123.99 (si ferma alla g)
console.log(parseFloat("123")); // 123 (nessun decimale, standard)
console.log(parseFloat("abc123"));  // NaN    (non inizia con numero)

// parseInt: Estrae solo la parte intera della stringa, leggendo da sinistra verso destra finché trova cifre valide.
    // Appena incontra qualcosa che non è un numero → si ferma.
   // Deve iniziare con un numero, altrimenti → NaN
  // Ignora tutto ciò che viene dopo la parte numerica.  Non legge decimali
//parseFloat: Funziona come parseInt(), ma accetta anche decimali.
  //Deve iniziare con un numero. Accetta un solo punto decimale. Si ferma al primo carattere non valido

//   Differenza in una frase
// parseInt() → prende solo la parte intera

// parseFloat() → prende anche la parte decimale

// Entrambi leggono solo dall’inizio: se la stringa non comincia con un numero, restituiscono NaN.

let number = 42;
let text = number.toString();
console.log(text);
console.log(typeof text);