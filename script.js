
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
let imgID = data.id;
console.log(imgID);
console.log(pokemonName);

// outputDiv.textContent = pokemonName;
outputDiv.innerHTML = `
    <div class="card" style="width 20px;">
    <div class="card-body">  
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imgID}.png" alt="pokemon">

    <h3 class="card-title">${pokemonCharacter}</h3>
    </div>
    </div>
`;
}

fetchButton.addEventListener("click", handleFetch);
