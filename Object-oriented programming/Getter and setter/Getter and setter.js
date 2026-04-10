class Rectangle {
    constructor(width = 10, height = 5) {
        this.width = width;
        this.height = height;
    }

    set height(value) {
        if (!value || typeof value != "number") {
            throw Error("Si accettano solo numeri")
        }

        this._height = value
    }

    get height() {
        return this._height
    }

    get area() {
        return this.width * this._height
    }
}

let rect = new Rectangle(12, 5);
console.log(rect);
rect.height = 55
console.log(rect.height);
console.log(rect.area)





class totalPrice{
    constructor(price = 3, quantity = 7){
    this.price = price
    this.quantity = quantity
    }

    set price(value){
        if(!value || typeof value != "number"){
            throw Error("Valore errato")
        }
        this._price = value;  //Serve per evitare un loop infinito, altrimenti price richiama se stesso all'infinito
    }
    get price(){
        return this._price  //Serve per restituire il valore della proprietà price, altrimenti restituirebbe undefined, perché non esiste una proprietà price
    }
    
    get total(){
        return this._price * this.quantity  

        //Non solo restituisce il prezzo totale, ma anche se il prezzo/quantità viene modificato, il totale si aggiorna automaticamente, perché è una proprietà calcolata
        //Quindi permette di rilevare gli aggiornamenti in tempo reale, senza dover chiamare un metodo per calcolare il totale ogni volta che si modifica il prezzo o la quantità
    }
}



let buy = new totalPrice(30, 2);
console.log(buy)
buy.price = 55;
console.log(buy.price);  //Senza il getter price, non sarebbe possibile accedere al prezzo, perché è stato definito come una proprietà privata (con l'underscore), quindi è necessario utilizzare il getter per accedere al valore del prezzo
console.log(buy.total);  //Ottenuto con il getter total, che restituisce il prezzo totale, calcolato in tempo reale, quindi se si modifica il prezzo o la quantità, il totale si aggiorna automaticamente, senza dover chiamare un metodo per calcolare il totale ogni volta che si modifica il prezzo o la quantità




class contoBancario{
    constructor(titolare = "Giovanni" , saldo = 100 , numeroConto = "2324142532"){
        this.titolare = titolare
        this.saldo = saldo
        this.numeroConto = numeroConto 
    }
    set titolare(value){
        if(typeof value != "string" || value =="")
            throw Error("Errore")
        this._titolare = value
    }

     set saldo(value){
        if(typeof value != "number" || value < 0)
            throw Error("Errore")
        this._saldo = value
    }
     set numeroConto(value){
        if(value.length !== 10 || value == "" || !/^\d+$/.test(value))
            throw Error("Errore")
        this._numeroConto = value
    }

    get titolare(){
        return this._titolare
    }
    
    get saldo(){
        return this._saldo
    }
    
    get numeroConto(){
        return this._numeroConto
    }
    deposita(importo){
        if(typeof importo != "number" || importo <= 0)
            throw Error("Importo non valido")
        this._saldo += importo
        return this._saldo
    }

    preleva(importo){
        if(typeof importo != "number" || importo > this._saldo)
            throw Error("Importo non valido")
        this._saldo -= importo
        return this._saldo
    }

}


let nuovoTitolare = new contoBancario("Marco", 200, "3433924135");
console.log(nuovoTitolare._saldo);

let conto = new contoBancario("Fabio", 500, "1234567890");


conto.deposita(59);
console.log(conto);