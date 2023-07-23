//"use client"
// fetch api
const getPokeData = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=152");
    return res.json()
  }

const getPokeImage = async (url) => { 
    const res = await fetch(url);
    return res.json()
}

export default async function PokemonList() {
    const pokemonData = await getPokeData();

    return (
        <div>
            {pokemonData.results.map(async (p) => {
                let pokemon = p.name.toUpperCase();
                let pokePage = await getPokeImage(p.url);
                return <div>
                    <p>{pokemon}</p>
                    <img src={pokePage.sprites.front_default} alt={pokemon}/>
                    <br/>
                </div>
            })}
        </div>
    );
}