console.log("Hello from poke-items.js!")

let fetchButton1 = document.getElementById("fetch-button");
let pokemonInfoInput = document.getElementById("pokemon-info");
let outputDiv = document.getElementById("character-output")
let keywordUL = document.getElementById("keyword-list");

async function handleFetch() {
    console.log("fetch Pokemons stats!");
    let itemCode = pokemonInfoInput.value;
    let result = await fetch(`https://pokeapi.co/api/v2/item/${itemCode}`);
    console.log(result); 
    let data = await result.json();
    console.log(data);

    //let pokemonCharacter = data.id[i]
    let pokemonAttribute = data.attributes[0].name;
    let pokeLanguage = data.names[3].language.name;
    let itemName = data.names[3].name;

    console.log(pokeLanguage);

    // <h3 class="card-title">${pokemonCharacter}</h3>
    
    // let pokemonType = data.types[0].type.name;
    

let imgID = data.id;
console.log(imgID);

// outputDiv.textContent = infoID;
outputDiv.innerHTML = `
    <div class="card" style="width 20px;">
    <div class="card-body">  
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imgID}.png" alt="pokemon">
    <h3>Language: ${pokeLanguage}</h3>
    <h3>Item: ${itemName}</h3>
    </div>
    </div>
`;
}

fetchButton1.addEventListener("click", handleFetch);