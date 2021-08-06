import React from 'react';
import './Dog.css';

const Dog = ({dog, handleLoveClick}) => {

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
    <article>
      <img src={dog.image} 
      className="dog" alt="past dog" />
      <button onClick={(event) => handleLoveClick(event, dog)}>Love</button>
    </article>
  )
}

export default Dog;