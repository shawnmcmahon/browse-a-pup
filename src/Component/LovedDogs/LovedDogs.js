import React from 'react';
import Dog from '../Dog/Dog'
import './LovedDogs.css';
import { NavLink } from 'react-router-dom';


const LovedDogs = ({pastDogs, dogOne, dogTwo}) => {

  const allDogs = [...pastDogs, dogOne, dogTwo];

  const allLovedDogs = allDogs.filter(currentDog => currentDog.isLoved)




  const mappedLovedDogs = allLovedDogs.map(currentDog => {
      console.log('all Dogs', allDogs)
      console.log('allLovedDogs', allLovedDogs)
      return (
          <Dog image={currentDog.image} key={currentDog.image} />
      )
  })

  
  return (
    <section>
      <NavLink exact to="/"><button className="nav-button">Home</button></NavLink>
      <NavLink exact to="/past-dogs"><button className="nav-button">Past Dogs</button></NavLink>
      <NavLink exact to="/loved-dogs"><button className="nav-button">Loved Dogs</button></NavLink>
      {mappedLovedDogs}
    </section>
  )

}

export default LovedDogs;