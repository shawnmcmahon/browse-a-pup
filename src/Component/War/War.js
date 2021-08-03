import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './War.css'

class War extends Component {
  constructor() {
    super() 
      this.state = {
        allDogs: [],
        dogOne: [],
        dogTwo: [],
        pastDogs: [], 
      }
  }


  
  render() {
    return (
      <>
        <h4> Doggo 1</h4>
        <h4> Doggo 2</h4>
      </>
    )
  }

}

export default War;