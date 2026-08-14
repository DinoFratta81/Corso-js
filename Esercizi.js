
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
// Nel primo caso, il switch true valuta espressioni booleane e può gestire condizioni più complesse, mentre nel secondo caso, il switch key confronta direttamente il valore della variabile con i casi specifici.



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


const auto = [
    {
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
            console.log(`Auto ${this.marca}, ${this.modello}, va  a ${this.velocita} km/h.`);
        }
    },

    {
        marca: "Audi",
        modello: "RS6",
        velocita: 0,
        accelera() {
            this.velocita += 20
        },
        frena() {
            this.velocita -= 15;
        },
        descriviAuto() {
            console.log(`Auto ${this.marca}, ${this.modello}, va  a ${this.velocita} km/h.`);
        }
    }
];



for (let i = 0; i < auto.length; i++) {
    auto[i].accelera();
    auto[i].accelera();
    auto[i].descriviAuto();
}



const studenti1 = [
    {
        nome: "Dino",
        voto: 8,
        promosso: true,
        descrivi() {
            console.log(`Studente : ${this.nome}, voto: ${this.voto}, promosso = ${this.promosso}.`)
        },
        miglioraVoto() {
            this.voto++
        },
    },
    {
        nome: "Pilaf",
        voto: 4,
        promosso: false,
        descrivi() {
            console.log(`Studente : ${this.nome}, voto: ${this.voto}, promosso = ${this.promosso}.`)
        },
        miglioraVoto() {
            this.voto++
        },
    },

    {
        nome: "Ernesto",
        voto: 7,
        promosso: true,
        descrivi() {
            console.log(`Studente : ${this.nome}, voto: ${this.voto}, promosso = ${this.promosso}.`)
        },
        miglioraVoto() {
            this.voto++
        },
    }

];

for (let i = 0; i < studenti1.length; i++) {
    if (studenti1[i].voto < 6) {
        studenti1[i].miglioraVoto();
    }

    studenti1[i].descrivi();
};


const studenti2 = [
    { nome: "Dino", voto: 9 },
    { nome: "Marco", voto: 6 },
    { nome: "Luca", voto: 4 }
];

studenti2.forEach(stud => {
    stud.nome
    stud.voto

    let messaggio;

    if (stud.voto >= 8) {
        messaggio = "Ottimo"
    }
    else if (stud.voto >= 6) {
        messaggio = "Sufficiente"
    }
    else {
        messaggio = "Insufficiente"
    }

    console.log(`${stud.nome} ha voto ${stud.voto} = ${messaggio}`);
});



const prodotti2 = [
    { nome: "Mouse", prezzo: 15 },
    { nome: "Tastiera", prezzo: 45 },
    { nome: "Monitor", prezzo: 120 },
    { nome: "Cuffie", prezzo: 25 }
];


prodotti2.forEach(prod => {
    let categoria;
    if (prod.prezzo <= 30) {
        categoria = "Economico"
    }
    else if (prod.prezzo <= 80) {
        categoria = "Medio"
    }
    else {
        categoria = "Costoso"
    }


    console.log(`${prod.nome} costa  ${prod.prezzo} = ${categoria}`)
});


const personaggi = [
    {
        nome: "Fabio",
        energia: 100,
        attacca() {
            this.energia -= 10;
        },
        descrivi() {
            console.log(`${this.nome} ha ${this.energia} energia.`);
        }
    },

    {
        nome: "Fabrizio",
        energia: 500,
        attacca() {
            this.energia -= 35;
        },
        descrivi() {
            console.log(`${this.nome} ha ${this.energia} energia.`);
        }
    },
    {
        nome: "Ingrid",
        energia: 80,
        attacca() {
            this.energia -= 6;
        },
        descrivi() {
            console.log(`${this.nome} ha ${this.energia} energia.`);
        }
    },
];


personaggi.forEach(pg => {
    pg.descrivi()
    pg.attacca()
    pg.attacca()
    pg.descrivi()
});


const prodotti3 = [
    { nome: "Mouse", prezzo: 15 },
    { nome: "Tastiera", prezzo: 45 },
    { nome: "Monitor", prezzo: 120 },
    { nome: "Cuffie", prezzo: 25 },
    { nome: "Webcam", prezzo: 70 }
];


const economici = prodotti3.filter(prod => prod.prezzo <= 30)

economici.forEach(prod => {
    console.log(`${prod.nome} costa ${prod.prezzo} = Economico`)
})


const prodotti4 = [
    {
        nome: "Mouse",
        prezzo: 15,
        descrivi() {
            console.log(`${this.nome} costa ${this.prezzo}€`);
        }
    },
    {
        nome: "Tastiera",
        prezzo: 45,
        descrivi() {
            console.log(`${this.nome} costa ${this.prezzo}€`);
        }
    },
    {
        nome: "Monitor",
        prezzo: 120,
        descrivi() {
            console.log(`${this.nome} costa ${this.prezzo}€`);
        }
    },
    {
        nome: "Cuffie",
        prezzo: 25,
        descrivi() {
            console.log(`${this.nome} costa ${this.prezzo}€`);
        }
    }
];

