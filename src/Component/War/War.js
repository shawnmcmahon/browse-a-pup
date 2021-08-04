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
        this.createDogObjects();
        this.assignDogsOneAndTwo();

        // this.setState({dogOne: this.state.allDogs[0]})
        // this.setState({dogTwo: this.state.allDogs[1]})
        // console.log(this.state.allDogs)
      })

    
    // this.assignDogsOneAndTwo();
  }

  createDogObjects = () => {
    if (this.state.allDogs.length > 0) {
      // console.log('all dogs state', this.state.allDogs)
      const dogObjects = this.state.allDogs.map(currentDog => {
        let dog = {
          image: currentDog, 
          breed: '',
          isLoved: false, 
          roundsWon: 0, 
          percentageWon: 0, 
          bestStreak: 0
        }
        return dog;
      })
      this.setState({allDogs: dogObjects})
      return dogObjects;
    }

  }

  mapDogs = () => {
    if (this.state.pastDogs) {
      const mappedPastDogs = this.state.pastDogs.map(currentDog => {
        return (
          <div>
            <img className="dog" alt="past dog" src={currentDog}/>
          </div>
        )
      })
      
    
    return mappedPastDogs;
  }
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
          <img className="dog" alt="dog one" src={this.state.dogOne.image} />
          <button onClick={(event) => this.handleClickOne(event)}>Keep</button>
          <button>Love</button>
        </article>
        <h4> Doggo 2</h4>
        <article className="dog-container">
          <img className="dog" alt="dog two" src={this.state.dogTwo.image} />
          <button onClick={(event) => this.handleClickTwo(event)}>Keep</button>
          <button>Love</button>
        </article>
        <article className="dog-container">
          <h2>Past Doggos</h2>
          {this.mapDogs()}
        </article>
      </div>
        
    )
  }

}

export default War;