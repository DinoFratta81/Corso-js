
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
    console.log(`"For:", Questo è l'elemento all' indice ${i}: ${nomi2[i]}`);
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



const voti = [10];

for (let i = 0; i < voti.length; i++) {
    const voto = voti[i];


    switch (true) {
        case voto === 10:
            console.log(i, voto, "→ Eccellente");
            break;
        case voto === 9 || voto === 8:
            console.log(i, voto, "→ Ottimo");
            break;
        case voto === 7:
            console.log(i, voto, "→ Buono");
            break;
        case voto === 6:
            console.log(i, voto, "→ Sufficente");
            break;
        case voto === 5 || voto === 4 || voto === 3 || voto === 3 || voto === 1:
            console.log(i, voto, "→ Insufficente");
            break;
        default: console.log("Voto non esistente")
            break;
    }
}



const numeri5 = [1, "kpdv", 98, 12, 8];

i = 0;

while (i < numeri5.length) {
    const numero = numeri5[i]
    i++

    switch (true) {
        case numero < 5:
            console.log(i, numero, "Molto Piccolo");
            break;
        case numero >= 5 && numero <= 10:
            console.log(i, numero, "Piccolo");
            break;
        case numero >= 11 && numero <= 20:
            console.log(i, numero, "Medio");
            break;
        case numero > 20:
            console.log(i, numero, "Grande");
            break;
        default: console.log(i, "Valore non riconosciuto");
            break;
    }
}


const colori = ["rosso", "blu", "verde", "giallo", "nero", "bianco", "p9jsdb ik",];

for (let i = 0; i < colori.length; i++) {
    const colore = colori[i];

    switch (true) {

        case colore === "rosso":
        case colore === "giallo":
            console.log(i, colore, "Caldo")
            break;
        case colore === "blu":
        case colore === "verde":
            console.log(i, colore, "Freddo")
            break;
        case colore === "nero":
            console.log(i, colore, "Neutro Scuro");
            break;
        case colore === "bianco":
            console.log(i, colore, "Neutro Chiaro")
            break;

        default:
            console.log(i, colore, "Errore")
            break;
    }

}


for (let i = 0; i < colori.length; i++) {
    const colore = colori[i];

    switch (colore) {

        case "rosso":
        case "giallo":
            console.log(i, colore, "Caldo")
            break;
        case "blu":
        case "verde":
            console.log(i, colore, "Freddo")
            break;
        case "nero":
            console.log(i, colore, "Neutro Scuro");
            break;
        case "bianco":
            console.log(i, colore, "Neutro Chiaro")
            break;

        default:
            console.log(i, colore, "Errore")
            break;
    }

}

// Differenza tra switch con true e switch con key(colore nel caso sopra):
// Nel primo caso, il switch valuta espressioni booleane e può gestire condizioni più complesse, mentre nel secondo caso, il switch confronta direttamente il valore della variabile con i casi specifici.



function descriviVoto(voto) {
    if (voto >= 8)
        return "Ottimo";
    if (voto === 7 || voto === 6)
        return "Buono";
    if (voto <= 5)
        return "Insuffciente";
}

console.log(descriviVoto(4)); // stampa tutti i voti


const voti2 = [10, 9, 8, 7, 6, 5, 4, 3];

const ottimi = voti2.filter(v => v >= 8);
console.log(ottimi);


const descrizioni = voti2.map(voto => {
    if (voto >= 8) return "Ottimo"
    if (voto === 7 || voto === 6) return "Buono"
    if (voto <= 6) return "Insufficiente"
})

console.log(descrizioni);


const mediaVoti = voti2.reduce((acc, n) => acc + n, 0);
console.log(mediaVoti / voti2.length);


const studente = {
    nome: "Dino",
    voto: 9,
    promosso: true,
    descrizione: function () {
        console.log(`Lo studente ${this.nome} ha voto ${this.voto} ed è promosso.`)
    }

};


console.log(studente.descrizione());


const prodotto = {
    nome: "Mouse",
    prezzo: 98,
    sconto: 20,
    prezzoFinale: function () {
        const scontoAssoluto = this.prezzo * this.sconto / 100;
        return this.prezzo - scontoAssoluto;
    },
    descrivi: function () {
        console.log(`Il prodotto ${this.nome} costa ${this.prezzo}, con sconto ${this.sconto}%, il prezzo finale è ${this.prezzoFinale()}€`);
    }
}


console.log(prodotto.descrivi());


const studenti = [
    { nome: "Dino", voto: 9 },
    { nome: "Marco", voto: 6 },
    { nome: "Luca", voto: 8 }
];


console.log(studenti[0].nome);
console.log(studenti[1].voto);


function descriviStudenti() {

    for (let i = 0; i < studenti.length; i++) {
        const stud = studenti[i];
        console.log(stud.nome, stud.voto);




        switch (true) {
            case stud.voto >= 8:
                console.log(i, studenti[i], "Bravo")
                break;

            case stud.voto === 7 || stud.voto === 6:
                console.log(i, studenti[i], "Puoi fare meglio")
                break;

            case stud.voto <= 5:
                console.log(i, studenti[i], "Impegnati di più")
                break;
            default: console.log("Errore")
                break;
        }
    };

};

console.log(descriviStudenti(6));


const auto = {
    marca: "BMW",
    modello: "M3",
    velocita: 0,
    accelera() {
        this.velocita += 10
    },
    frena() {
        this.velocita -= 10;
    },
    descriviAuto() {
       console.log(`Auto ${this.marca}, ${this.modello}, va ${this.velocita}`);
    }
};



auto.accelera();
auto.accelera();
auto.descriviAuto();

auto.frena();
auto.descriviAuto();