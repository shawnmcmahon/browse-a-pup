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
      <NavLink exact to="/"><button className="nav-button">Home</button></NavLink>
      <NavLink exact to="/past-dogs"><button className="nav-button">Past Dogs</button></NavLink>
      <NavLink exact to="/loved-dogs"><button className="nav-button">Loved Dogs</button></NavLink>
      {mappedPastDogs}
    </section>
  )

}

export default PastDogs;