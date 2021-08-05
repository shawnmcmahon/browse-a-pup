import React from 'react';
import Dog from '../Dog/Dog'
import './LovedDogs.css'

const LovedDogs = ({pastDogs, isOnlyLoved}) => {


  const mappedLovedDogs = pastDogs.map(currentDog => {
    if (currentDog.isLoved) {
      return (
          <Dog image={currentDog.image} />
      )
    }
  })

  
  return (
    <section>
      {mappedLovedDogs}
    </section>
  )

}

export default LovedDogs;