import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {




  return (
    <header className="header-container">
      <section className="header">
        <NavLink exact to="/past-dogs"><button className="nav-button viewed" data-cy="past-dogs-button"></button></NavLink>
        <NavLink exact to="/"><button className="nav-button home" data-cy="home-button"></button></NavLink>
        <NavLink exact to="/loved-dogs"><button className="nav-button loved" data-cy="loved-dogs-button"></button></NavLink>
      </section>
      <h2 className="title">Adopt-A-Doggo</h2>
    </header>
  )
}


export default Header; 