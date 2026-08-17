let currentOffset = 0;
let currentPokemonList = [];

document.addEventListener("DOMContentLoaded", () => {
    loadPokemon(0);
});


async function loadPokemon(offset = 0) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
        if (!response.ok) {
            throw new Error("Errore nel caricamento");
        }

        const data = await response.json();
        currentOffset = offset;
        console.log(data);



        const pokemonPromises = data.results.map(async (pokemon, index) => {
            const detailResponse = await fetch(pokemon.url)
            const detail = await detailResponse.json();

            return {
                ...detail,
                listIndex: index
            }
        });

        console.log(pokemonPromises);

        currentPokemonList = await Promise.all(pokemonPromises);

        // displayPokemonTable();
        //updatePagination();


        console.log(currentPokemonList);
    } catch (error) {
        console.error(error);
    }
};