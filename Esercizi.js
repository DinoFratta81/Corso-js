 
 
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
    if (!acc[categoria]) {
        acc[categoria] = 0;
    }


    acc[categoria] += prodotto.prezzo;
    return acc
}

let somma2 = prodotti.reduce(raggruppa, {});

console.log(somma2);


//--- Cicli for e while

for (let i = 0; i < 4; i++) {
    console.log(i);
}

let i = 0; // 1. inizializzo la variabile

while (i <= 3) { // 2. condizione
    console.log(i); // 3. azione
    i++;            // 4. incremento
}



const nomi = ["Dino", "Marco", "Luca"];

for (i = 0; i < nomi.length; i++) {
    console.log(nomi[i]);

    while (i < nomi.length) {
        console.log(nomi[i]);
        i++;
    }
}

for (i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

const nomi2 = ["Dino", "Marco", "Luca", "Sara"];


for (i = 0; i < nomi2.length; i++) {
    console.log(`"For:", Questo è l'elemento all indice ${i}: ${nomi2[i]}`);
}



i = 0;

while (i < nomi2.length) {
    console.log("While", i, nomi2[i]);
    i++;
}


const numeri4 = [12, 5, 8, 130, 44, 9, 2];

let conteggio = 0;

for (let i = 0; i < numeri4.length; i++) {
    if (numeri4[i] > 10) {
        console.log(numeri4[i]);
        conteggio++
    }
}

i = 0;
while (i < numeri4.length) {
    if (numeri4[i] % 2 === 0) {
        console.log(numeri4[i])
        conteggio++
    }
    i++
}


console.log(`Totale numeri stampati: ${conteggio}`);


const valori = [3, 18, 7, 22, 5, 11, 40, 1];


conteggio = 0;

for (i = 0; i < valori.length; i++) {
    if (valori[i] < 10) {
        console.log(valori[i]);
        conteggio++
    }
}

i = 0;
while (i < valori.length) {
    if (valori[i] % 5 === 0) {
        console.log(valori[i])
        conteggio++;
    }
    i++
}

console.log(`Totale conteggio2:  ${conteggio}`);


const voti = [10, 4, 7, 5, 3, 8, 6, 9];


for (let i = 0; i < voti.length; i++) {
  const voto = voti[i];

  switch (true) {
    case voto === 10:
      console.log(i, voto, "→ Eccellente");
      break;

    case voto === 9 || voto === 8:
      console.log(i, voto, "→ Ottimo");
      break;

    case voto === 7 || voto === 6:
      console.log(i, voto, "→ Buono");
      break;

    case voto === 5:
      console.log(i, voto, "→ Sufficiente");
      break;

    default:
      console.log(i, voto, "→ Insufficiente");
  }
}
