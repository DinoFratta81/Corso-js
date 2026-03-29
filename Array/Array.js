//Gli array sono un tipo di dato che permette di memorizzare più valori in una singola variabile. 
//In JavaScript, gli array sono oggetti che possono contenere qualsiasi tipo di dato, inclusi numeri, stringhe, oggetti e persino altri array. 


//Esempio
let fruits = ["Banana", "Cherry", "Peach","Apple"];
fruits[0] = "Mango" //Cambiare l'elemento alla posizione 0
fruits[4] = "Pear" // Aggiungo alla posizone 4
fruits[fruits.length] = "Strawberry" //Aggiungo all'ultimo posto
console.log(fruits);
console.log(fruits[0]); // Per accedere al primo elemento dell'array, quello in posizione 0. In js si inizia a contare da 0, quindi il primo elemento è in posizione 0, il secondo in posizione 1 e così via.
console.log(fruits.length); //Per sapere quanti elementi ci sono
console.log(fruits[fruits.length - 1]); //Per sapere l'ultimo elemento dell'array

fruits.push("Pineapple"); //Lo metto in fondo 
console.log(fruits);
fruits.pop(); //Elemina l'ultimo elemento
console.log(fruits);
fruits.unshift("Dragon fruit"); //Inserisce il nuovo elemento all'inizio
console.log(fruits);
fruits.shift(); //Elimina il primo elemento
console.log(fruits);

let items = ["a", "b", "c", "d", "e"];

//Rimuovere elemnti

let removed = items.splice(1,2); //Il primo numero è da dove inizio a rimuovere, ed il secondo è il numero di elementi da togliere
console.log(removed); // ['b', 'c']
console.log(items);  // ['a', 'd', 'e']

//Aggiungere elementi
items.splice(1,0, "x", "y");
console.log(items);


//Sostituire elementi
items.splice(1,2, "z");
console.log(items);



let numbers = [10, 20, 30, 20, 40];

console.log(numbers.indexOf(20)); //1, perchè ci da la prima posizione
console.log(numbers.lastIndexOf(20)); // 2, perchè ci da l' ultima posizione
console.log(numbers.indexOf(50)); // -1, non trovato
console.log(numbers.indexOf(20, 2)); // 3 perchè inizia a contare da 2 

console.log(fruits.includes("Mango"));
console.log(fruits.includes("Kiwi"));
console.log(fruits.includes("mango")); //Falso perchè è sensitive e mango è scritto con la minuscola invece della maiuscola

let users = [
    { name : "Mario", age: 25},
    { name : "Gianpiero", age: 35},
    { name : "Edoardo", age: 22}
];


//Trova utente over 25
let oldUser = users.find(user => user.age > 25);
console.log(oldUser);

//Se non trova
let youngUser = users.find(user => user.age < 20);
console.log(youngUser);


let surnames = ["Fratta", "Pilla", "Savastio"];

console.log(surnames.join());
console.log(surnames.join(""));
console.log(surnames.join(" - "));


let numbers1 = [1,2,3,4,5];


console.log(numbers1.slice(1,4)); //Da 1 a 3, 4 escluso
console.log(numbers1.slice(2));  //Da due alla fine
console.log(numbers1.slice(-2)); //GLi ultimi 2   

//Concatenare gli array

let arr1 = [1,2];
let arr2 = [3,4];
let arr3 = [5,6];

let combined = arr1.concat(arr2);
console.log(combined);
//Con slice, join e concat gli array base rimangono intatti

//Reversare l'array comporta la modifica di quello originale
let numbers2 = [1,2,3,4,5];

numbers2.reverse();
console.log(numbers2);



//Sort(ordinare)

//Ordine alfabetico
let names =["Gianni", "Zakaria", "Cristiano"];
names.sort();
console.log(names);


//Ordine numerico crescente

let numbers3 = [20,54,67,12];
numbers3.sort((a,b) => a - b);
console.log(numbers3);

//Ordine numerico decrescente
numbers3.sort((a,b) => b - a);
console.log(numbers3);

//Array di array


let schacchiera = [
    [[1,2,3], "a2", "a3", "a4", "a5"], //0
    ["b1", "b2", "b3", "b4", "b5"],  //!
    ["c1", "c2", "c3", "c4", "c5"]  //2
]

//Per accedere dentro un determinato elemento bisogna:
 console.log(schacchiera[0][0][2]); // Stiamo acccdendo alla riga "0", all'elemento "0" e al suo interno all'elemento "2", che è il numero 3

