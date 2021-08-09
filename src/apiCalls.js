import checkForError from "./util";

const fetchDogImages = () => {
  return fetch('https://dog.ceo/api/breeds/image/random/50')
    .then(checkForError)
}

export default fetchDogImages;


