import React from 'react';

const ErrorHandling = ({ errorMessage }) => {

  return  (
    <>
      <h2>Error</h2>
      <p> {errorMessage === "Failed to fetch" ? `Server Error Status Code 500: ${errorMessage}` : `Error 404: ${errorMessage}` } </p>
    </>
  )



}

export default ErrorHandling; 