import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CharacterGrid from './components/ui/characters/CharacterGrid';
import Search from './components/ui/Search';
import Header from './components/ui/Header'
import './App.css';

function App() {

  
  const [items,setItems]=useState([])
  const [isLoading, setIsLoading]=useState(true)
  const[query,setQuery]=useState('')

  useEffect(()=>{
      const fecthItems= async () =>{
          const result= await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
          
          setItems(result.data)
          setIsLoading(false)
      }

      fecthItems()
  }, [query])

  return (
   <div className="container">
     <Header></Header>
     <Search getQuery={(q)=> setQuery(q)}/>
     <CharacterGrid items={items} isLoading={isLoading}></CharacterGrid>
   </div>
  )
}

export default App;
