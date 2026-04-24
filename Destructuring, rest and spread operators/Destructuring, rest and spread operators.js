let arr1 = [1,2,3,4];

let [item1, item2, item3, item4, item5 = 89257] = arr1;

//Per saltare un elemento, basta lasciare uno spazio vuoto tra le virgole(item1, , item3...). In questo caso, item2 è saltato e item5 non esiste nell'array, quindi gli viene assegnato il valore predefinito 89257.

// let item1 = arr1[0];
// let item2 = arr1[1];
// let item3 = arr1[2];
// let item4 = arr1[3];
// let item5 = arr1[4];

console.log(item5);


let obj1 = {
    name : "Fabio",
    age : "53",
    country : "Netherland",
    address: {
      city : "Genova",
      street : "Sunset Boulevard"
    }
};


let {name : fullName, age, country = "Italy", address, address:{city, street}} = obj1;

//Il valore nell'oggetto è Netherland, quindi country sarà Netherland e non Italy, che è il valore predefinito. Se country non fosse stato presente nell'oggetto, allora avrebbe preso il valore predefinito Italy.
//Questo per dire che il valore nell'oggetto ha la precedenza sul valore predefinito.

console.log(country);
console.log(fullName); //Prima ho detto che name diventava fullName, quindi ora fullName è Fabio.
console.log(street);


//Rest and Spread

//Rest

let arr2 = [84, 78, 90, 54, 987, 12];

let [item6, item7, ...theOthers] = arr2;

console.log(theOthers);

//Così dico che item6 è 84, item7 è 78 e theOthers è un array con il resto degli elementi, quindi [90, 54, 987, 12].


//Spread

let arr3 = [123, 9687, 90990, 234, 983, 546];

let arrfusion = [...arr2, ...arr3, 9707, 6876];

console.log(arrfusion);