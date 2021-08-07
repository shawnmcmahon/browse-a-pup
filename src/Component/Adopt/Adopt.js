import React, { Component } from 'react';
import PastDogs from '../PastDogs/PastDogs';
import LovedDogs from '../LovedDogs/LovedDogs';
import Dog from '../Dog/Dog';
import {Route, Switch} from 'react-router-dom';
import './Adopt.css';

class Adopt extends Component {
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
        this.assignBreed();
        this.assignID();
        this.assignDogsOneAndTwo();
      })

    
  }

  createDogObjects = () => {
      const dogObjects = this.state.allDogs.map(currentDog => {
        let dog = {
          image: currentDog, 
          key: '',
          isLoved: false, 
          roundsWon: 0, 
          roundTotal: 0,
          percentageWon: 0,
          breed: '', 
        }
        return dog;
      })
      this.setState({allDogs: dogObjects})
      return dogObjects;
  }


  assignBreed = () => {
    const allDogs = this.state.allDogs; 
    const allDogsWithBreeds = allDogs.map(currentDog => {
      let breed = currentDog.image.split('/')[4]
      if (breed.includes('-')) { 
        breed  = breed.split('-').join(' ')

      }
      currentDog.breed = breed;
      return currentDog;
    })
    return allDogsWithBreeds;
  }

  assignID = () => {
    const allDogs = this.state.allDogs; 
    const allDogsWithIDs = allDogs.map(currentDog => {
      let id = currentDog.image.split('/')[5]
      currentDog.id = id;
      currentDog.key = id;
      return currentDog;
    })
    return allDogsWithIDs;
  }

  assignDogsOneAndTwo= () => {
    this.setState({pastDogs: [this.state.allDogs[0], this.state.allDogs[1]]})
    this.state.allDogs.splice(1, 2);
    this.setState({dogOne: this.state.pastDogs[0]})
    this.setState({dogTwo: this.state.pastDogs[1]})

  }

  handleClickOne = (event) => {
    event.preventDefault();
    const firstDog = this.state.dogOne
    const secondDog = this.state.dogTwo
    firstDog.roundsWon++;
    firstDog.roundTotal++;
    firstDog.percentageWon = Math.floor((firstDog.roundsWon / firstDog.roundTotal * 100));
    secondDog.roundTotal++;
    secondDog.percentageWon = secondDog.roundsWon / secondDog.roundTotal;

    this.setState({dogOne: firstDog, dogTwo: this.state.allDogs[1]});
    if (!this.state.pastDogs.includes(secondDog)) {
      this.setState({pastDogs: [...this.state.pastDogs, secondDog]});
    }

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

    this.setState({dogOne: this.state.allDogs[0], dogTwo: secondDog})
    if (!this.state.pastDogs.includes(firstDog)) {
      this.setState({pastDogs: [...this.state.pastDogs, firstDog]});
    }

    this.state.allDogs.splice(0, 1);

  }

  handleLoveClick = (event, dog) => {
    const allPastDogs = this.state.pastDogs;
      allPastDogs.forEach(currentDog => {
        if (currentDog === dog) {
          if (!currentDog.isLoved) {
            currentDog.isLoved = true
          } else if (currentDog.isLoved) {
            currentDog.isLoved = false;
          }
        }
      })
      this.setState({pastDogs: allPastDogs})
    }
  

  
  render() {
    return (
      <Switch>
        <Route 
          exact path ='/'
          render={({match}) => {
            return (
              <div className="adopt-container">
                  <button className="keep-button" onClick={(event) => this.handleClickOne(event)}>Keep</button>
                  <Dog className="dog one" id="dogOne" data-cy="dogOne" alt="dog one" dog={this.state.dogOne} handleLoveClick={this.handleLoveClick}/>
                <button className="keep-button" onClick={(event) => this.handleClickTwo(event)}>Keep</button>
                <Dog className="dog two" id="dogTwo" data-cy="dogTwo" alt="dog two" dog={this.state.dogTwo} handleLoveClick={this.handleLoveClick}/>
              </div>
            )   
            }}
          />
        <Route 
          exact path='/past-dogs' 
          render={() => {
              return(
                <article className="dog-container">
                  <PastDogs pastDogs={this.state.pastDogs} isOnlyLoved="false" handleLoveClick={this.handleLoveClick}/>
                </article>
              )
            }}
            / > 
        <Route 
          exact path='/loved-dogs' 
          render={() => {
              return(
                <article className="dog-container">
                  <LovedDogs pastDogs={this.state.pastDogs} dogOne={this.state.dogOne} dogTwo={this.state.dogTwo} handleLoveClick={this.handleLoveClick}/>
                </article>
              )
            }}
            / > 
        </Switch> 
    )
  }
}


export default Adopt;