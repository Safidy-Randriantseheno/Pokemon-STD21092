import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const PokemonList = ({ initialPage = 1 }) => {
 const router = useRouter();
 const [pokemons, setPokemons] = useState([]);
 const [currentPage, setCurrentPage] = useState(initialPage);
 const [totalPages, setTotalPages] = useState(0);

 useEffect(() => {
    fetchPokemons(currentPage);
 }, [currentPage]);

 const fetchPokemons = async (page) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${(page - 1) * 50}`);
    const data = await response.json();
    setPokemons(data.results);
    setTotalPages(Math.ceil(data.count / 50));
 };

 return (
    <div>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            {pokemon.name}
            <button onClick={() => router.push(`/pokemon/${pokemon.name}`)}>Détails</button>
          </li>
        ))}
      </ul>
      <div>
        {currentPage > 1 && <button onClick={() => setCurrentPage(currentPage - 1)}>Précédent</button>}
        {currentPage < totalPages && <button onClick={() => setCurrentPage(currentPage + 1)}>Suivant</button>}
      </div>
    </div>
 );
};

export default PokemonList;
