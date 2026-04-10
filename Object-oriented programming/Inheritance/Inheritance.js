class geometricShape{
     constructor(color){
        this.color = color;
        this.x = 0 
        this.y = 0
     }
    move(newX,newY){ //Duplicato
    this.x = newX; 
    this.y = newY;
}

getPosition(){  //Si possono fare sia con un getter(come in questo caso), oppure con un metodo(getPosition)
     return {x: this.x, y: this.y}
}

getArea(){
    throw Error("getArea() deve essere implementato dalla classe figlia");
}
}


class Rectangle extends geometricShape{   //La classe Rectangle estende geometricShape, quindi eredita tutte le proprietà e i metodi di geometricShape, e aggiunge le proprie proprietà e metodi specifici per i rettangoli
    constructor(width, height, color){
        super(color); //Con super(color) si delega la proprietà color alla classe padre geometricShape, che si occupa di inizializzarla correttamente, evitando di dover ripetere il codice per inizializzare la proprietà color nella classe Rectangle, e garantendo che la proprietà color sia gestita in modo coerente tra tutte le classi che estendono geometricShape
        this.width = width;
        this.height = height;
        
    }
set width(value){
    if(typeof value != "number"){
        throw Error("Tipo di dato errato")
    }
}
getArea(){
    return this.width * this.height;   //get area() viene sovrascritto
}

}
let rect = new Rectangle(80, 97, "Blue");
console.log(rect.height, rect.color);
rect.move(49, 98);
console.log(rect.getPosition());

class Circle extends geometricShape{
    constructor(radius, color){
        super(color);  //Delego
        this.radius = radius;
 
    } 

    getArea(){
    return Math.PI * this.radius * this.radius;
}
}

// Possiamo dire che stia estendendo geometricShape(padre) perché un cerchio è una forma geometrica, quindi ha senso che erediti le proprietà e i metodi di geometricShape, come la posizione e il colore, e aggiunga le proprie proprietà e metodi specifici per i cerchi, come il raggio e l'area. In questo modo, possiamo creare oggetti Circle che hanno tutte le funzionalità di geometricShape, ma anche le funzionalità specifiche dei cerchi, senza dover duplicare il codice per gestire la posizione e il colore in ogni classe che rappresenta una forma geometrica diversa.

//Polimorfismo

let circle = new Circle(30, "Red");

let shape = [circle, rect];

shape.forEach(shape =>{
    console.log(`${shape.constructor.name} | X : ${shape.getPosition().x}, Y : ${shape.getPosition().y}`)
})

// In breve il polimorfismo è la capacità di un oggetto di assumere molte forme, in questo caso, sia Circle che Rectangle sono forme di geometricShape