import React from 'react';
import { useRouter } from 'next/router';

const ServerPage = () => {
 const router = useRouter();

 return (
    <div>
      <h1>Page Serveur</h1>
      <PokemonList />
    </div>
 );
};

export default ServerPage;
