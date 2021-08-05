import React from 'react';
import {BrowserRouter, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {




  return (
    <>
      <h2>Doggo Wars</h2>
      <NavLink exact to="/"><button className="nav-button">Home</button></NavLink>
      <NavLink exact to="/past-dogs"><button className="nav-button">Past Dogs</button></NavLink>
      <NavLink exact to="/loved-dogs"><button className="nav-button">Loved Dogs</button></NavLink>
    </>
  )
}


export default Header; 