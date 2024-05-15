import React, { useEffect } from 'react';
import Card from './Card';
import PokeInfo from './PokeInfo';
import { useState } from 'react';
import axios from 'axios';

const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  const getPokeData = async (response) => {
    const pokemonPromises = response.map((query) => axios.get(query.url));
    return await Promise.all(pokemonPromises);
  };

  useEffect(() => {
    const pokeFun = async () => {
      setLoading(true);
      const response = await axios.get(url);
      setNextUrl(response.data.next);
      setPrevUrl(response.data.previous);
      setPokeData(await getPokeData(response.data.results));
      setLoading(false);
    };
    pokeFun();
  }, [url]);

  return (
    <>
      <div className="container">
        <div className="left-content">
          <div className="header-box">
            <h1 className="header">Pokédex</h1>
          </div>
          <div className="btn-group">
            {prevUrl && (
              <button
                onClick={() => {
                  setUrl(prevUrl);
                }}
              >
                Previous
              </button>
            )}

            {nextUrl && (
              <button
                onClick={() => {
                  setUrl(nextUrl);
                }}
              >
                Next
              </button>
            )}
          </div>
          <div className="left-cards">
            <Card
              pokemon={pokeData}
              loading={loading}
              infoPokemon={(poke) => setPokeDex(poke)}
            />
          </div>
        </div>
        <div className="right-content">
          <PokeInfo data={pokeDex} />
        </div>
      </div>
    </>
  );
};

export default Main;