const economici1 = prodotti4.filter(prod => prod.prezzo <= 30);

economici1.forEach(prod => {
    prod.descrivi();
});


const studenti3 = [
    {
        nome: "Dino",
        voto: 8,
        descrivi() {
            console.log(`Studente : ${this.nome}, voto: ${this.voto}.`)
        },
    },
    {
        nome: "Pilaf",
        voto: 4,
        descrivi() {
            console.log(`Studente : ${this.nome}, voto: ${this.voto}.`)
        },
    },
    {
        nome: "Ernesto",
        voto: 6,
        descrivi() {
            console.log(`Studente : ${this.nome}, voto: ${this.voto}.`)
        },
    },
];

studenti3.forEach(stud => {
    if (stud.voto < 6) {
        stud.voto++;
    }
    stud.descrivi();
});

const prodotti5 = [
    {
        nome: "Mouse",
        prezzo: 20,
        descrivi() {
            console.log(`${this.nome} costa ${this.prezzo}€`);
        }
    },
    {
        nome: "Monitor",
        prezzo: 150,
        descrivi() {
            console.log(`${this.nome} costa ${this.prezzo}€`);
        }
    },
    {
        nome: "Cuffie",
        prezzo: 25,
        descrivi() {
            console.log(`${this.nome} costa ${this.prezzo}€`);
        }
    },
];

prodotti5.forEach(prod => {
    if (prod.prezzo < 30) {
        prod.prezzo += 5
    }
    else if (prod.prezzo >= 30) {
        prod.prezzo -= 10
    };
    prod.descrivi()
});


const personaggi1 = [
    {
        nome: "Dino",
        energia: 100,
        attacco: 20,
        difesa: 5,

        colpisci() {
            this.energia -= this.attacco / 2;
        },

        cura() {
            this.energia += 10;
        },

        descrivi() {
            console.log(`${this.nome} → Energia: ${this.energia}, Attacco: ${this.attacco}, Difesa: ${this.difesa}`);
        }
    },

    {
        nome: "Pilaf",
        energia: 80,
        attacco: 24,
        difesa: 15,

        colpisci() {
            this.energia -= this.attacco / 3;
        },

        cura() {
            this.energia += 5;
        },

        descrivi() {
            console.log(`${this.nome} → Energia: ${this.energia}, Attacco: ${this.attacco}, Difesa: ${this.difesa}`);
        }
    },

    {
        nome: "Ernesto",
        energia: 120,
        attacco: 30,
        difesa: 2,

        colpisci() {
            this.energia -= this.attacco / 4;
        },

        cura() {
            this.energia += 15;
        },

        descrivi() {
            console.log(`${this.nome} → Energia: ${this.energia}, Attacco: ${this.attacco}, Difesa: ${this.difesa}`);
        }
    }
];

personaggi1.forEach(pg => {
    pg.descrivi()
    pg.colpisci()
    pg.cura()
    pg.descrivi()
});


const robot = [
    {
        nome: "Bolt",
        batteria: 1000,
        potenza: 310,
        consumo: 200,
        usa() {
            this.batteria -= this.potenza;
        },
        ricarica() {
            this.batteria += 200
        },
        status() {
            console.log(`Questo robot ha batteria: ${this.batteria}, potenza: ${this.potenza}, consumo: ${this.consumo}.`)
        }
    },

    {
        nome: "Sneaky",
        batteria: 800,
        potenza: 200,
        consumo: 170,
        usa() {
            this.batteria -= this.potenza;
        },
        ricarica() {
            this.batteria += 200
        },
        status() {
            console.log(`Questo robot ha batteria: ${this.batteria}, potenza: ${this.potenza}, consumo: ${this.consumo}.`)
        }
    },

    {
        nome: "Adanca",
        batteria: 550,
        potenza: 135,
        consumo: 80,
        usa() {
            this.batteria -= this.potenza;
        },
        ricarica() {
            this.batteria += 200
        },
        status() {
            console.log(`Questo robot ha batteria: ${this.batteria}, potenza: ${this.potenza}, consumo: ${this.consumo}.`)
        }
    }
];

const standBy = robot.filter(rb => rb.batteria < 400);

standBy.forEach(rb => {
    rb.ricarica();
    rb.status()
});



class Robot {
    constructor(nome, energia) {
        this.nome = nome;
        this.energia = energia;
    }

    status() {
        console.log(`Robot: ${this.nome}, energia: ${this.energia}`);
    }

    static creaRobot() {
        return new Robot("Bolt", 1000);
    }

    static confronta(r1, r2) {
        if (r1.energia > r2.energia) {
            console.log(`${r1.nome} ha più energia di ${r2.nome}`);
        } else if (r2.energia > r1.energia) {
            console.log(`${r2.nome} ha più energia di ${r1.nome}`);
        } else {
            console.log(`${r1.nome} e ${r2.nome} hanno la stessa energia`);
        }
    }
}

const r1 = new Robot("Mr.Roboto", 200);
const r2 = Robot.creaRobot();
const r3 = new Robot("Mrs.Roboto", 200);
const r4 = new Robot("Roboto JR", 140);

