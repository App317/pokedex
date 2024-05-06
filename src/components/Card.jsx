import React, { useState } from 'react';
const Card = ({ pokemon, loading, infoPokemon }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (item) => {
    // Set the selected card when clicked
    setSelectedCard(item.id);
    // Call the infoPokemon function to show more info about the selected Pokemon
    infoPokemon(item);
  };

  /** On first page load, the first 20 pokemon get duplicated. 
  This filter is to ensure that no duplicate cards become apparent **/
  const filteredPokemon = pokemon.filter(
    (item, index, self) => index === self.findIndex((f) => f.id === item.id)
  );

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        filteredPokemon.map((item) => {
          // Determine whether the current card is selected or not
          const isSelected = selectedCard === item.id;

          return (
            <div
              className={`card ${isSelected ? 'card-selected' : ''}`}
              key={item.id}
              onClick={() => handleCardClick(item)}
            >
              <h2>{item.id}</h2>
              <img src={item.sprites.front_default} alt="" />
              <h2 className="pokemon-name">{item.name}</h2>
            </div>
          );
        })
      )}
    </>
  );
};

export default Card;
