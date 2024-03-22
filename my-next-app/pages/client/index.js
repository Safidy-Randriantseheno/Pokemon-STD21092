import React from 'react';
import { useRouter } from 'next/router';

const ClientPage = () => {
 const router = useRouter();

 return (
    <div>
      <h1>Page client</h1>
      <PokemonList />
    </div>
 );
};

export default ClientPage;
