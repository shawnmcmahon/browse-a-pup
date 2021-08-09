import React from 'react';

const ErrorHandling = ({ errorWarning }) => {
  
  return  (
    <>
      <h2>Error</h2>
      <p> {errorWarning  && `Something went wrong. Please try again.`} </p>
    </>
  )



}

export default ErrorHandling; 