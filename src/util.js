const checkForError = (response) => {
  console.log(response)
  if (!response.ok) {
    throw new Error('Something went wrong, Please try again. ')
    // console.log('not good')
    // return response.json()
  } else {
    return response.json()
  }
}



export default checkForError;