import React, { Component } from 'react';
import PastDogs from '../PastDogs/PastDogs';
import LovedDogs from '../LovedDogs/LovedDogs';
import Dog from '../Dog/Dog';
import ErrorHandling from '../ErrorHandling/ErrorHandling';
import {Route, Switch} from 'react-router-dom';
import checkForError from '../../util';
import './Adopt.css';

class Adopt extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        allDogs: [],
        dogOne: [],
        dogTwo: [],
        pastDogs: [],
        isLoading: true,
        errorWarning: '' 
      }
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random/50')
    // .then(response => checkForError(response))
    // .then(data => {
    //   if (data) {
    //     this.setState({allDogs: data.message})
    //     this.createDogObjects();
    //     this.assignBreed();
    //     this.assignID();
    //     this.assignDogsOneAndTwo();
    //     this.setState({isLoading: false})
    //   } else {
    //     this.setState({errorWarning: 'empty data'})
    //   }
    // })
    // .catch(error => this.setState({errorWarning :  error , isLoading: false}))
    .then(response => checkForError(response))
    .then(data => {
        this.setState({allDogs: data.message})
        this.createDogObjects();
        this.assignBreed();
        this.assignID();
        this.assignDogsOneAndTwo();
        this.setState({isLoading: false})
    })
    .catch(error => this.setState({errorWarning :  error , isLoading: false}))
    

    
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
            <>  
              <div className="adopt-container" data-cy="adopt-container">
                {!this.state.errorWarning && this.state.isLoading && <h2>Loading. One moment please...</h2>}
                {!!this.state.errorWarning && !this.state.isLoading && <ErrorHandling errorWarning={this.state.errorWarning} />}
                {!this.state.errorWarning && !this.state.isLoading && 
                (<>
                  <button className="keep-button one" onClick={(event) => this.handleClickOne(event)} data-cy="keep-button-one">Keep</button>
                  <Dog className="dog one" id="dogOne" data-cy="dogOne" alt="dog one" dog={this.state.dogOne} handleLoveClick={this.handleLoveClick}/>
                  <button className="keep-button" data-cy="keep-button-two" onClick={(event) => this.handleClickTwo(event)}>Keep</button>
                  <Dog className="dog two" id="dogTwo" data-cy="dogTwo" alt="dog two" dog={this.state.dogTwo} handleLoveClick={this.handleLoveClick}/>
                </>)
                  }
              </div>
            </>
            )   
            }}
          />
        <Route 
          exact path='/past-dogs' 
          render={() => {
              return(
                <>
                  {!this.state.errorWarning && this.state.isLoading && <h2>Loading. One moment please...</h2>}
                  {!!this.state.errorWarning && !this.state.isLoading && <ErrorHandling errorWarning={this.state.errorWarning} />}
                  {!this.state.errorWarning && !this.state.isLoading &&      
                    (<article className="dog-container">
                      <PastDogs pastDogs={this.state.pastDogs} isOnlyLoved="false" handleLoveClick={this.handleLoveClick}/>
                    </article>)}
                  </>
            
              )
            }}
            / > 
        <Route 
          exact path='/loved-dogs' 
          render={() => {
              return(
                <>
                  {!this.state.errorWarning && this.state.isLoading && <h2>Loading. One moment please...</h2>}
                  {!!this.state.errorWarning && !this.state.isLoading && <ErrorHandling errorWarning={this.state.errorWarning} />}
                  {!this.state.errorWarning && !this.state.isLoading && 
                    (<article className="dog-container">
                      <LovedDogs pastDogs={this.state.pastDogs} dogOne={this.state.dogOne} dogTwo={this.state.dogTwo} handleLoveClick={this.handleLoveClick}/>
                    </article>)}
                  </>  
              )
            }}
            / > 
        <Route
          render={() => (
            <ErrorHandling errorWarning="Sorry that page does not exist" />
          )}
        />
      </Switch> 
    )
  }
}


export default Adopt;