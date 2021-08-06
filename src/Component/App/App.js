import React, { Component } from 'react';
import Adopt from '../Adopt/Adopt';
import Header from '../Header/Header';
import { BrowserRouter } from 'react-router-dom';
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
      <BrowserRouter>
        <div className="App">
          <Header />
          <h3> War </h3>
          <Adopt allDogs={this.state.allDogs}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
