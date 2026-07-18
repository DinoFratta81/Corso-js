function handleclick() {
    console.log("sto cliccando");
    bottone.style.backgroundColor = "red";  
}

const bottone = document.querySelector("button");
bottone.addEventListener("click", handleclick);


//Event
bottone.addEventListener("click", (event) => {
    console.log(event);
});

//Oppure

function handleclick1(e) {
    console.log("sto cliccando:", e); //La variabile e contiene tutte le informazioni sull'evento, come il tipo di evento, l'elemento su cui è stato scatenato, la posizione del mouse, ecc.
}
bottone.addEventListener("click", handleclick);

//Rimuovere un eventListener: (valido ma commentato perchè sennò sfascia tutto)

// bottone.removeEventListener("click", handleclick); quindi deve essere proprio la stessa funzione che è stata passata a addEventListener, altrimenti non funziona cioè : bottone.removeEventListener("click", handleclick1); funziona

//Per rimuovere un event listener, bisogna passare la stessa funzione che è stata aggiunta.
//Se per esempio abbiamo: 
// bottone.addEventListener("click", () => console.log("ciao"));
// bottone.removeEventListener("click", () => console.log("ciao")); // ❌ NON funziona. Perché la funzione passata a removeEventListener è diversa da quella passata a addEventListener.


    

//Caso migliore ☝️

// Altri modi di scrivere un event listener 👇: 

// bottone.addEventListener("click", function(){
//     console.log("sto cliccando function anonima")
// });


// bottone.addEventListener("click",  () => {
//     console.log("sto cliccando arrow anonima")
// });




// const handleclick2 = () => {
//     console.log("sto cliccando 2")
// };

// bottone.addEventListener("click", handleclick2);



//Eventi vari:

const element = document.querySelector("button");

// Click singolo
element.addEventListener("click", e => {
    console.log("Click");
});

// Doppio click
element.addEventListener("dblclick", e => {
    console.log("Doppio click");
});

// Mouse premuto (tasto giù)
element.addEventListener("mousedown", e => {
    console.log("Mouse down");
});

// Mouse rilasciato (tasto su)
element.addEventListener("mouseup", e => {
    console.log("Mouse up");
});

// Mouse entra nell’elemento
element.addEventListener("mouseover", e => {
    console.log("Mouse over");
});

// Mouse esce dall’elemento
element.addEventListener("mouseout", e => {
    console.log("Mouse out");
});

// Mouse si muove nell' elemento
element.addEventListener("mousemove", e => {
    console.log(`Posizione: ${e.clientX}, ${e.clientY}`);
});



//Key

document.addEventListener("keydown", e =>{
    console.log(`Tasto premuto : ${e.key}`);
    console.log(`Codice: ${e.code}`);


    if(e.key === "Enter") {
        console.log("Enter premuto");
    }

    if(e.ctrlKey && e.key === "s") {
        e.preventDefault(); //Annulla l'azione predefinita (salvataggio della pagina)
        console.log("Ctrl + S premuto");
    }
});