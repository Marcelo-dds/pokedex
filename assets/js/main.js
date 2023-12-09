const offset = 0;
const limit = 9;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;


const convertPokemonsToLi = (pokemon) => {
    return `    <li class="pokemon">
 <span class="number">
     #001
 </span>
 <span class="name">${pokemon.name}</span>
 <div class="detail">
     <ol class="types">
         <li class="type">grass</li>
         <li class="type">poison</li>
     </ol>
     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
         alt="${pokemon.name}">
 </div>

</li>`

}

const pokemonList = document.getElementById('pokemonsList')


pokeApi.getPokemons().then((pokemons) => {
    const listItens = []



    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        listItens.push(convertPokemonsToLi(pokemon))

    }
    console.log(listItens);
})
