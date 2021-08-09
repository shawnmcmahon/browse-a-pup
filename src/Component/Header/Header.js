import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {




  return (
    <div className="header-container">
      <section className="header">
        <NavLink exact to="/past-dogs"><button className="nav-button viewed" data-cy="past-dogs-button"></button></NavLink>
        <NavLink exact to="/"><button className="nav-button home" data-cy="home-button"></button></NavLink>
        <NavLink exact to="/loved-dogs"><button className="nav-button loved" data-cy="loved-dogs-button"></button></NavLink>
      </section>
    </div>
  )
}


export default Header; 