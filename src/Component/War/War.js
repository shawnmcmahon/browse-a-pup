import React, { Component } from 'react';
import './War.css'

class War extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        allDogs: [],
        dogOne: '',
        dogTwo: '',
        pastDogs: [] 
      }
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random/50')
      .then(response => response.json())
      .then(data => {
        this.setState({allDogs: data.message})
        this.assignDogsOneAndTwo();

        // this.setState({dogOne: this.state.allDogs[0]})
        // this.setState({dogTwo: this.state.allDogs[1]})
        // console.log(this.state.allDogs)
      })

    
    // this.assignDogsOneAndTwo();
  }

  
  assignDogsOneAndTwo= () => {
    this.setState({dogOne: this.state.allDogs[0]})
    this.setState({dogTwo: this.state.allDogs[1]})
  }

  handleClickOne = (event) => {

    event.preventDefault();
    this.setState({pastDogs: [...this.state.pastDogs, this.state.dogTwo] });
    this.state.allDogs.splice(1, 1);
    this.setState({dogTwo: this.state.allDogs[1]});
  }

  
  handleClickTwo = (event) => {
    event.preventDefault();
    this.setState({pastDogs: [...this.state.pastDogs, this.state.dogOne] });
    this.state.allDogs.splice(0, 1); 
    this.setState({dogOne: this.state.allDogs[1]});
  }

  
  render() {
    return (
      <div>
        <h4> Doggo 1</h4>
        <article className="dog-container">
          <img className="dog" src={this.state.dogOne} />
          <button onClick={(event) => this.handleClickOne(event)}>Keep</button>
          <button>Love</button>
        </article>
        <h4> Doggo 2</h4>
        <article className="dog-container">
          <img className="dog" src={this.state.dogTwo} />
          <button onClick={(event) => this.handleClickTwo(event)}>Keep</button>
          <button>Love</button>
        </article>
        <article className="dogcontainer">
        </article>
      </div>
        
    )
  }

}

export default War;