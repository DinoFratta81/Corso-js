
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
})
