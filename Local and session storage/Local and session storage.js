//Sono:
// Local storage → preferenze utente (tema, lingua, ecc.), persistono anche dopo la chiusura del browser
// Session storage → dati temporanei finché la scheda è aperta (es: step di un form, stato della pagina)
// cookie
// indexedDB (no sql)
// cache API


localStorage.setItem("chiave", "valore");
localStorage.setItem("nome", "gary");


sessionStorage.setItem("nomesessione", "gary");

console.log("Leggo da local:", localStorage.getItem("nome"));


sessionStorage.setItem("nomesessione", "azmun");


console.log("Leggo da session:", sessionStorage.getItem("nomesessione"));

sessionStorage.removeItem("nomesessione"); //rimuove un elemento specifico
localStorage.clear();     //rimuove tutto



//---


const persona = { name : "Gianni", age: 76 };

localStorage.setItem("persona", JSON.stringify(persona)); //JSON.stringify converte un oggetto in una stringa JSON, che può essere memorizzata nel localStorage


//È come se faccessimo:

// const personaStringata = `{name : "Gianni", age: 76}`;



console.log(JSON.parse(localStorage.getItem("persona")));  //JSON.parse converte una stringa JSON in un oggetto JavaScript, che può essere utilizzato nel codice.


//Modificare un elemento:

const temp = JSON.parse(localStorage.getItem("persona"));


temp.name = "Gianniiiiiiiii";

console.log(temp);
localStorage.setItem("persona", JSON.stringify(temp));