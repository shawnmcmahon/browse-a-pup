import React from 'react';
import Dog from '../Dog/Dog'
import './PastDogs.css'
import { NavLink } from 'react-router-dom';

const PastDogs = ({pastDogs, isOnlyLoved}) => {


  const mappedPastDogs = pastDogs.map(currentDog => {
    return (
        <Dog image={currentDog.image} />
    )
  })

  
  return (
    <section>
      {mappedPastDogs}
    </section>
  )

}

export default PastDogs;