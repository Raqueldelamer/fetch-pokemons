
let fetchButton = document.getElementById("fetch-button");
let pokemonCharacterInput = document.getElementById("pokemon-character");
let outputDiv = document.getElementById("character-output")

async function handleFetch() {
    console.log("fetch Pokemons!");
    let pokemonCharacter = pokemonCharacterInput.value;
    let result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonCharacter}`);
    console.log(result); 
    let data = await result.json();
    console.log(data);
    


let pokemonName = data.pokemonName;
let imgURL = data.imgURL;
console.log(imgURL);
console.log(pokemonName);
outputDiv.innerHTML = `
<div class="card">
<img alt="pokemon" src="https://pokeapi.co/api/v2/pokemon/?limit=20&offset=30/${pokemonName || imgURL}.png">
<div class="card-body">
    <h3 class="card-title">${pokemonCharacter}</h3>
    </div>
    </div>
`;
}

fetchButton.addEventListener("click", handleFetch);
