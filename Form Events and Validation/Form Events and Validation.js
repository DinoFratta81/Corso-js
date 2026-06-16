const form = document.getElementById("loginForm");  // Seleziona il form con id "loginForm"
const resultDiv = document.getElementById("result");  // Seleziona il div con id "result" per mostrare i messaggi di errore o successo
const directAccessBtn = document.getElementById("directAccess");  // Seleziona il bottone con id "directAccess" per accedere direttamente ai dati del form


form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Submit BLOCCATO");


    //Previene di inviare il form, in generale, prevemtDefault blocca il comportamento di default dell'evento, in questo caso l'invio del form.

    let formData = new FormData(form);   // Crea un oggetto FormData che contiene i dati del form, passando il form come argomento e gli dico di prendere i dati da quel form specifico tra parentesi.
    let email = formData.get("email");  // Ottiene il valore del campo "email" dal formData usando il metodo get, questo grazie al name="email" che abbiamo messo nell'input del form
    let password = formData.get("password");  // Ottiene il valore del campo "password" dal formData usando il metodo get, questo grazie al name="password" che abbiamo messo nell'input del form
    console.log("Email", email);  
    console.log("Password", password);


    validateData(email, password);
});


directAccessBtn.addEventListener("click", function (e) {
    let email = form.email.value;  // Accede direttamente al valore del campo "email" usando la proprietà name dell'input, in questo caso form.email.value
    let password = form.password.value;


    console.log("Email", email);
    console.log("Password", password);

    validateData(email, password);
});

//Validazione


function validateData(email, password) {
    if (!email) {
        showError("email", "Email richiesta");
        return { valid: false, message: "Email mancante" };
    }
    if (!password) {
        showError("password", "Password richiesta");
        return { valid: false, message: "Password mancante" }; // Se la password è mancante, mostra un messaggio di errore e restituisce un oggetto con valid: false e un messaggio di errore
    }
}


function showError(field, message) {
    let formField = form.elements[field];
    resultDiv.textContent = message;
    formField.style.borderColor = "red";
}


