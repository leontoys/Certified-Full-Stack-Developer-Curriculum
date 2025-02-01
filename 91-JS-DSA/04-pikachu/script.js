const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const pokemon = document.getElementById("pokemon");
const pokemonImage = document.getElementById("pokemon-image")

const clear = ()=>{
    pokemonName.innerText = "";
    pokemonId.innerText = "";
    weight.innerText = "";
    height.innerText = "";
    hp.innerText = "";
    attack.innerText = "";
    defense.innerText = "";
    specialAttack.innerText = "";
    specialDefense.innerText = "";
    speed.innerText = "";
    types.innerHTML = ""; // Clear types
    // Remove sprite
    //pokemonImage.innerHTML = ""
}

const getPokemon = async () => {

    clear()

    const name = searchInput.value.toLowerCase().trim(); // Normalize input
    //console.log("name", name);
    try {
        const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${name}`);
        const data = await response.json();
        //console.log("data", data);

        // Update Pokémon data
        pokemonName.innerText = data.name.toUpperCase();
        pokemonId.innerText = `#${data.id}`;
        weight.innerText = `Weight: ${data.weight}`;
        height.innerText = `Height: ${data.height}`;
        hp.innerText = data.stats[0].base_stat;
        attack.innerText = data.stats[1].base_stat;
        defense.innerText = data.stats[2].base_stat;
        specialAttack.innerText = data.stats[3].base_stat;
        specialDefense.innerText = data.stats[4].base_stat;
        speed.innerText = data.stats[5].base_stat;

        // Clear and update types
        types.innerHTML = ""; // Clear types before adding new ones
        data.types.forEach(element => {
            types.innerHTML += `<li>${element.type.name.toUpperCase()}</li>`;
        });

        // Add Pokémon sprite
        //pokemonImage.innerHTML = `<img id="sprite" src="${data.sprites.front_default}">`;


    } catch (error) {
        console.error("error", error)
        alert("Pokémon not found"); // Exact alert message
    }
};

searchButton.addEventListener("click", getPokemon); 