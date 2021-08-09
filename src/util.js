const checkForError = (response) => {
  if (!response.ok) {
    throw new Error('Something went wrong, Please try again. ')
  } else {
    return response.json()
  }
}



export default checkForError;