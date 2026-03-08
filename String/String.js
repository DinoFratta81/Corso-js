let name1 = "Beatrice";  //Virgolette doppie
let name2 = 'Nora';        //Virgolette singole(apici)
let name3 = `Luigi
Giacomo
Bruno
Amedeo`;       //Backtick (l'unico che permette di avere una stringa che va su più righe senza errori)

console.log(name3);

console.log("ciao" + name1);  //Concatenazione, non utlizzata

console.log(`Ciao ${name2} ${name1} ${98+8}`); //(templete literal, fattibile con il backtick)



let text = "JavaScript è stupendo!"


console.log("===INFORMAZIONI STRINGA===")
console.log(text);                // Testo
console.log(text.length);         // Quanto è lungo?
console.log(text.charAt(1));      // Carattere posizione 1. Non è la j e non a perchè si inizia a contare da 0, quindi il primo posto è 0 non 1
console.log(text.charAt(0));      // Carattere posizione 0. J perchè si conta da 0
console.log(text.charCodeAt(0));  // Il metedo chatCodeAt serve a restituire il codice Ascii


console.log("\n===RICERCA===");
console.log("Contiene 'Script'?", text.includes("Script")); // Serve a capire se una parola c'è o meno
console.log("Contiene 'Html'?", text.includes("Html"));     // Falso: non lo contiene
console.log("Inizia con 'Java'?", text.startsWith("Java")); 
console.log("Finisce con '!'?", text.endsWith("!"));
console.log("Posizione di 'Script'", text.indexOf("Script"));  // A che indice si trova 'Script'? 
console.log("Ultima posizione della lettera 'a':", text.lastIndexOf("a")); //Dove si trova l'ultima 'a'?





console.log("\n===ESTRAZIONE===");
let blackquote = "Imparare JavaScript è duro ma divertente";
console.log("Testo Originale:", blackquote);
console.log("slice(0, 8):", blackquote.slice(0, 8));   //Mi estrae la parte dagli indici 0 e 8 e me la restituisce
console.log("slice(9, 19):", blackquote.slice(9, 19)); //Mi estrae la parte dagli indici 9 e 19 e me la restituisce
console.log("slice(-11):", blackquote.slice(-11)); // Parti da -11 caratteri dalla fine e prendi tutto il resto
console.log("slice(-11):", blackquote.slice(-11)); // Parti da -11 caratteri dalla fine e prendi tutto il resto
console.log("subString(9, 19):", blackquote.substring(19, 9)); //substring() è “gentile”: se sbagli ordine, li ribalta, slice() invece dice: “inizio > fine? allora niente”.
//Substring non accetta valori negativi e li rende 0



//METODI DI TRASFORMAZIONE
console.log("\n=== TRASFORMAZIONE ===");
let originalText = "   Ciao Mondo JavaScript   ";
console.log("Originale:", `"${originalText}"`);
console.log("Maiuscolo:", originalText.toUpperCase()); //Maiuscolo
console.log("Minuscolo:", originalText.toLowerCase()); //Minuscolo
console.log("Trim(Rimuovi Spazi)", originalText.trim());


// METODI STRINGA - SOSTITUZIONE E SPLIT
console.log("\n=== SOSTITUZIONE E SPLIT ===");
let phrase = "Mi piace Python, Python è ottimo";
console.log("Originale:" , phrase);
console.log("Rimpiazza", phrase.replace("Python", "Javascript")); //Sostiuire solo una parola con un altra
console.log("Rimpiazza", phrase.replaceAll("Python", "Javascript"));  //Sostuire tutte


let csv = "Mario,Rossi,28,Roma";
let parts = csv.split(",");
console.log("Split CSV:", parts); 
// 

let words = "Ciao mondo JavaScript".split(" ");
console.log("Split parole:", words); 


// METODI STRINGA - RIPETIZIONE E PAD
console.log("\n=== RIPETIZIONE E PADDING ===");
let star = "*";
let line = star.repeat(20);
console.log("Linea:", line); 

let number = "7";
let paddedNumber = number.padStart(3, "0");  // Arriviamo a lunghezza 3 e per farlo aggiungi degli 0 (tra virgolette) da sinistra, l'inizio
console.log("Numero con padding:", paddedNumber);  

let name = "Mario";
let paddedName = name.padEnd(10, "."); 
console.log("Nome con punti:", paddedName);  // Arriviamo a lunghezza 10 e per farlo aggiungi dei "."(tra virgolette) da destra, la fine

// ESCAPE CHARACTERS
console.log("\n=== CARATTERI SPECIALI ===");
let quotes = "Lui ha detto: \"Ciao!\"";  // \" per virgolette
let path = "C:\\Users\\Mario\\Documents";  // \\ per backslash
let newlines = "Prima riga\nSeconda riga";  // \n per a capo, sta per new line, ciò dopo \n va a capo
let tab = "Colonna1\tColonna2";  // \t per tab, sta per tab, lo spazio
console.log("Virgolette:", quotes);
console.log("Percorso:", path);
console.log("A capo:\n", newlines);
console.log("Tab:", tab);
