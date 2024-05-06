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

  const pokeFun = async () => {
    setLoading(true);
    const response = await axios.get(url);
    setNextUrl(response.data.next);
    setPrevUrl(response.data.previous);
    getPokeData(response.data.results);
    setLoading(false);
  };
  //duplication error most likely occuring somehow in this code
  const getPokeData = async (response) => {
    //forEach instead of map because it runs independently from async calls, causing less errors
    response.map(async (item) => {
      const result = await axios.get(item.url);

      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));

        return state;
      });
    });
  };

  useEffect(() => {
    pokeFun();
  }, [url]);

  return (
    <>
      <div className="btn-group">
        {prevUrl && (
          <button
            className="prev-button"
            onClick={() => {
              setPokeData([]);
              setUrl(prevUrl);
            }}
          >
            Previous
          </button>
        )}

        {nextUrl && (
          <button
            className="next-button"
            onClick={() => {
              setPokeData([]);
              setUrl(nextUrl);
            }}
          >
            Next
          </button>
        )}
      </div>

      <div className="container">
        <div className="left-content">
          <div className="left-cards">
            <Card
              pokemon={pokeData}
              loading={loading}
              infoPokemon={(poke) => setPokeDex(poke)}
            />
          </div>
          <div className="right-content">
            <PokeInfo data={pokeDex} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
