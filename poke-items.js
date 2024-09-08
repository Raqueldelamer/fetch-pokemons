console.log("Hello from poke-items.js!");

let fetchButton1 = document.getElementById("fetch-button");
let pokemonInfoInput = document.getElementById("pokemon-info");
let outputDiv = document.getElementById("character-output");
let keywordUL = document.getElementById("keyword-list");

async function handleFetch() {
  console.log("fetch Pokemons stats!");

  let itemCode = pokemonInfoInput.value;

  let result = await fetch(`https://pokeapi.co/api/v2/item/${itemCode}`);
  console.log(result);
  let data = await result.json();
  console.log(data);

  let languages = data.names;

  let html = '';
  for(let i=0; i < languages.length; i++ ) {
      html += `<li>${languages[i].name}</li>  \n`;
      console.log(html);
  }
  console.log(html);

  let imgID = data.id;
  console.log(imgID);

outputDiv.innerHTML = `

    <div class="card" style="width 20px;">
    <div class="card-body">  
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imgID}.png" alt="pokemon">
  
    <h4>ID: ${itemCode}</h4>
    <ul id="keyword-list">ITEM LANGUAGES: ${html}</ul>

    </div>
</div>
`;
}

fetchButton1.addEventListener("click", handleFetch);
