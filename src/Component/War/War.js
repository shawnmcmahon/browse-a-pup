import React, { Component } from 'react';
import PastDogs from '../PastDogs/PastDogs'
import Dog from '../Dog/Dog';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import './War.css'

class War extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        allDogs: [],
        dogOne: [],
        dogTwo: [],
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
    
      const dogObjects = this.state.allDogs.map(currentDog => {
        let dog = {
          image: currentDog, 
          key: currentDog,
          isLoved: false, 
          roundsWon: 0, 
          roundTotal: 0,
          percentageWon: 0, 
        }
        return dog;
      })
      this.setState({allDogs: dogObjects})
      return dogObjects;
    

  }

//   mapDogs = () => {
//     if (this.state.pastDogs) {
//       const mappedPastDogs = this.state.pastDogs.map(currentDog => {
//         return (
//           <div>
//             <img className="dog" alt="past dog" src={currentDog.image}/>
//           </div>
//         )
//       })
      
    
//     return mappedPastDogs;
//   }
// }

  
  assignDogsOneAndTwo= () => {

    this.setState({dogOne: this.state.allDogs[0]})
    this.setState({dogTwo: this.state.allDogs[1]})
    this.state.allDogs.splice(1, 2);

  }

  handleClickOne = (event) => {
    event.preventDefault();
    const firstDog = this.state.dogOne
    const secondDog = this.state.dogTwo
    console.log('first dog', firstDog)
    console.log('second dog', secondDog)


    firstDog.roundsWon++;
    firstDog.roundTotal++;
    firstDog.percentageWon = Math.floor((firstDog.roundsWon / firstDog.roundTotal * 100));
    secondDog.roundTotal++;
    secondDog.percentageWon = secondDog.roundsWon / secondDog.roundTotal;
    this.setState({dogOne: firstDog, dogTwo: this.state.allDogs[1], pastDogs: [...this.state.pastDogs, secondDog]});
    this.state.allDogs.splice(1, 1);

  }


  handleClickTwo = (event) => {
    event.preventDefault();
    const firstDog = this.state.dogOne
    const secondDog = this.state.dogTwo

    secondDog.roundsWon++;
    secondDog.roundTotal++;
    secondDog.percentageWon = Math.floor((secondDog.roundsWon / secondDog.roundTotal * 100));
    firstDog.roundTotal++;
    firstDog.percentageWon = firstDog.roundsWon / firstDog.roundTotal;
    this.setState({dogOne: this.state.allDogs[0], dogTwo: secondDog, pastDogs: [...this.state.pastDogs, firstDog]});
    this.state.allDogs.splice(0, 1);

    // this.setState({dogTwo: secondDog})
    // this.setState({pastDogs: [...this.state.pastDogs, firstDog]})
    // this.state.allDogs.splice(0, 1);
    // this.setState({dogOne: this.state.allDogs[0]})

  }

  handleLoveOne = () => {
    const pastState = [...this.state.allDogs]
    if (!pastState[0].isLoved) {
      pastState[0].isLoved = true;
      this.setState({pastState})
    } else {
      pastState[0].isLoved = false;
      this.setState({pastState})
    }
  }

  handleLoveTwo = () => {
    const pastState = [...this.state.allDogs]
    if (!pastState[1].isLoved) {
      pastState[1].isLoved = true;
      this.setState({pastState})
    } else {
      pastState[1].isLoved = false;
      this.setState({pastState})
    }
  }

  

  
  render() {
    return (
      <div>
        <h4> Doggo 1</h4>
        <article className="dog-container">
          <Dog className="dog" alt="dog one" image={this.state.dogOne.image} />
          <button onClick={(event) => this.handleClickOne(event)}>Keep</button>
          <button onClick={(event) => this.handleLoveOne(event)}>Love</button>
        </article>
        <h4> Doggo 2</h4>
        <article className="dog-container">
          <Dog className="dog" alt="dog two" image={this.state.dogTwo.image} />
          <button onClick={(event) => this.handleClickTwo(event)}>Keep</button>
          <button onClick={(event) => this.handleLoveTwo(event)}>Love</button>
        </article>
        <article className="dog-container">
          <h2>Past Doggos</h2>
          {/* {this.mapDogs()} */}
          <PastDogs pastDogs={this.state.pastDogs} />
        </article>
      </div>
        
    )
  }

}

export default War;