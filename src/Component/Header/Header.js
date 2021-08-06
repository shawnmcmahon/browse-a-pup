import React from 'react';
import {BrowserRouter, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import './Header.css'
import home from '../../assets/home.png';


const Header = () => {




  return (
    <header className="header-container">
      <section className="header">
        <NavLink exact to="/"><button className="nav-button home" ></button></NavLink>
        <NavLink exact to="/past-dogs"><button className="nav-button viewed"></button></NavLink>
        <NavLink exact to="/loved-dogs"><button className="nav-button loved"></button></NavLink>
      </section>
      <h2 className="title">Adopt-A-Doggo</h2>
    </header>
  )
}


export default Header; 