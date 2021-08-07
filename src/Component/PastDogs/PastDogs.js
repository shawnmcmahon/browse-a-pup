import React from 'react';
import Dog from '../Dog/Dog'
import './PastDogs.css'

const PastDogs = ({pastDogs, handleLoveClick}) => {

  const mappedPastDogs = pastDogs.map(currentDog => {
    return (
        <Dog dog={currentDog} key={currentDog.key} handleLoveClick={handleLoveClick} />
    )
  })

  
  return (
    <>
      <h2>Past Dogs</h2>
      <section className="past-dogs-container" data-cy="past-dogs-container">
        {mappedPastDogs}
      </section>
    </>
  )

}

export default PastDogs;