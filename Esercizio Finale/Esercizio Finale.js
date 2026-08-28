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
        `;

        row.pokemonData = pokemon;
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

let menuDetails = document.getElementById("menuDetails");

function attachRowEvents() {
    const menuDetails = document.getElementById("menuDetails");
    const rows = document.querySelectorAll("#pokemonTable tbody tr");

    rows.forEach(row => {
        row.addEventListener("click", () => {
            const p = row.pokemonData;

            if (menuDetails.style.display === "block" && menuDetails.dataset.activePokemon === p.name) {
                menuDetails.style.display = "none";
                menuDetails.dataset.activePokemon = "";
                return;
            }

            menuDetails.dataset.activePokemon = p.name;

            menuDetails.innerHTML = `
                <h2>${p.name.charAt(0).toUpperCase() + p.name.slice(1)}</h2>
                <img src="${p.sprites.other['official-artwork'].front_default}" style="width:150px">
                <div> Types: ${p.types.map(t => `<span class="${t.type.name}">${t.type.name}</span>`).join(" ")}</div>
                <div class="stats">${p.stats.map(s => `<div class="stat"><p>${s.stat.name.charAt(0).toUpperCase() + s.stat.name.slice(1)} : ${s.base_stat}</p></div>`).join("")}</div>
                <p>Abilities : ${p.abilities.map(a => a.ability.name.charAt(0).toUpperCase() + a.ability.name.slice(1)).join(", ")}</p>
                <p> Base Experience : ${p.base_experience}</p>
                <p> Height: ${(p.height / 10).toFixed(1)}m</p>
                <p> Weight: ${(p.weight / 10).toFixed(1)}kg</p>
                <p> Forms: ${p.forms.map(f => f.name).join(", ")}</p>
                
                <div class="moves">
                    <p> Principal moves: ${p.moves.slice(0, 4).map(m => m.move.name.charAt(0).toUpperCase() + m.move.name.slice(1)).join(", ")}</p>
                    <button id="toggleMoves" class="toggleMoves">Mostra tutte ▼</button>
                    
                    <div id="allMoves">
                        <div class="allMoves-content">
                            ${p.moves.map(m => `<p>${m.move.name.charAt(0).toUpperCase() + m.move.name.slice(1)}</p>`).join("")}
                        </div>
                    </div>
                </div>
                
                <button id="closePanel">Chiudi</button> 
            `;

    
            const toggleMoves = document.getElementById("toggleMoves");
            const allMoves = document.getElementById("allMoves");
            
            toggleMoves.addEventListener("click", () => {
                const isOpen = allMoves.classList.toggle("open");
                toggleMoves.classList.toggle("active", isOpen);
                toggleMoves.textContent = isOpen ? "Nascondi ▲" : "Mostra tutte ▼";
            });

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


menuDetails.addEventListener("click", (e) => {
    if (e.target.id === "closePanel") {
        menuDetails.style.display = "none";
    }
})


