import React, { Component } from 'react';
import War from '../War/War';
import './App.css';

class App extends Component {
  constructor() {
    super() 
      this.state = {
        allDogs: []
      }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h2> Doggo Wars</h2>
        </header>
        <h3> War </h3>
        <War />

      </div>
    );
  }
}

export default App;
