let element = document.getElementById("Prova");
element.setAttribute("data-custom", "123"); // aggiunge un attributo personalizzato
element.setAttribute("data-custom2", "Oasi");
element.removeAttribute("data-custom");  // rimuove l'attributo personalizzato
element.removeAttribute("id");
element.id = "xoco";  // modifica l'attributo id
console.log(element.dataset.user);
element.dataset.user = 20870487;  
delete element.dataset.user;
console.log(element.dataset.user);

element.classList.add("saluto", "Saluto!");  // aggiunge più classi; ci sarebbe classname ma sovrascriverebbe tutte le classi esistenti, credo sia buono per casi in cui si vuole sostituire tutte le classi o voglio settare una classe sola
element.classList.remove("trombetta");  // rimuove una classe
let btn = document.getElementById("Gatto");
btn.addEventListener("click", () => {
    btn.classList.toggle("attivo");  //toggle aggiunge la classe se non è presente, altrimenti la rimuove
});
console.log(element.classList.contains("prova"));  //contains verifica se una classe è presente, restituisce true o false
element.classList.replace("saluto", "Saluto");  //replace sostituisce una classe con un'altra, se la classe da sostituire non è presente non fa nulla


let isOnline = true;


//Possiamo modificare css in due modi:
element.style.cssText =  `color : ${isOnline ? "green" : "red"}; background-color : blue`; //cssText sovrascrive tutte le proprietà css, quindi è importante includere tutte le proprietà che vogliamo mantenere
element.style.textAlign = "center"; // acceo direttamente alla proprietà css, è più semplice e non sovrascrive le altre proprietà css
element.style.padding = "20px";