const robot1 = [r1, r2, r3, r4];

for (let i = 0; i < robot1.length; i++) {
    for (let j = i + 1; j < robot1.length; j++) {
        Robot.confronta(robot1[i], robot1[j]);
    }
}

Robot.confronta(r1, r2);
Robot.confronta(r1, r3);
Robot.confronta(r1, r4);
Robot.confronta(r2, r3);
Robot.confronta(r2, r4);
Robot.confronta(r3, r4);


class Robot1 {
    static numeroRobot = 0
    constructor(nome, potenza) {
        this.nome = nome;
        this.potenza = potenza;
        Robot1.numeroRobot++
    }
    status() {
        console.log(`Robot : ${this.nome}, potenza : ${this.potenza}.`)
    }

    static creaForte() {
        return new Robot1("StrongBot", 2000);
    }
    static piùPotente(r1, r2) {
        return r1 > r2 ? r1 : r2;
    }
}

const r5 = new Robot1("Titan", 300);
const r6 = new Robot1("Shadow", 180);
const r7 = Robot1.creaForte();
const r8 = new Robot1("Nova", 250);


const robot2 = [r5, r6, r7, r8];


for (let i = 0; i < robot2.length; i++) {
    for (let j = i + 1; j < robot2.length; j++) {
        const winner = Robot1.piùPotente(robot2[i], robot2[j]);
        console.log(`Tra il robot ${robot2[i].nome} e il robot ${robot2[j].nome} vince il ${winner.nome} con potenza di ${winner.potenza}.`)
    };

};

Robot1.piùPotente(r5, r6);
Robot1.piùPotente(r5, r7);
Robot1.piùPotente(r5, r8);
Robot1.piùPotente(r6, r7);
Robot1.piùPotente(r6, r8);
Robot1.piùPotente(r7, r8);
console.log(`Il numero di robot è : ${Robot1.numeroRobot}.`)


const arr = [93, 38, 973, 19, 90, 76, 54];
const arr1 = [929, 82, 39, 82, 12, 49, 6789];
const arr2 = [2102, 810, 93, 82, 91, 61, 6798];
const arr3 = [54, 678, 345, 543, 19, 68, 91, 3792];

let fusion = [...arr, ...arr3, 95];
console.log(fusion);

let [item1, item2, ...theOthers] = arr3
console.log(theOthers);

const title = document.getElementById("titolo");
title.textContent = "Benvenuto nel DOM";
console.log(title.textContent);

const msg = document.getElementById("messaggio");
msg.style.color = "red";
msg.style.fontSize = "24px";


const div = document.getElementById("contenitore");
const nuovoParagrafo = document.createElement("p");
nuovoParagrafo.textContent = "Nuovo paragrafo";
div.appendChild(nuovoParagrafo);

const btn = document.getElementById("btn");
const out = document.getElementById("output");
btn.addEventListener("click", () => {
    out.textContent = "Bottone cliccato";
});


const lista = document.getElementById("lista");
const add1 = document.getElementById("add");

add1.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "Nuovo list item";
    lista.appendChild(li);
}
);

const input = document.getElementById("nome");
const stampa = document.getElementById("stampa");
const risultato = document.getElementById("risultato");


stampa.addEventListener("click", () => {
    risultato.textContent = input.value;
});


const btn1 = document.getElementById("btn1");
const out1 = document.getElementById("out1");

function saluto() {
    out1.textContent = "Hai cliccato!";
};

btn1.addEventListener("click", saluto);

setTimeout(() => {
    btn1.removeEventListener("click", saluto);
    out1.textContent = "Listener Rimosso";
}, 3000);

const btn2 = document.getElementById("btn2");
const out2 = document.getElementById("out2");


function saluto1() {
    out2.textContent = "Hai cliccato!";
};

let attivo = false;
btn2.addEventListener("click", () => {
    if (!attivo) {
        btn2.addEventListener("click", saluto1);
        out2.textContent = "Listener On";
        attivo = true;

    } else {
        btn2.removeEventListener("click", saluto1);
        out2.textContent = "Listener Off";
        attivo = false;
    }
});


const switchBtn = document.getElementById("switchBtn");
const display = document.getElementById("display");


function mostraMessaggio() {
    display.textContent = "Evento on";
};


switchBtn.addEventListener("click", mostraMessaggio);

let isActive = true;


switchBtn.addEventListener("click", () => {
    if (isActive) {
        switchBtn.removeEventListener("click", mostraMessaggio);
        display.textContent = "Listener spento";
        isActive = false;
    } else {
        switchBtn.addEventListener("click", mostraMessaggio);
        display.textContent = "Listener riattivato";
        isActive = true;
    }
});


const toggleBoxBtn = document.getElementById("toggleBoxBtn");
const colorBox = document.getElementById("colorBox");


let boxVisible = true;

toggleBoxBtn.addEventListener("click", () => {
    if (boxVisible) {
        colorBox.style.width = "50px";
        boxVisible = false;
    } else {
        colorBox.style.width = "150px";
        boxVisible = true;
    };
});

const colorCycleBtn = document.getElementById("colorCycleBtn");
const colorSquare = document.getElementById("colorSquare");


