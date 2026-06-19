// let container = document.getElementById("container"); 
// container.innerHTML += "asfaf"; // Aggiunge al contenuto già presente.
// // container.innerHTML = "ciao"; //Sostituisce tutto il contenuto.  È commentato solo perchè avrebbe creato casini
// container.innerHTML += "<p>Ciao</p>"
// container.innerHTML += "<input type = 'text' placeholder = 'seleziona il tuo pease'>"  //Aggiunge un tag html, infatti possiamo aggiunere un qualsiasi tag html.
let prova = document.querySelector("p.ciao");
prova.textContent = "Buonasera"; // Sostituisce solo il testo. 
console.log(prova.textContent); // Mostra solo il testo, senza tag html.

let albero = document.querySelector("p.albero");
console.log(albero.textContent); // Mostra tutto
console.log(albero.innerText); //Mostra solo ciò che è visibile

let item = document.createElement("p"); // Crea un elemento html, ma non lo aggiunge al DOM
let item1 = document.createElement("span"); 
item.textContent = "Fabio ";
item1.textContent = "nuovo span";
item.appendChild(item1);  //Append child aggiunge un elemento come figlio di un altro elemento, in questo caso item1 è figlio di item. Mettiamo prima il figlio e poi il padre, altrimenti non funziona.
container.appendChild(item);


let w = document.createElement("p");  // Crea un elemento html.
w.textContent = "prima del bottone";

container.insertBefore(w, document.getElementsByClassName("prova")[0]) // Inserisce un elemento prima di un altro elemento specificato, in questo caso inserisce w prima del primo elemento con classe "prova".
container.insertAdjacentHTML("afterbegin", "<p>afterbegin</p>"); //Inserisce un elemento dopo il primo figlio di un elemento specificato, in questo caso inserisce un paragrafo con testo "afterbegin" dopo il primo figlio di container
container.insertAdjacentHTML("afterend", "<p>afterend</p>"); //Inserisce un elemento dopo un elemento specificato, in questo caso inserisce un paragrafo con testo "afterend" dopo container.
container.insertAdjacentHTML("beforebegin", "<p>beforebegin</p>"); //Inserisce un elemento prima di un elemento specificato, in questo caso inserisce un paragrafo con testo "beforebegin" prima di container.
container.insertAdjacentHTML("beforeend", "<p>beforeend</p>"); //Inserisce un elemento prima dell'ultimo figlio di un elemento specificato, in questo caso inserisce un paragrafo con testo "beforeend" prima dell'ultimo figlio di container.
let p = document.querySelector("p.query"); //Il primo figlio di container non c'è ecco perchè sembra che afterbegin sta all'inziio del container, ma in realtà è sta prima del primo figlio di container, che è non c'è più.
container.removeChild(p);  // Rimuove un elemento figlio da un elemento padre.

let p1 = document.querySelector("button.prova");
p1.remove(); // Rimuove un elemento dal DOM, non è necessario specificare il padre, ma è necessario selezionare l'elemento da rimuovere.


let container2 = document.getElementById("contenitore");
// container2.innerHTML = "<p>Favola</p>";
// container2.innerHTML += "Fiaba";
let p2 = document.createElement("p");
p2.textContent = "Sono nuovo";
p2.classList.add("Ciao");
container2.appendChild(p2);
container2.insertBefore(p2, document.getElementById("Gatto"));
console.log(document.getElementById("Gatto").parentElement); // parentElement restituisce l'elemento padre di un elemento specificato.


