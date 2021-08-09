import React from 'react';
import Dog from '../Dog/Dog';
import PropTypes from 'prop-types';
import './PastDogs.css'

const PastDogs = ({pastDogs, handleLoveClick}) => {

  const mappedPastDogs = pastDogs.sort((a, b ) => { return b.roundsWon - a.roundsWon}).map(currentDog => {
    return (
        <Dog dog={currentDog} key={currentDog.key} handleLoveClick={handleLoveClick} />
    )
  })

  
  return (
    <>
      <h2>Past Pups</h2>
      <section className="past-dogs-container" data-cy="past-dogs-container">
        {mappedPastDogs}
      </section>
    </>
  )

}

export default PastDogs;

Dog.propTypes = {
  dog: PropTypes.object.isRequired
}