const palette = ["red", "green", "blue", "purple", "orange"];

let currentIndex = 0;


colorCycleBtn.addEventListener("click", () => {
    colorSquare.style.background = palette[currentIndex];
    currentIndex++;
    if (currentIndex >= palette.length) {
        currentIndex = 0;
    }
});

const userText = document.getElementById("userText");
const updateBtn = document.getElementById("updateBtn");
const resultText = document.getElementById("resultText");

updateBtn.addEventListener("click", () => {
    resultText.textContent = userText.value;
});



const styleBtn = document.getElementById("styleBtn");
const box = document.getElementById("box");

styleBtn.addEventListener("click", () => {
    box.classList.toggle("highlightBox");
});

const hoverBox = document.getElementById("hoverBox");
const hoverText = document.getElementById("hoverText");

hoverBox.addEventListener("mouseover", () => {
    hoverText.textContent = "Entrato nel box!"
});


hoverBox.addEventListener("mouseout", () => {
    hoverText.textContent = "Uscito dal box!"
});

const trackArea = document.getElementById("trackArea");
const coords = document.getElementById("coords");

trackArea.addEventListener("mousemove", () => {
    coords.textContent = `Coordinate :  x=${event.clientX}, y=${event.clientY}`;
});

const multiBox = document.getElementById("multiBox");
const multiText = document.getElementById("multiText");

multiBox.addEventListener("mouseover", () => {
    multiText.textContent = "Sei sopra!"
});


multiBox.addEventListener("mouseout", () => {
    multiText.textContent = "Sei fuori!"
});


multiBox.addEventListener("click", () => {
    multiText.textContent = "Hai cliccato nel box!"
});


const dragBox = document.getElementById("dragBox");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;



dragBox.addEventListener("mousedown", (event) => {
    isDragging = true;
    offsetX = event.clientX;
    offsetY = event.clientY;
});

