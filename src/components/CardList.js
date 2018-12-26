import React from 'react';
import Card from './Card';

const CardList = ({ cards }) => {
  return (
    <ul className="card-list">
      {
        cards.map((current, i) => {
          return (
            <Card
              key={i}
              id={cards[i].id}
              imageUrl={cards[i].imageUrl}
              name={cards[i].name}
              artist={cards[i].artist}
              setName={cards[i].setName}
              type={cards[i].type}
              colors={cards[i].colors}
            />
          );
        })
      }
    </ul>
  );
}

export default CardList;