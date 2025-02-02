import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const PokemonDetails = () => {
 const router = useRouter();
 const { id } = router.query;
 const [pokemon, setPokemon] = useState(null);

 useEffect(() => {
    if (id) {
      fetchPokemonDetails(id);
    }
 }, [id]);

 const fetchPokemonDetails = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    setPokemon(data);
 };

 return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Types: {pokemon.types.map(type => type.type.name).join(', ')}</p>
      <p>Order: {pokemon.order}</p>
    </div>
 );
};

export default PokemonDetails;
