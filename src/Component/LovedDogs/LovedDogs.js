import React from 'react';
import Dog from '../Dog/Dog'
import PropTypes from 'prop-types';
import './LovedDogs.css';


const LovedDogs = ({pastDogs, handleLoveClick}) => {

  const allDogs = [...pastDogs];
  const allLovedDogs = allDogs.filter(currentDog => currentDog.isLoved);
  const mappedLovedDogs = allLovedDogs.map(currentDog => {
      return (
          <Dog dog={currentDog} key={currentDog.image} handleLoveClick={handleLoveClick} />
      )
  });

  
  return (
    <>
      <h2>Loved Pups</h2>
      {!allLovedDogs.length && <p>You haven't loved any pups! Love pups to see them here. </p>}
      <section className="loved-dogs-container" data-cy="loved-dogs-container">
        {mappedLovedDogs}
      </section>
    </>
    )

}

export default LovedDogs;

Dog.propTypes = {
  dog: PropTypes.object.isRequired
}

