import axios from 'axios';
import { useState,useEffect } from 'react';
import './App.css';
import LocationInfo from './components/LocationInfo';
import ResidentList from './components/ResidentList';
import SearchBox from './components/SearchBox';
import rickMorty from './rickMorty.png'

function App() {

  const [location,setLocation]=useState({});
  const [page,setPage]=useState(1);

  useEffect(()=>{
      axios
      .get(`https://rickandmortyapi.com/api/location/${getNumber()}`)
      .then(res=>{
        setLocation(res.data);
        console.log("esto es location ",res.data);
      });  
  },[])


  return (
    <div className="App">
      
      <div className='nav'>

          <img src={rickMorty} alt="" id='image' />  
       
      </div>
    
      <SearchBox setLocation={setLocation} setPage={setPage}/>
      <LocationInfo location={location}/>
      <ResidentList location={location} setPage={setPage} page={page}/>
      
    </div>
  );
}

const getNumber = () => Math.floor(Math.random() * 126) + 1;

export default App;
