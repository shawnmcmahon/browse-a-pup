import React, { Component } from 'react';
import War from '../War/War';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super() 
      this.state = {
        allDogs: []
      }
    }

  // componentDidMount() {
  //   fetch('https://dog.ceo/api/breeds/image/random/50')
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({allDogs: data.message})
  //       // console.log(this.state.allDogs)
      
  //     })
  // }


  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h2> Doggo Wars</h2>
        </header>
        <h3> War </h3>
        <War allDogs={this.state.allDogs}/>

      </div>
    );
  }
}

export default App;
