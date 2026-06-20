//Codice sincrono significa fai una cosa una dopo l'altra.
//Il codice asincrono, invece, consiste nel fatto che, se sto facendo un operazione lunga, dico di andare oltre e continuarla a farla in background e quando hai il risultato me lo rendi dove puoi.

//Le parole chiave sono: async(si può trovare su qualsiasi operazione non istantanea) ed await

async function getUsers() {
    try {
        let response = await fetch(`/api/users`)//L'api su un server è un interfaccia di codice che noi andiamo a contattare per fargli fare determinate operazioni. Le chiamate le facciamo con fetch
        let users = await response.json()


        return users
    } catch (error) {

        console.error(error);

    }
}


getUsers();

//Con await aspettiamo che la fetch abbia finito di fare la sua operazione, e quando ha finito, ci restituisce una risposta. Se non usassimo await, response sarebbe una promessa, e non avremmo il risultato della fetch, ma solo la promessa che ci darà il risultato in futuro.



async function getPokemon(nome) {
    try {
        let responsePoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);


        if (!responsePoke.ok) {
            throw new Error(`Pokemon non trovato: ${nome}`)

        }

        let pokemon = await responsePoke.json();
        console.log(pokemon);

    } catch (error) {
        console.error(`Errore nel caricare il pokemon.`, error)

    }

}

getPokemon(`bulbasaur`);






async function getPokemonById(id) {
    try {
        let idResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

        if (!idResponse.ok) {
            throw new Error(`Pokemon non trovato ${id}`)
        }

        let PokemonById = await idResponse.json();
        console.log(PokemonById);
    }
    catch (error) {
        console.error(`Errore di caricamento del Pokemon.`, error);
    }
}

getPokemonById(`690`);