class User {
    static numeroUtenti = 0;

    constructor(nome, cognome){
        this.id = User.generaIDUtente();
        this.nome = nome;
        this.cognome = cognome;

        User.numeroUtenti++
    }

    static generaIDUtente(){
        return Math.random()
    }
}


let user1 = new User("Luca", "Marchigiani");
let user2 = new User("Martina", "Giannini");

console.log(user1);
console.log(user2);
console.log(User.numeroUtenti);





class Product{
    static totalProducts = 0;

    constructor(Price, Name){
        this.Price = Price;         
        this.Name = Name;
        this.id = Product.IDGenerator();    
        Product.totalProducts++
    }

    set Price(value){
        if(value < 0)
            throw Error("Importo non valido")
             this._Price = value
    }

    get Price(){
        return this._Price;         
    }

    getInfo(){
        return(`Info prodotto: ${this.id}, Descrizione:${this.Name} Prezzo:${this.Price}`)
    }

    static IDGenerator(){
        return Math.random()
    }
}

let p1 = new Product(8, "Biscotti");
let p2 = new Product(2, "Patatine");

console.log(p1.getInfo());
console.log(p2.getInfo());
console.log(Product.totalProducts);


class BankAccount{
    static totalAccounts = 0;

    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance;
        this.id = BankAccount.IDGenerator();
        BankAccount.totalAccounts++
    }
    static IDGenerator(){
        return Math.random();
    }
    set balance(value){
        if(value < 0)
            throw Error("Importo errato")
        this._balance= value;
    }

    get balance(){
        return this._balance
    }

    getInfo(){
        return(`Descrizione conto: Intestatario:${this.owner}; Saldo:${this.balance}`)
    }
    
}

let acc1 = new BankAccount("Negri Dario", 781414);
let acc2 = new BankAccount("Fedele Nicola", 78999);


console.log(acc1);
console.log(acc2);
console.log(BankAccount.IDGenerator());
console.log(acc1.getInfo());