const checkForError = (response) => {
  console.log(response)
  if (!response.ok) {
    console.log('not good')
    throw new Error('Something went wrong, Please try again. ')
    // return response.json()
  } else {
    return response.json()
  }
}



export default checkForError;