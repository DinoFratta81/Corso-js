// Sono:
// map() - Transforma ogni elemento
// filter() - Filtro per condizioni
// reduce() - Riduce a valore singolo
// find()/findindex() - trova prima elemento
// some()/every() - Controlli boolean
// forEach() - Iterazione semplice

let numbers = [20,70,100,310];

let double = numbers.map(num => num * 2);
console.log(double);


//map()

let names = ["vegeta", "erminia", "domenico"];
let capitalized = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));
console.log(capitalized);

//filter

let numbers2 = [25,67,80,190];

let even = numbers2.filter(num =>num % 2 == 0);
let odd = numbers2.filter(num =>num % 2 == 1);
console.log(even);
console.log(odd);


let users = [
    {name : "Gioacchina", age: 30},
    {name : "Ernesto", age: 31},
    {name : "John", age: 22}
];

let filtred = users.filter(user =>user.age < 25);
let filtred2 = users.filter(user =>user.age > 25);
console.log(filtred);
console.log(filtred2);

//Reduce

let numbers3 = [10,30,54,119];
let result = numbers3.reduce((accumulator, current) => {
    return accumulator + current
}, 0);

console.log(result);

// Accumulator è 0 all'inizio, poi diventa 10, poi 40, poi 94, e infine 213, questo perchè diciamo fai accumulator(all'inizio è 0) + current(10) e così via fino alla fine dell'array, alla fine avremo la somma di tutti i numeri dell'array.


//Find/findIndex()

let x = numbers.find(num => num > 70 && num < 310);
let xPosition = numbers.findIndex(num => num > 70 && num < 310);
console.log(x);
console.log(xPosition);

//Questo per dire che find() ci restituisce il primo elemento che soddisfa la condizione, mentre findIndex() ci restituisce l'indice del primo elemento che soddisfa la condizione.


//Some()/every()

let ages = [
    {name: "Mariella", age: 14},
    {name: "Marianna", age: 22},
    {name: "Antonia", age: 25},
    "Glorio"
];

let minori = ages.some(person => person.age < 18);
let maggiorenni = ages.every(person =>  typeof person == "object");
console.log(minori);
console.log(maggiorenni);

//forEach

let ages2 = [20,30,45,67,98];

for(let i = 0; i < ages2.length; i++){
    console.log(`For: ${ages2[i]}`)
};

ages2.forEach(age => {
    console.log(`ForEach: ${age}`)
})


