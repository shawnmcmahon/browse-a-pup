import React from 'react';
import './Dog.css';

const Dog = ({image}) => {


  return (
    <article>
      <img src={image} 
      className="dog" alt="past dog" />
    </article>
  )
}

export default Dog;