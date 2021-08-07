import React from 'react';
import Dog from '../Dog/Dog'
import './LovedDogs.css';
import { NavLink } from 'react-router-dom';


const LovedDogs = ({pastDogs, handleLoveClick}) => {

  const allDogs = [...pastDogs];

  const allLovedDogs = allDogs.filter(currentDog => currentDog.isLoved)




  const mappedLovedDogs = allLovedDogs.map(currentDog => {
      console.log('all Dogs', allDogs)
      console.log('allLovedDogs', allLovedDogs)
      return (
          <Dog dog={currentDog} key={currentDog.image} handleLoveClick={handleLoveClick} />
      )
  })

  
  return (
    <>
      <h2>Loved Dogs</h2>
      <section className="loved-dogs-container">
        {mappedLovedDogs}
      </section>
    </>
    )

}

export default LovedDogs;