document.addEventListener("mousemove", (event) => {
    if (isDragging) {
        dragBox.style.left = event.clientX - offsetX + "px";
        dragBox.style.top = event.clientY - offsetY + "px";

    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});


const dropZone = document.getElementById("dropZone");
const dragItem = document.getElementById("dragItem");

let dragging = false;

dragItem.addEventListener("mousedown", () => {
    dragging = true;
});

document.addEventListener("mousemove", (event) => {
    if (dragging) {
        dragItem.style.left = event.clientX - 40 + "px";
        dragItem.style.top = event.clientY - 40 + "px";
    }
});


document.addEventListener("mouseup", () => {
    dragging = false

    const zoneRect = dropZone.getBoundingClientRect();
    const itemRect = dragItem.getBoundingClientRect();

    const inside =

        itemRect.left > zoneRect.left &&
        itemRect.right < zoneRect.right &&
        itemRect.top > zoneRect.top &&
        itemRect.bottom < zoneRect.bottom

    if (inside) {
        dropZone.style.backgroundColor = "lightgreen";
        dragItem.textContent = "Sono a destinazione!"
    } else {
        dropZone.style.backgroundColor = "lightgray";
    }
});


const playArea = document.getElementById("playArea");
const player = document.getElementById("player");

let draggingPlayer = false;
offsetX = 0;
offsetY = 0;


player.addEventListener("mousedown", (event) => {
    draggingPlayer = true;
    offsetX = event.clientX;
    offsetY = event.clientY;
});


document.addEventListener("mousemove", (event) => {
    if (!draggingPlayer) return

    const areaRect = playArea.getBoundingClientRect();
    const newX = event.clientX - areaRect.left - offsetX;
    const newY = event.clientX - areaRect.top - offsetY;

    const maxX = areaRect.width - player.offsetWidth;
    const maxY = areaRect.height - player.offsetHeight;

    player.style.left = Math.max(0, Math.min(newX, maxX)) + "px";
    player.style.top = Math.max(0, Math.min(newY, maxY)) + "px";

});


document.addEventListener("mouseup", () => {
    draggingPlayer = false;
});


const campo = document.getElementById("campo");
const giocatore = document.getElementById("giocatore");


document.addEventListener("keydown", (event) => {
    const maxX = campo.offsetWidth - giocatore.offsetWidth;
    const maxY = campo.offsetHeight - giocatore.offsetHeight;

    let x = giocatore.offsetLeft;
    let y = giocatore.offsetTop;

    if (event.key === "ArrowRight") x += 10;
    if (event.key === "ArrowLeft") x -= 10;
    if (event.key === "ArrowDown") y += 10;
    if (event.key === "ArrowUp") y -= 10;

    giocatore.style.left = Math.max(0, Math.min(x, maxX)) + "px";
    giocatore.style.top = Math.max(0, Math.min(y, maxY)) + "px";
});



const area = document.getElementById("area");
const cursorBox = document.getElementById("cursorBox");

area.addEventListener("mousemove", (event) => {
    const rectArea = area.getBoundingClientRect();

    const mouseX = event.clientX - rectArea.left;
    const mouseY = event.clientY - rectArea.top;

    const maxX = area.offsetWidth - cursorBox.offsetWidth;
    const maxY = area.offsetHeight - cursorBox.offsetHeight;

    cursorBox.style.left = Math.max(0, Math.min(mouseX, maxX)) + "px";
    cursorBox.style.top = Math.max(0, Math.min(mouseY, maxY)) + "px";
});

const area1 = document.getElementById("area1");
const box1 = document.getElementById("box1");



area1.addEventListener("click", (event) => {
    const rect = area1.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const maxX = area1.offsetWidth - box1.offsetWidth;
    const maxY = area1.offsetHeight - box1.offsetHeight;

    box1.style.left = Math.max(0, Math.min(mouseX, maxX)) + "px";
    box1.style.top = Math.max(0, Math.min(mouseY, maxY)) + "px";
});







//Quadrato segue dentro un contenitore solo al click

const area2 = document.getElementById("area2");
const box2 = document.getElementById("box2");

dragging = false;
offsetX = 0;
offsetY = 0;

box2.addEventListener("mousedown", (event) => {
    dragging = true;

    const rectBox = box2.getBoundingClientRect();
    offsetX = event.clientX - rectBox.left;
    offsetY = event.clientY - rectBox.top;
});

document.addEventListener("mouseup", () => {
    dragging = false;
});

document.addEventListener("mousemove", (event) => {
    if (!dragging) return;

    const rectArea = area2.getBoundingClientRect();

    const mouseX = event.clientX - rectArea.left - offsetX;
    const mouseY = event.clientY - rectArea.top - offsetY;

    const maxX = area2.offsetWidth - box2.offsetWidth;
    const maxY = area2.offsetHeight - box2.offsetHeight;

    box2.style.left = Math.max(0, Math.min(mouseX, maxX)) + "px";
    box2.style.top = Math.max(0, Math.min(mouseY, maxY)) + "px";
});


const area3 = document.getElementById("area3");
const box3 = document.getElementById("box3");

dragging = false;
offsetX = 0;
offsetY = 0;


box3.addEventListener("mousedown", (event) => {
    dragging = true;

    const rectBox = box3.getBoundingClientRect();
    offsetX = event.clientX - rectBox.left;
    offsetY = event.clientY - rectBox.top;
});

document.addEventListener("mouseup", () => {
    dragging = false;
});

document.addEventListener("mousemove", (event) => {
    if (!dragging) return
    const rectArea = area3.getBoundingClientRect();

    const mouseX = event.clientX - rectArea.left - offsetX;
    const mouseY = event.clientY - rectArea.top - offsetY;

    const maxX = area3.offsetWidth - box3.offsetWidth;
    const maxY = area3.offsetHeight - box3.offsetHeight;

    box3.style.left = Math.max(0, Math.min(mouseX, maxX)) + "px";
    box3.style.top = Math.max(0, Math.min(mouseY, maxY)) + "px";
});


const box4 = document.getElementById("box4");
const target = document.getElementById("target");

let dragging4 = false;
let offsetX4 = 0;
let offsetY4 = 0;

box4.addEventListener("mousedown", (event) => {
    dragging4 = true;

    const rect = box4.getBoundingClientRect();
    offsetX4 = event.pageX - rect.left;
    offsetY4 = event.pageY - rect.top;
});

document.addEventListener("mouseup", () => {
    dragging4 = false;

    const a = box4.getBoundingClientRect();
    const b = target.getBoundingClientRect();

    const droppato =
        a.left < b.right &&
        a.right > b.left &&
        a.top < b.bottom &&
        a.bottom > b.top;

    if (droppato) {
        target.style.background = "yellow";
        target.style.borderColor = "orange";
        target.textContent = "Drop fatto!";
    } else {
        target.style.background = "rgb(8, 185, 8)";
    }
});
document.addEventListener("mousemove", (event) => {
    if (!dragging4) return;

    const mouseX = event.pageX - offsetX4;
    const mouseY = event.pageY - offsetY4;

    box4.style.left = mouseX + "px";
    box4.style.top = mouseY + "px";
});


const pallino = document.getElementById("pallino");
const zonaDrop = document.getElementById("zonaDrop");

let Drag = false;
let offsetX5 = 0;
let offsetY5 = 0;

pallino.addEventListener("mousedown", (event) => {
    Drag = true;

    const rectBox1 = pallino.getBoundingClientRect();
    offsetX5 = event.pageX - rectBox1.left;
    offsetY5 = event.pageY - rectBox1.top;
});

document.addEventListener("mouseup", () => {
    Drag = false;

    let c = pallino.getBoundingClientRect();
    let d = zonaDrop.getBoundingClientRect();

    const dropped =
        c.left < d.right &&
        c.right > d.left &&
        c.top < d.bottom &&
        c.bottom > d.top;

    if (dropped) {
        zonaDrop.style.background = "yellow";
        zonaDrop.style.borderColor = "orange";
        zonaDrop.textContent = "Drop fatto!";
    } else {
        zonaDrop.style.background = "rgb(8, 185, 8)";
    }
});


document.addEventListener("mousemove", (event) => {
    if (!Drag) return;

    const mouseX = event.pageX - offsetX5
    const mouseY = event.pageY - offsetY5

    pallino.style.left = mouseX + "px";
    pallino.style.top = mouseY + "px";
});

// offsetX e offsetY sono in breve le coordinate del mouse rispetto all'elemento trascinato, calcolate al momento del click (mousedown). Queste coordinate vengono utilizzate per mantenere la posizione relativa del mouse rispetto all'elemento durante il trascinamento, evitando che l'elemento "salti" alla posizione del mouse.



const pallino1 = document.getElementById("pallino1");
const zonaDrop1 = document.getElementById("zonaDrop1");


let spostamento = false;

let offsetX6 = 0;
let offsetY6 = 0;


pallino1.addEventListener("mousedown", (event) => {

    spostamento = true;

    const rectpal = pallino1.getBoundingClientRect();

    offsetX6 = event.pageX - rectpal.left;
    offsetY6 = event.pageY - rectpal.top;
});


document.addEventListener("mouseup", () => {

    spostamento = false;

    let e = pallino1.getBoundingClientRect();
    let f = zonaDrop1.getBoundingClientRect();

    const inside =

        e.left < f.right &&
        e.right > f.left &&
        e.top < f.bottom &&
        e.bottom > f.top;

    if (inside) {
        zonaDrop1.style.background = "yellow";
        zonaDrop1.style.borderColor = "orange";
        zonaDrop1.textContent = "Drop fatto!";
    } else {
        zonaDrop1.style.background = "rgb(8, 185, 8)";
    }
});


document.addEventListener("mousemove", (event) => {
    if (!spostamento) return;

    const mouse_X = event.pageX - offsetX6;
    const mouse_Y = event.pageY - offsetY6;

    pallino1.style.left = mouse_X + "px";
    pallino1.style.top = mouse_Y + "px";
});


const box5 = document.getElementById("box5");

box5.addEventListener("click", () => {
    box5.classList.toggle("attivo");
});


const form = document.getElementById("login");
const email = document.getElementById("email");
const password = document.getElementById("password");

// Regex per email
const emailRegex = /\S+@\S+\.\S+/;

// VALIDAZIONE LIVE (mentre scrivi)
email.addEventListener("input", () => {
    if (emailRegex.test(email.value)) {
        email.classList.add("ok");
        email.classList.remove("errore");
    } else {
        email.classList.add("errore");
        email.classList.remove("ok");
    }
});

password.addEventListener("input", () => {
    if (password.value.trim() !== "" && password.value.length >= 6) {
        password.classList.add("ok");
        password.classList.remove("errore");
    } else {
        password.classList.add("errore");
        password.classList.remove("ok");
    }
});

// VALIDAZIONE AL SUBMIT
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // EMAIL
    if (!emailRegex.test(email.value)) {
        alert("Email non valida");
        email.classList.add("errore");
        email.classList.remove("ok");
        return;
    }

    // PASSWORD
    if (password.value.trim() === "" || password.value.length < 6) {
        alert("Password obbligatoria o troppo corta");
        password.classList.add("errore");
        password.classList.remove("ok");
        return;
    }

    // Se tutto è ok
    alert("Form valido!");
});



