import React, { useState } from 'react';
const Card = ({ pokemon, loading, infoPokemon }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (item) => {
    setSelectedCard(item.id);
    infoPokemon(item);
  };

  const cards = pokemon.map(({ data }) => {
    const isSelected = selectedCard === data.id;
    return (
      <div
        className={`card ${isSelected ? 'card-selected' : ''}`}
        key={data.name}
        onClick={() => handleCardClick(data)}
      >
        <h2>{data.id}</h2>
        <img src={data.sprites.front_default} alt="" />
        <h2 className="pokemon-name">{data.name}</h2>
      </div>
    );
  });

  return <>{loading ? <h1>Loading...</h1> : cards}</>;
};
export default Card;
