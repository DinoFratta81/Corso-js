 # Event bubbling e delegation


## Cos'è l'Event Propagation

*Quando un elemento si verifica su un elemento, non rimane confinato solo a quell'elemento. L'elemento viaggia attraverso l'albero DOM secondo un meccanismo chimato **propagation(propagazione)**.*

## Le tre fasi dell'Event Propagation

 # 1. Capturing Phase(Discesa)

*L'evento parte dal ``` Document ```  e scende verso l' elemento target attarverso tutti i suoi antenati:*

```Document → HTML → Body → Container → Target Element ```

*Per esempio quando clicchiamo su un bottone, si parte dal document e poi si scende verso il target, passando da tutti contenitori possibili.*

 # 2. Target Phase (Target)

*L'evento raggiunge l'elemento che lo ha scatenato (target).*

# 3. Bubbling Phase (Risalita)
*L'evento "risale" dall'elemento target verso il ``` docuement ``` attarverso tutti i suoi nodi antenati:*

```Target Element → Container → Body → HTML → Document ```


## Event Bubbling - La Fase Più Comune

*Il **bubbling** è il comportamento di defualt. L'evento "bolle" verso l'alto come una bolla d'aria nell'acqua.*

``` 
    <div id="grandparent">
        <div id="parent">
            <button id="child">
                Clicca qui
            </button>
        </div>
    </div>

```

``` // Tutti questi event listener si attiveranno una volta attivato il bottone: 👇

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

```


# Perchè il bubbling esiste?

*Il bubbling è **utile** perchè:*

- *Permette agli elementi genitori di "sapere" cosa succede ai figli*
- *Consente pattern come l' **event delegation***


## Event Capturing 

*Il **capturing** è l'opposto del bubbling. L'evento scende dall'alto verso il target.*

```

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
```


# Controllare la Propagazione

## stopPropagation()

*Ferma completamente la propagazione (bubbling o capturing):*

```
document.getElementById("child").addEventListener("click", (e) => {
    console.log("Child Cliccato");
    e.stopPropagation(); // L'evento si ferma qui!
});

document.getElementById("parent").addEventListener("click", () => {
    console.log("Questo NON verrà mai eseguito");
});
```

*Quindi il parent non riceverà mai l'evento. Il fatto è che stopPropagation() ferma la propagazione solo per l'evento corrente, non per gli altri eventi. Quindi stoppiamo quell'evento e basta.*


##  stopImmediatePropagation()

*Ferma la propagazione e gli altri listner sullo stesso elemento:*

```
document.getElementById("child").addEventListener("click", (e) => {
    console.log("Primo listener");
    e.stopImmediatePropagation(); 
});

document.getElementById("parent").addEventListener("click", () => {
    console.log("Questo NON verrà mai eseguito");
});

```

*Con stopImmediatePropagation() fermiano qualsiasi cosa tranne chi sta ascoltando e sta generando immediate propagation.*


### Esempi per un confondersi:


**stopPropagation**


```
btn.addEventListener("click", e => {
    console.log("Listener 1");
    e.stopPropagation();
});

btn.addEventListener("click", e => {
    console.log("Listener 2");
});

```

Output:
```
Listener 1
Listener 2
```

*👉 I listener sullo stesso elemento continuano, ma l’evento non sale ai parent.*



**stopImmediatePropagation:**


```
const btn = document.querySelector("button");

btn.addEventListener("click", e => {
    console.log("Listener 1");
    e.stopImmediatePropagation(); // BLOCCA TUTTO
});

btn.addEventListener("click", e => {
    console.log("Listener 2");
});

btn.addEventListener("click", e => {
    console.log("Listener 3");
});

```

*Output quando clicchi il bottone:*

```
Listener 1

```

*E basta.*

- Listener 2 NON parte

- Listener 3 NON parte

- Il bubbling NON parte




# Event Delegation - Il pattern Fondamentale

## IL Problema Senza Delegation

```
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
```

## La Soluzione : Event Delegation

```
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
```

# Come funziona la Delegation

*1. **Bubbling**: L'evento dal bottone "bolle verso il container*
*2. **Intercettazione**: Il listener sul container "cattura" l'evento*
*3. **Filtraggio**: Controlliamo se ``` e.target è l'evento che vogliamo```*
*4. **Azione**: Eseguiamo il codice aprropriato*


## Vantaggi dell'Event Delegation

# 1.Performance

```
// ❌ MALE : 1000 listener 

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
```

# 2. Elementi Dinamici

```
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
```



# 3.Memoria

*Un solo listener invece di memoria significa meno utilizzo di memoria.*