const registrazione = document.getElementById("registrazione");
const username = document.getElementById("username");
const password1 = document.getElementById("password1");


username.addEventListener("input", () => {
    if (emailRegex.test(username.value)) {
        username.classList.add("ok");
        username.classList.remove("errore");
    } else {
        username.classList.add("errore");
        username.classList.remove("ok");
    }
});


password1.addEventListener("input", () => {
    if (password1.value.trim() !== "" && password1.value.length >= 8) {
        password1.classList.add("ok");
        password1.classList.remove("errore");
    } else {
        password1.classList.add("errore");
        password1.classList.remove("ok");
    }
});


registrazione.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!emailRegex.test(username.value)) {
        alert("Email non valida");
        username.classList.add("errore");
        username.classList.remove("ok");
        return;
    };
    if (password1.value.trim() === "" || password1.value.length < 8) {
        alert("Password non valida");
        password1.classList.add("errore");
        password1.classList.remove("ok");
        return;
    };

    alert("Form valido!");
});


const loginForm = document.getElementById("loginForm");
const email2 = document.getElementById("email2");
const password2 = document.getElementById("password2");
const directAccess = document.getElementById("directAccess");


email2.addEventListener("input", () => {
    if (emailRegex.test(email2.value)) {
        email2.classList.add("ok");
        email2.classList.remove("errore");
    } else {
        email2.classList.add("errore");
        email2.classList.remove("ok");
    };
});


password2.addEventListener("input", () => {
    if (password2.value.trim() !== "" && password2.value.length >= 8) {
        password2.classList.add("ok");
        password2.classList.remove("errore");
    } else {
        password2.classList.add("errore");
        password2.classList.remove("ok");
    };
});


// ⭐ 1) LOGIN CON FORM DATA (submit)

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!emailRegex.test(email2.value)) {
        alert("Email non valida!")
        email2.classList.add("errore");
        email2.classList.remove("ok");
        return;
    };

    if (password2.value.trim() === "" || password2.value.length < 8) {
        alert("Password non valida!")
        password2.classList.add("errore");
        password2.classList.remove("ok");
        return;
    };


    const dati = new FormData(form);

    console.log("Login con FormData:");
    console.log("Email:", dati.get("email"));
    console.log("Password:", dati.get("password"));


    alert("Login effettuato con FormData!");
});


