import React from 'react';
import Browse from '../Browse/Browse.js';
import Header from '../Header/Header';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

const App = () => {

  
    return (
      <BrowserRouter>
        <>
          <Header />
          <div className="App">
          <Browse />
          </div>
        </>
      </BrowserRouter>
    );
}

export default App;
