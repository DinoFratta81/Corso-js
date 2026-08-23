let currentOffset = 0;
let currentPokemonList = [];

document.addEventListener("DOMContentLoaded", () => {
    loadPokemon(0);
});

async function loadPokemon(offset = 0) {
    try {
        window.scrollTo({ top: 0, behavior: "instant" });
        document.getElementById("loading").style.display = "block";
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=40&offset=${offset}`);
        if (!response.ok) {
            throw new Error("Errore rilevato")
        }

        const data = await response.json();
        currentOffset = offset;
        console.log(data);

        const pokemonPromises = data.results.map(async (pokemon, index) => {
            const detailResponse = await fetch(pokemon.url);
            const detail = await detailResponse.json();

            return {
                ...detail,
                listIndex: index
            }
        });

        console.log(pokemonPromises);

        currentPokemonList = await Promise.all(pokemonPromises);


        displayPokemonTable(currentPokemonList);
        updatePagination(data, offset);

        console.log(currentPokemonList);

    } catch (error) {
        console.error(error);
    } finally {
        document.getElementById("loading").style.display = "none";
    }
};


function displayPokemonTable(pokemonList) {
    const tbody = document.getElementById("pokemonTableBody");

    tbody.innerHTML = ``;


    pokemonList.forEach((pokemon, index) => {
        const row = document.createElement("tr");
        const tipiHTML = pokemon.types.map(t => `<span class =" ${t.type.name}">${t.type.name}</span>`);

        row.innerHTML = `
        <td>
               <img src = " ${pokemon.sprites.front_default}"
               alt = ${pokemon.name}
               class = "pokemon-image">
        </td>

             <td class = "pokemon-name">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</td>
             <td class = "pokemon-id"> #${pokemon.id.toString().padStart(3, `0`)}</td>
             <td class = "pokemon-types">${tipiHTML.join(" ")}</td>
             <td class = "pokemon-name">${(pokemon.height / 10).toFixed(1)}m</td>
             <td class = "pokemon-name">${(pokemon.weight / 10).toFixed(1)}kg</td>
        `
        tbody.appendChild(row);
    });


    attachRowEvents();

};

function updatePagination(data, offeset) {
    let pageInfo = document.getElementById("pageInfo");
    let currentPage = Math.floor(offeset / 40) + 1;
    let totalPages = Math.ceil(data.count / 40);

    pageInfo.textContent = `Pagina ${currentPage} di ${totalPages}. Numero totale pokemon : ${data.count}.`
};

function attachRowEvents() {
    let menuDetails = document.getElementById("menuDetails");
    const rows = document.querySelectorAll("#pokemonTable tbody tr");

    rows.forEach(row => {
        row.addEventListener("click", () => {
            
            if (menuDetails.style.display === "block") {
                menuDetails.style.display = "none";
                return;
            }


            const name = row.querySelector(".pokemon-name").textContent;
            const tipi = row.querySelector(".pokemon-types").innerHTML
            const id = row.querySelector(".pokemon-id").textContent;
            const img = row.querySelector("img").src;


            menuDetails.innerHTML = `
                <h2>${name}</h2>
                <img src="${img}" style="width: 120px">
                <p>ID: ${id}</p>
                <p>${tipi}</p>
                <button id="closePanel">Chiudi</button> 
            `;

            menuDetails.style.display = "block";
        });
    });
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        const menu = document.getElementById("menuDetails")
        menu.style.display = "none";
    }
});

document.addEventListener("click", (e) => {
    const menuDetails = document.getElementById("menuDetails");

    // se il pannello è chiuso, non fare nulla
    if (menuDetails.style.display !== "block") return;

    // se clicchi dentro il pannello → non chiudere
    if (menuDetails.contains(e.target)) return;

    // se clicchi dentro la tabella → non chiudere
    if (e.target.closest("#pokemonTable")) return;

    // altrimenti chiudi
    menuDetails.style.display = "none";
});
