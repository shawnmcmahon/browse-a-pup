import React, { Component } from 'react';
import Adopt from '../Adopt/Adopt';
import Header from '../Header/Header';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

const App = () => {

  
    return (
      <BrowserRouter>
        <>
          <Header />
          <div className="App">
          <Adopt />
          </div>
        </>
      </BrowserRouter>
    );
}

export default App;
