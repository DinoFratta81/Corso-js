let header = document.getElementById("query"); // Per prendere un elemento con id specifico
console.log(header);
let x = document.getElementsByClassName("prova"); // Per prendere più elementi con una classe specifica
console.log(x);
let y = document.getElementsByTagName("p"); // Per prendere un elemento con un tag specifico, in questo caso tutti i paragrafi
console.log(y);
let k = document.querySelector("button"); // Per prendere un elemento con un selettore CSS, in questo caso il primo elemento button che trova, solo il primo e basta
console.log(k);
let k1 = document.querySelectorAll(".ciao"); // Per prendere più elementi con un selettore CSS, in questo caso tutti gli elementi con classe ciao, e li mette in una NodeList, che è simile a un array ma non è un array vero e proprio. Li prenderà tutti, non solo il primo.
console.log(k1);
let container = document.getElementById("container");
let m = container.querySelectorAll("p");
console.log(m);