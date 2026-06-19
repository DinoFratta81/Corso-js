

let userData = {
    id: 123,
    name: "Carlo Buoni",
    age: 12,
    isActive: false,
    email: null,
    address: {
        street: "Via Bazoer 87",
        city: "Antananarivo",
        zipCode: "30918",
        country: "Madagascar",
    },
    hobbies: [
        { name: "Cucina", level: "Expert" },
        { name: "Padel", level: "beginner" },
        { name: "Nuoto", level: "Intermediate" },
    ],
    languages: ["Italiano", "Giapponese", "Inglese", "Spagnolo", "Francese"],
    score: 93.5,
    loginCount: 95,
    preferences: {
        theme: "dark",
        notifications: {
            email: true,
            push: false,
            sms: null,
        },
        privacy: {
            prifileVisible: true,
            showEmail: false,
        }
    }
};



let textObj = {
    string: "Jason",
    number: 84,
    Boolean: true,
    nullValue : null,
    
//⚠️ Questi si comportano stranamente:

dateObj : new Date(),       // → Stringa ISO
func: () => "hello",        // → scompare 
undef : undefined,          // → scompare
symbol : Symbol("test"),    // → scompare
NaN: NaN,                   // → null
Infinity : Infinity         // → null
};

//Quindi json supporta solo i tipi di dati: string, number, boolean, null, array e object. Tutti gli altri tipi di dati vengono convertiti in null o scompaiono del tutto.

//Per convertire:

let jsonStringFromObject = JSON.stringify(userData, null, 2);
console.log(jsonStringFromObject);

//Per ottenere data da una stringa JSON uso JSON.parse, JSON.parse serve solo per convertire una STRINGA JSON in oggetto: 
const jsonString = '{"name":"Carlo","age":12}';
const obj = JSON.parse(jsonString);
//Se il JSON è in un file .json, il parse lo fa già il browser.
//Se voglio prendere data da un file .json, posso usare fetch() o importarlo come modulo (import data from './data.json' assert { type: 'json' };) e il browser lo converte in oggetto automaticamente.


// Esempio:

const jsonString2 = '{"name": "Carlo", "age": 12}';

//La converti in oggetto così:
const obj1 = JSON.parse(jsonString);
console.log(obj.name); // "Carlo"
console.log(obj.age);  // 12


//Per importare data json in JS uso:

// import data from "./index.json" assert { type: "json" };

// console.log(data.name);
