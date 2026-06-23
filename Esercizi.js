/* eslint-disable no-unused-vars */
//Da:
function somma(a, b) {
    return a + b;
}

//A

let add = (x, y) => x + y;
console.log(add(2, 8));

//Da:
function èMaggiorenne(età) {
    if (età >= 18) {
        return true;
    }
    return false;
}


//Da:

const èMaggiorennE = (età) => età >= 18;

//Da: 
function saluta(nome) {
    return "Ciao " + nome;
}



//A:

const saluta1 = (nome) => `Ciao ${nome}`;






let double = n => n * 2;


let numeri = [83928, 390, 3081, 93, 80];
const filtraPari = numeri => numeri.filter(n => n % 2 === 0);
console.log(filtraPari(numeri));

const filtraDispari = numeri => numeri.filter(n => n % 2 != 0);
console.log(filtraDispari(numeri));


let numeri1 = [3, 10, 15, 22, 7, 8];

const èPari = n => n % 2 === 0;

const numeriPari = numeri1.filter(èPari);
console.log(numeriPari);

const èDispari = n => n % 2 != 0;
const numeriDispari = numeri1.filter(èDispari);
console.log(numeriDispari);


let numeri2 = [1, 2, 3, 4, 5];

const raddoppia = n => n * 2;
const èDoppio = numeri2.map(raddoppia);
console.log(èDoppio);

let numeri3 = [1, 2, 3, 4, 5];
const somma1 = (acc, n) => acc + n;
const totale = numeri3.reduce(somma1, 0);
console.log(totale);


const prodotti = [
    { nome: "Mouse", prezzo: 20, categoria: "tech" },
    { nome: "Tastiera", prezzo: 50, categoria: "tech" },
    { nome: "Maglietta", prezzo: 15, categoria: "abbigliamento" },
    { nome: "Pantaloni", prezzo: 40, categoria: "abbigliamento" },
    { nome: "Monitor", prezzo: 150, categoria: "tech" }
];

const raggruppa = (acc, prodotto) => {
    const categoria = prodotto.categoria

    if (!acc[categoria]) { //Se non esiste l'accomulatore della categoria...
        acc[categoria] = 0;  //sarà uguale a 0
    }

    acc[categoria] += prodotto.prezzo //L'accomulatore della categoria sarà uguale a sè stesso più il prezzo del singolo prodotto


    return acc
}

let somma2 = prodotti.reduce(raggruppa, {});

console.log(somma2);





