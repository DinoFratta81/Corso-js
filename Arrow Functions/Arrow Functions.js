// //Sintassi:
// eslint-disable-next-line no-undef
() => expression  //Nessun parametro
// eslint-disable-next-line no-undef
x => expression  //Un paramentro (parentesi opzionali)
    // eslint-disable-next-line no-unexpected-multiline, no-undef
    (x, y) //=> (non deve essere commentato)=> expression  //Più parametri (parentesi obbligatoria)
// eslint-disable-next-line no-undef, no-unused-vars
x => { statments; return value; } //Corpo con più righe

//Esempio
() => 2 + 2 //Parentesi obbligatorie se non abbiamo paramentri da mettere
// eslint-disable-next-line no-unused-vars
x => 2 + 2  //Se abbiamo un solo parametro


//Return:

x => x * 2 //Return implicito; io voglio questo risultato e si capisce da come scrivo la funzione
x => { return x * 2; }  //Return esplicito, gli diciamo cosa deve fare
// eslint-disable-next-line no-undef
() => ({ prop: value })  //Return oggetto, parentesi extra




// (x,y) //=> 
//     {
//   console.log()
//   return x + y
// }

//Esempi

let double = i => i * 2;
let isEven = n => n % 2 === 0;

console.log(double(2))
console.log(isEven(5))
console.log(isEven(2))

// button.addEventListener(`click`, () => console.log('Clicked!'));


// let expensiveTech = products
//    .filter(item => item.category === "Tech")
//    .filter(item => item.price > 20)
//    .map(item => item.name)


   //Function declaration - hoisting


   console.log(add(2,3));

   function add(a,b){
    return a + b;
   }


   //Arrow function - errore(no hoisting)

   console.log(multiply(2, 4));

   // eslint-disable-next-line no-useless-assignment
   let multiply = (a, b) => a * b;

   //L'hoisting è un comportamento di JavaScript in cui le dichiarazioni di variabili e funzioni vengono spostate in cima al loro contesto di esecuzione durante la fase di compilazione.
   //Ciò significa che è possibile utilizzare una funzione dichiarata prima della sua definizione nel codice, ma non è possibile fare lo stesso con le funzioni arrow, poiché sono assegnate a variabili e non vengono sollevate.