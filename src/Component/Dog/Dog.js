import React from 'react';
import './Dog.css';

const Dog = ({dog, handleLoveClick}) => {
  console.log('dog', dog.image)

  // const handleLove = (event) => {
  //   // const dogOne = this.state.dogOne
  //   event.preventDefault()
  //   if (!props.dog.isLoved) {
  //     props.dog.isLoved = true;
  //     console.log('this.props.dog now', props.dog)
  //   } else {
  //     props.dog.isLoved = false;
  //     console.log('this.props.dog then', props.dog)
  //   }
  // }

  return (
    <article className="dog-box">
        <img src={dog.image} 
        className="dog" alt="past dog" />
        <button className="love-button" onClick={(event) => handleLoveClick(event, dog)}></button>
    </article>
  )
}

export default Dog;