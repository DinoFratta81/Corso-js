for(let i = 1; i < 10; i++){
    console.log(`La i vale ${i}`);

}

let nome = "Federico";

for(i = 0; i < nome.length; i++){ //Fino a quando i è < della lunghezza di nome, fai i++(aggiungi 1)
    console.log(`Questa è la lettera ${nome[i]}, numero ${i}`);

}

//ForOF

for(let lettera of nome){ //Per ogni lettera di nome
    console.log(`FOROF: questa è la lettera: ${lettera}, numero ${i}`);
}


// items.forEach(item => console.log(item));
// items.map(item => item.name);
// items.filter(item => item.active);


//While


let I = 0;
let = isOnline = true;

// while(I < nome.length){
//     console.log(I)

//     I++
// }


let j = 10;

do{
    console.log(j)
    j++
}while(j < 10) //Con il do while almeno una volta deve andare


for (let i = 0; i < nome.length; i++){ 
    if (i == 3) continue  //Salta il 3
    console.log(`Questa è la lettera ${nome[i]}, numero ${i}`);

}

for (let i = 0; i < nome.length; i++){ 
    if (i == 5) break  //Fermati a 5
    console.log(`Questa è la lettera ${nome[i]}, numero ${i}`);

}


for ( let colonna = 0; colonna < 8; colonna++) {
    for (let riga = 0;  riga < 8; riga++){
        console.log(`Questa è la cella ${colonna};${riga}`)
        console.log(`Questa è la cella ${riga};${colonna}`)
    }
} 