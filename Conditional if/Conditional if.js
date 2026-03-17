let età = 14;
let hasLicence = true;

if(età >= 18 && hasLicence){
    console.log("Puoi guidare");
} else if(età >= 16 && hasLicence){
    console.log("Puoi guidare 125");
}
else if(età >= 14 && hasLicence){
    console.log("Puoi guidare 50");
}
else{
    console.log("non puoi guidare")
}

//Switch

let day = "Venerdì";


switch (day){
    case "Lunedì":
    console.log("vai a lavorare");
    break;
    case "Martedì":
    console.log("vai a lavorare");
    break;
    case "Mercoledì":
    console.log("vai a lavorare");
    break;
    case "Giovedì":
    console.log("vai a lavorare");
    break;
    case "Venerdì":
    console.log("vai a lavorare");
    break;
    case "Sabato":
    console.log("riposati");
    break;
    case "Domenica":
    console.log("riposati");
    break;
    default:
        console.log("Questo giorno non esiste");
}
//Oppure
switch (day){
    case "Lunedì":
    case "Martedì":
    case "Mercoledì":
    case "Giovedì":
    case "Venerdì":
    console.log("vai a lavorare");
    break;
    case "Sabato":
    case "Domenica":
    console.log("riposati");
    break;
    default:
        console.log("Questo giorno non esiste");
}

//Si possono accorpare delle casistiche se le condizioni sono uguali



//Ternary operator

let hasPurchased = true;
let buttonLabel = hasPurchased ? "vai al corso" : "aggiungi al carrello";
console.log(buttonLabel);
//Il ternary operator serve a  restituirci un valore, non si può eseguire codice; ? sarebbe se e ":" sarebbe altrimenti