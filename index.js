const OPTIONS = {
  api: "https://pokeapi.co/api/v2/pokemon/",
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
