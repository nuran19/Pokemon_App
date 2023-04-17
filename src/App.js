import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Main from './Components/Main';
import About from './Components/About';
import './Components/style.css';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
function App() {
  const [pokeData,setPokeData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl,setNextUrl]=useState();
    const [prevUrl,setPrevUrl]=useState();
    const [pokeDex,setPokeDex]=useState();

    const pokeFun=async()=>{
        setLoading(true)
        const res=await axios.get(url);
        
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemonData(res.data.results)
        setLoading(false)
    }
    

    const getPokemonData=async(res)=>{
       res.map(async(item)=>{
        
          const result=await axios.get(item.url)
         
          setPokeData(state=>{
            
              state=[...state,result.data]
              state.sort((a,b)=>a.id-b.id)
              return state;
          })
       })   
    }
     
    useEffect( ()=>{
        pokeFun();
    },[url])
  return (
    <>
    
    <Routes>
      <Route path="/"  element={<Main pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)} prevUrl={prevUrl} setPokeData={setPokeData} setUrl={setUrl} nextUrl={nextUrl}/>} />
      <Route path="/about" element={<About data={pokeDex}/>} />
      
    </Routes>
    
    </>
  );
}

export default App;
