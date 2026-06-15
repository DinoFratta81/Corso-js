// Tutti questi event listener si attiveranno una volta attivato il bottone: 👇

document.getElementById("grandparent").addEventListener("click", () => {
    console.log("3. Grandaparent cliccato");
});


document.getElementById("parent").addEventListener("click", () => {
    console.log("2. Parent cliccato");
});

document.getElementById("child").addEventListener("click", () => {
    console.log(" 1. Child cliccato (Target)");
});



//Output quando clicchi il bottone:

// 1. Child cliccato (Target)
// 2. Parent cliccato
// 3. Grandparent cliccato



// Per usare capturing, aggiungi {capture: true}: 👇

document.getElementById("grandparent").addEventListener("click", () => {
    console.log("1. Grandaparent (capturing)");
}, {capture: true});

document.getElementById("parent").addEventListener("click", () => {
    console.log("2. Parent (capturing)");
}, {capture: true});

document.getElementById("child").addEventListener("click", () => {
    console.log("3. Child (target)");
}, {capture: true});



//Output:

// 1. Grandparent (capturing)
// 2. Parent (capturing)
// 3. Child (Target)



document.getElementById("child").addEventListener("click", (e) => {
    console.log("Child cliccato");
    e.stopPropagation(); // L'evento si ferma qui!
});

document.getElementById("parent").addEventListener("click", () => {
    console.log("Questo NON verrà mai eseguito");
});



document.getElementById("child").addEventListener("click", (e) => {
    console.log("Primo listener");
    e.stopImmediatePropagation(); 
});

document.getElementById("parent").addEventListener("click", () => {
    console.log("Questo NON verrà mai eseguito");
});


// ❌ Problema : devi aggiungere listener ad ogni elemento
let buttons = document.querySelectorAll(".delete-button");
buttons.forEach(button => {
    button.addEventListener("click", handleDelete);        
});


//Se aggiungo nuovi nuovi bottoni dinamicamente:
let newButtons = document.createElement("button");
newButtons.className = "delete-button";
// ❌ Questo nuovo bottone NON avrà il listener!
container.appendChild(newButton);



// ✅ Soluzione: Un solo listener sul parent
document.getElementById("container").addEventListener("click", (e) => {
    // Controlla se l'elemento cliccato ci interessa
    if (e.target.matches(".delete-button")){
        handleDelete(e);
    }


    if(e.target.matches(".edit-button")){
        handleEdit(e);
    }
})


//Ora tutti i bottoni, anche quelli aggiunti dinamicamente, funzionano!



//❌ MALE : 1000 listener 

for (let i = 0; i < 1000; i++) {
    let button = document.createElement("button");
    button.addEventListener("click", handleClick)   //1000 listener!
    container.appendChild(button);
}



// ✅ BENE : 1 solo listener

container.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        handleClick(e);
    }
});



///Con delegation, elementi aggiunti dopo funzionano automaticamente

document.addEventListener("click", (e) => {
    if(e.target.matches(".dynamic-button")) {
        console.log("Funzionerà anche per bottoni creati dopo");
    }
});



//Questo bottone creato dopo funzionerà ugualmente 👇:
setTimeout(() => {
    let newButton = document.createElement("button");
    newButton.className = "dynamic-button";
    newButton.textContent ="Nuovo bottone";
    document.body.appendChild("newButton");
}, 2000);







document.getElementById("grandparent").addEventListener("click", () => {
    console.log("3. Grandaparent cliccato scende");
}, {capture: true});


document.getElementById("parent").addEventListener("click", () => {
    console.log("2. Parent cliccato scende");
}, {capture: true});

document.getElementById("child").addEventListener("click", (event) => {
    console.log(" 1. Child cliccato (Target)");
    event.stopPropagation(event);
});


document.getElementById("parent").addEventListener("click", () => {
    console.log("2. Parent cliccato sale");
});

document.getElementById("grandparent").addEventListener("click", () => {
    console.log("3. Grandaparent cliccato sale");
});


