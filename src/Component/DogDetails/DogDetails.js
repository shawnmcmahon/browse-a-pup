import React from 'react';
import './DogDetails.css';

const Dog = ({dog, handleLoveClick}) => {

  return (
    <>
      <article className="dog-box">
          <img src={dog.image} 
          className="dog" alt="past dog" />
          <button className={ dog.isLoved ?"love-button-true" : "love-button-false" } onClick={(event) => handleLoveClick(event, dog)}></button>
      </article>
    </>
  )
}

export default Dog;