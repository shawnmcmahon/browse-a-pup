import React from 'react';
import './Dog.css';

const Dog = ({dog, handleLoveClick}) => {

  return (
    <>
      <article className="dog-box" data-cy="dog-box">
          <img src={dog.image} 
          className="dog" alt="dog" data-cy="dog-image" />
          <button data-cy="love-dog" className={ dog.isLoved ?"love-button-true" : "love-button-false" } onClick={(event) => handleLoveClick(event, dog)}></button>
          <p> {dog.breed}</p>
          <p> {dog.roundsWon}</p>
      </article>
    </>
  )
}

export default Dog;