// ⭐ 2) LOGIN CON ACCESSO DIRETTO (bottone separato)
directAccess.addEventListener("click", () => {

    // Validazione con accesso diretto
    if (!emailRegex.test(email2.value)) {
        alert("Email non valida");
        return;
    }

    if (password2.value.trim() === "" || password2.value.length < 6) {
        alert("Password obbligatoria o troppo corta");
        return;
    }

    console.log("Login con Accesso Diretto:");
    console.log("Email:", email2.value);
    console.log("Password:", password2.value);

    alert("Login effettuato con accesso diretto!");
});


const container = document.getElementById("container");
const btn3 = document.getElementById("btn3");


document.addEventListener("click", () => console.log("Document"), true);   // capturing
document.addEventListener("click", () => console.log("Document"), false);  // bubbling

container.addEventListener("click", () => console.log("Container", true));
container.addEventListener("click", () => console.log("Container", false));

//In breve **true** serve a dirgli di ascoltare l'evento in fase di capturing, false in fase di bubbling. False è ommissibile perché è il default, quindi se non scrivo nulla ascolta in fase di bubbling. 

btn3.addEventListener("click", () => console.log("Button", true));
btn3.addEventListener("click", () => console.log("Button", false));



const btn4 = document.getElementById("btn4");

btn4.addEventListener("click", () => {
    console.log("Listener 1");
});


btn4.addEventListener("click", () => {
    console.log("Listener 2");
});


btn4.addEventListener("click", (e) => {
    console.log("Listener 3");
    e.stopPropagation();
});

//L'output sarà comuqnue "Listener 1", "Listener 2" e "Listener 3" perché stopPropagation() impedisce il bubbling dell'evento verso gli elementi genitori e non il capturing


btn4.addEventListener("click", () => {
    console.log("Listener 1");
});

btn4.addEventListener("click", (e) => {
    console.log("Listener 2");
    e.stopImmediatePropagation(); // BLOCCA TUTTO
});

btn4.addEventListener("click", () => {
    console.log("Listener 3");
});

//Stesso caso ma qui l'output sarà solo "Listener 2 " perché stopImmediatePropagation() blocca tutti gli altri listener dello stesso elemento, sia quelli registrati prima che quelli registrati dopo. Il 2 ci sarà comunque perché è il target dell'evento, quindi viene eseguito prima di bloccare gli altri listener.

const box6 = document.getElementById("box6");
const btn6 = document.getElementById("btn6");

document.addEventListener("click", () => console.log("Document CAP"), true);
document.addEventListener("click", () => console.log("Document BUB"));

box6.addEventListener("click", () => console.log("Box CAP"), true);
box6.addEventListener("click", () => console.log("Box BUB"));

btn6.addEventListener("click", (e) => {
    console.log("Button TARGET");
    e.stopImmediatePropagation();
});



// Qui l'output sarà "Document CAP", "Box CAP", "Button TARGET" perché stopImmediatePropagation() blocca tutti gli altri listener dello stesso elemento (in questo caso il button), e tutto il bubbling verso gli elementi genitori (box e document) viene bloccato, e (se c'è) anche il capturing che resta, ma quello precedente non viene bloccato perché è già stato eseguito prima del target. Quindi il capturing del document e del box viene eseguito, ma il bubbling del button viene bloccato.

const lista1 = document.getElementById("lista1");
const aggiungi = document.getElementById("aggiungi");


aggiungi.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "Nuovo Elemento";
    lista1.appendChild(li);
});

lista1.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        console.log("Hai cliccato", e.target.textContent);
    };
});


const container1 = document.getElementById("container1");

container1.addEventListener("click", (e) => {
    if (e.target.classList.contains("edit")) {
        console.log("Modifica");
    };

    if (e.target.classList.contains("delete")) {
        console.log("Elimina");
    };
});

const menu = document.getElementById("menu");

menu.addEventListener("click", (e) => {
    const action = e.target.dataset.action;

    switch (action) {
        case "open":
            console.log("Apro file")
            break;
        case "save":
            console.log("Salvo file")
            break;
        case "close":
            console.log("Chiudo file")
            break;
    }
});



const card = document.getElementById("card");

card.addEventListener("click", () => {
    console.log("Hai cliccato la card");
});


card.addEventListener("click", (e) => {
    if (e.target.classList.contains("like")) {
        console.log("Hai cliccato il like");
        e.stopPropagation();
    }
});

const scatola = document.getElementById("scatola");
const move = document.getElementById("move");

move.addEventListener("click", () => {
    let pos = 0;

    function anima() {
        pos += 3;
        scatola.style.left = pos + "px";

        if (pos < 300) {
            requestAnimationFrame(anima);
        }
    }

    anima();
});




const scatola1 = document.getElementById("scatola1");
const move1 = document.getElementById("move1");

