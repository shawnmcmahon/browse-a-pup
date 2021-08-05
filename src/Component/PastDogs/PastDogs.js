import React from 'react';
import Dog from '../Dog/Dog'
import './PastDogs.css'

const PastDogs = ({pastDogs}) => {


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