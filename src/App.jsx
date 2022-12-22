
import './App.css';
import ButtonBar from './components/ButtonBar'
import Gallery from './components/Gallery'
import { useState, useEffect } from 'react'             //grabs conditional react syntax 


function App() {
  let [ArtId, setArtId] = useState(45734)               // state Variable to change with the Effect 
  let [data, setData] = useState({})                    // state variable to store data
  useEffect(()=> {
    document.title = 'welcome to ArtWorld'              // simple test for the effect
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${ArtId}`)    // makes a fetch request from a local api
    .then(response => response.json())                  // makes it json `{key},{value}`
    .then(resData => setData(resData))                  // this passes the response data to the state variable data
  }, [ArtId])                                           // added dependency to prevent it from looping on re render 

  const handleIterate = (e) =>{
    if (ArtId + Number(e.target.value) > 471581){
    setArtId(471581)
    } else if (ArtId + Number(e.target.value) < 1){
      setArtId(1)
    }
    setArtId(ArtId + Number(e.target.value))            //prevents it from recieving a string and breaking the expected syntax
  }

  return (                                              //anything passed into the custom <> counts as props and is passed to the files
    <div className="App"> 
      <Gallery primaryImage={data.primaryImage} title={data.title} artist={data.artistDisplayName} medium={data.medium}/>
      <ButtonBar handleIterate={handleIterate}/>
    </div>
  );
}

export default App;
