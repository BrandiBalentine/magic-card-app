import React from 'react';

const Card = ({ name, artist, imageUrl, setName, type, colors }) => {
  
  return (
    <li>
      <div className={`card card--${colors[0] && colors[0].toLowerCase()}`}>
        <img src={imageUrl} alt={`${name} Magic Card`} />
        <div className="card-details">
          <h2>{name}</h2>
          <p>Artist: {artist}</p>
          <p>Set: {setName}</p>
          <p>Type: {type}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;