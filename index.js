// Házi feladat:
// https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0
// A fenti végpontot átalakítva képesek legyünk lekérni 0-9999-ig 
// pokémonokat. Minden lekért pokemon képét jelenítsük meg!
// A megejelenítés egy 5x5-ös gridben végezd el!
// Használj css-t a grid kialakításához

const OPTIONS = {
  api: "https://pokeapi.co/api/v2/pokemon/",
  api2: "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
};

const components = {
  button: "search-button",
  input: "search-input",
  container: "pokemon-container",
};

document
  .getElementById(components.button)
  .addEventListener("click", async () => {
    createPokemonImage(await getPokemonByName(
        document.getElementById(components.input).value
      ));
  });

async function getPokemonByName(pokemonName) {
  return (await fetch(`${OPTIONS.api}${pokemonName}`)).json()
}

function createPokemonImage(data) {
  document.getElementById(components.container).append(
    Object.assign(document.createElement("img"), {
      src: data.sprites.front_default,
    })
  );
}
