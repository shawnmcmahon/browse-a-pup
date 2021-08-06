import React, { Component } from 'react';
import PastDogs from '../PastDogs/PastDogs';
import LovedDogs from '../LovedDogs/LovedDogs';
import Dog from '../Dog/Dog';
import {BrowserRouter, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import './War.css';

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
      // .then(response => console.log(response))
      .then(response => response.json())
      .then(data => {
        this.setState({allDogs: data.message})
        console.log(data)
        this.createDogObjects();
        this.assignBreed();
        this.assignDogsOneAndTwo();
        // console.log(JSON.parse(data))
      })

    
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
          breed: '', 
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

  assignBreed = () => {
    const allDogs = this.state.allDogs; 
    // console.log('all dogs image', allDogs[0].image.split('/'))
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
    console.log('first dog', firstDog)
    console.log('second dog', secondDog)


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

    // this.setState({dogOne: this.state.allDogs[0], dogTwo: secondDog, pastDogs: [...this.state.pastDogs, firstDog]});

    this.setState({dogOne: this.state.allDogs[0], dogTwo: secondDog})
    if (!this.state.pastDogs.includes(firstDog)) {
      this.setState({pastDogs: [...this.state.pastDogs, firstDog]});
    }





    this.state.allDogs.splice(0, 1);


  }

  handleLoveClick = (event, dog) => {
    const allPastDogs = this.state.pastDogs;
      allPastDogs.forEach(currentDog => {
        // console.log('hi')
        if (currentDog === dog) {
          // console.log('hello')
          if (!currentDog.isLoved) {
            currentDog.isLoved = true
            // console.log('currentDogtrue', currentDog)
          } else if (currentDog.isLoved) {
            currentDog.isLoved = false;
            // console.log('currentDogfalse', currentDog)

          }
        }
      })
      // console.log('allPastDogs', allPastDogs)
      this.setState({pastDogs: allPastDogs})
    }

  handleLoveTwo = () => {
    const dogTwo = this.state.dogTwo
    if (!dogTwo.isLoved) {
      dogTwo.isLoved = true;
      this.setState({dogTwo: dogTwo})
    } else {
      dogTwo.isLoved = false;
      this.setState({dogTwo: dogTwo})
    }
  }

  // handleLoveOne = () => {
  //   const pastState = [...this.state.allDogs]
  //   if (!pastState[0].isLoved) {
  //     pastState[0].isLoved = true;
  //     this.setState({pastState})
  //   } else {
  //     pastState[0].isLoved = false;
  //     this.setState({pastState})
  //   }
  // }

  // handleLoveTwo = () => {
  //   const pastState = [...this.state.allDogs]
  //   if (!pastState[1].isLoved) {
  //     pastState[1].isLoved = true;
  //     this.setState({pastState})
  //   } else {
  //     pastState[1].isLoved = false;
  //     this.setState({pastState})
  //   }
  // }

  

  
  render() {
    return (
      <Switch>
        <Route 
          exact path ='/'
          render={() => {
            return (
              <div>
                <h4> Doggo 1</h4>
                <article className="dog-container">
                  <Dog className="dog one" id="dogOne" data-cy="dogOne" alt="dog one" dog={this.state.dogOne} handleLoveClick={this.handleLoveClick}/>
                  <button onClick={(event) => this.handleClickOne(event)}>Keep</button>
                  {/* <button onClick={(event) => this.handleLoveOne(event)}>Love</button> */}
                </article>
                <h4> Doggo 2</h4>
                <article className="dog-container">
                <Dog className="dog two" id="dogTwo" data-cy="dogTwo" alt="dog two" dog={this.state.dogTwo} handleLoveClick={this.handleLoveClick}/>
                  <button onClick={(event) => this.handleClickTwo(event)}>Keep</button>
                  {/* <button onClick={(event) => this.handleLoveTwo(event)}>Love</button> */}
                </article>
              </div>
            )   
            }}
          />
        <Route 
          exact path='/past-dogs' 
          render={() => {
              return(
                <article className="dog-container">
                  {/* {this.mapDogs()} */}
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
                  {/* {this.mapDogs()} */}
                  <LovedDogs pastDogs={this.state.pastDogs} dogOne={this.state.dogOne} dogTwo={this.state.dogTwo} handleLoveClick={this.handleLoveClick}/>
                </article>
              )
            }}
            / > 
        </Switch> 
    )
  }
}


export default War;