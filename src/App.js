import React ,{useState,useEffect}from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';

function App() {
  const [characters,setCharacters ] = useState([])
  const [isLoading,setIsLoading ] = useState(true)
  const [query,setQuery] = useState('')


  useEffect(()=>{
    const fetchCharacters = async()=>{
      const result = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      setCharacters(result.data)
      setIsLoading(false)
    }
  fetchCharacters()  
  },[query])

  const getQuery =(q) =>{
      setQuery(q)
  }

  return (
    <div className="container">
    <Header/>
    <Search getQuery={getQuery}/>
    <CharacterGrid isLoading={isLoading} characters={characters}/>
    </div>
  );
}

export default App;