move1.addEventListener("click", () => {
    let size = 50;

    function anima() {
        size += 2;
        scatola1.style.width = size + "px";
        scatola1.style.height = size + "px";

        if (size < 150) {
            requestAnimationFrame(anima);
        }
    }
    anima();

});


const scatola2 = document.getElementById("scatola2");
const move2 = document.getElementById("move2");

move2.addEventListener("click", () => {
    let opacity = 0;

    function anima() {
        opacity += 0.02;
        scatola2.style.opacity = opacity;

        if (opacity < 1) {
            requestAnimationFrame(anima);
        }
    }

    anima();
});




const scatola3 = document.getElementById("scatola3");
const move3 = document.getElementById("move3");

let pos = 300;

move3.addEventListener("click", () => {

    function anima() {
        pos -= 3;
        scatola3.style.left = pos + "px";

        if (pos > 0) {
            requestAnimationFrame(anima);
        }
    }

    anima();

});

const scatola4 = document.getElementById("scatola4");
const move4 = document.getElementById("move4");

let open = false;

move4.addEventListener("click", () => {
    let pos = open ? 300 : 0;
    const target = open ? 0 : 300;

    function anima() {
        pos += (target - pos) * 0.1
        scatola4.style.left = pos + "px";

        if (Math.abs(target - pos) > 0.5) {
            requestAnimationFrame(anima);
        }
    }

    anima();
    open = !open;

});


//Local Session

const userData = {
    name: "Carlo",
    age: 12,
    active: true
};

localStorage.setItem("user", JSON.stringify(userData));



const savedUSer = JSON.parse(localStorage.getItem("user"));

console.log(savedUSer.name);

localStorage.removeItem("user");


// 1) Salvo

localStorage.setItem("settings", JSON.stringify({ theme: "dark" }));


//2) leggo

let settings = JSON.parse(localStorage.getItem("settings"));


//3) modifico

settings.theme = "light";

// 4) risalvo
localStorage.setItem("settings", JSON.stringify(settings));



//Session storage


sessionStorage.setItem("user", JSON.stringify(userData));


const user = JSON.parse(sessionStorage.getItem("user"));
console.log(user.name);



sessionStorage.setItem("step", "2");

const step = sessionStorage.getItem("step");
console.log(step);

//Chiudi la scheda → sparisce
//Riapri la scheda → è vuoto

const tempUser = {
    name: "Carlo",
    age: 12
};

sessionStorage.setItem("tempUser", JSON.stringify(tempUser));


const user1 = JSON.parse(sessionStorage.getItem("tempUser"));
console.log(user1.name);


//IMPORTANTE = ⭐ JSON.stringify (da oggetto → stringa JSON)

//Esempio

const jsonString = JSON.stringify(userData);

//Formattato:

jsonString = JSON.stringify(userData, null, 2);

//IMPORTANTE = ⭐ JSON.parse (da stringa JSON → oggetto JS)


const obj = JSON.parse('{"name":"Piero","age":54}');

// JSON + localStorage è la combo più usata

const res = await fetch("https://api.example.com/user");
const data = await res.json(); // JSON.parse interno, è automaticamente fatto dal browser

await fetch("https://api.example.com/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData)
});


//Qui succede:

//method: "POST" → stai inviando dati

//Content-Type: application/json → dici al server che stai mandando JSON

//body: JSON.stringify(userData) → converti l’oggetto in stringa JSON

//il server riceve la stringa e la converte in oggetto




//⭐ JSON nei file .json si legge:


//Con fetch:
const res1 = await fetch("./data.json");
const data1 = await res1.json();


//Cosa succede:
//fetch("./data.json") apre il file come se fosse una risorsa web

//.json() lo converte in oggetto

//data1 è un oggetto JavaScript



//Con import(moduli):

import data2 from "./data.json"  with { type: "json" };
console.log(data2.name);


//Cosa succede:
//import carica il file come modulo

//assert { type: "json" } dice al browser che è JSON

//data2 è già un oggetto JavaScript

//non serve JSON.parse

//non serve fetch

//Questo funziona solo se:

//il file JS è caricato con type="module"

//il browser supporta JSON modules (Chrome, Edge, Firefox moderni)


async function getUser() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
};

getUser();


// Inviare dati (POST)

async function createPost() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method : "POST",
        headers : { "Content-Type" : "application/json"},
        body : JSON.stringify({
            title: "Sono un pro",
            body: "Sto imparando fetch API",
            userID: 1
        })
      });

      const data = await res.json();
      console.log(data);
};

createPost();



//Con il metodo POST invio dati, con il put li aggiorno e con delete gli cancello 


// Aggiornare dati (PUT)

async function updatePost() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method : "PUT",
        headers :{"Content-Type" : "application/json"},
        body: JSON.stringify({
            title : "Aggiornare Titolo",
            body : "Aggiornamento completato",
            userID : 1
        })
    });

    const data = await res.JSON();
    console.log(data);
};


updatePost();

// Cancellare dati (DELETE)

async function deleteData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method : "DELETE"
    });

    console.log(res.status);
};

deletePost();


async function getRealUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        console.log(users);
        return users;
    } catch (error) {
        console.error("Errore:", error);
    };
};


getRealUsers();