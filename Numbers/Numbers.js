let a = 10
let b = 3

let result = a + b // Addizione

let result1 = a - b  //Sottrazione

let result2 = a * b  //Moltiplicazione

let result3 = a / b  //Divisione

let result4 = a ** b  //Potenza

let result5 = a % b  //Resto

console.log(result)
console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)
console.log(`10 fratto 3 fa ${(a / b).toFixed(3)} con il resto di ${(a % b)}`) 
// tofixed serve a regolare la quantità dei numeri decimali, con 0 non ci sono, più è alto il numero più numeri decimali ci sono
// per scoprire se un numero è pari o dispari facciamo il numero diviso 2 (x / 2); se il resto è zero il numero è pari sennò e dispari 


//Operatori di assegnazione


console.log(a += 3)  //In questo modo riassegno a, dicendo che a è uguale a se stessa + 3, 
console.log(a -= 3)  //In questo modo riassegno a, dicendo che a è uguale a se stessa - 3, 
console.log(a *= 3)  //In questo modo riassegno a, dicendo che a è uguale a se stessa per 3, 
console.log(a /= 3)  //In questo modo riassegno a, dicendo che a è uguale a se stessa diviso 3, 
console.log(a **= 3) //In questo modo riassegno a, dicendo che a è uguale a se stessa elevato 3, 
console.log(a %= 3)  //In questo modo riassegno a, dicendo che a è uguale a se stessa % 3, 


//Operatori di incremento e decremento

a = 10
console.log("Inizio",a)
a++
console.log("dopo post incremento", a)
++a
console.log("dopo pre incremento", a)
a--
console.log("dopo post decremento", a)
--a
console.log("dopo pre decremento", a)

//SERVONO A DIMINUIRE O AUMENTARE LA VARIABILE DI 1




console.log("Inizio",a)
console.log("dopo post incremento", a++) //Mostra prima il valore e poi fa l' operazione, quindi è 11, perchè ++ sta dopo
console.log("dopo pre incremento", ++a)  //Qui il valore è già 11 e mostra 12 perchè l'operazione la fa prima
console.log("dopo post decremento", a--) //Qui mostra 12 ancora perchè mostra prima la a e poi fa l'operazione
console.log("dopo pre decremento", --a)  //Qui mostra 10 perchè l'operazione avvine prima


//METODI

a.toFixed() // Per fissare la quantità di decimali
a.toString() // Per convertire in stringhe
Math.round //Per varie operazioni matematiche
console.log(Math.trunc(2.6))