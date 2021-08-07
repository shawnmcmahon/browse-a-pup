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
        <>
          <Header />
          <div className="App">
            <Adopt allDogs={this.state.allDogs}/>
          </div>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
