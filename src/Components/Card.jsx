import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';




const Card = ({ pokemon, loading,infoPokemon}) => {
    const [color,setColor]=useState({});

    const pokeColor= async(pokeType) => {
       const res1 = await axios.get('https://pokeapi.co/api/v2/pokemon-color/1')
      const arr1=res1.data.pokemon_species.map(obj=>obj.name) //black
      
      const res2 = await axios.get('https://pokeapi.co/api/v2/pokemon-color/2')
      const arr2= res2.data.pokemon_species.map(obj=>obj.name)//blue
       const res3 = await axios.get('https://pokeapi.co/api/v2/pokemon-color/3')
      
       const arr3= res3.data.pokemon_species.map(obj=>obj.name)//brown
     const res4 = await axios.get('https://pokeapi.co/api/v2/pokemon-color/4')
      
       const arr4= res4.data.pokemon_species.map(obj=>obj.name)//gray
       const res5 = await axios.get('https://pokeapi.co/api/v2/pokemon-color/5')
      
       const arr5= res5.data.pokemon_species.map(obj=>obj.name)//green
       const res6 = await axios.get('https://pokeapi.co/api/v2/pokemon-color/6')
      
       const arr6= res6.data.pokemon_species.map(obj=>obj.name)//pink
       const res7 = await axios.get('https://pokeapi.co/api/v2/pokemon-color/7')
      
       const arr7= res7.data.pokemon_species.map(obj=>obj.name)//purple

       setColor({'#222':arr1,'#89CFF0':arr2,'#E1C16E':arr3,gray:arr4,'#AFE1AF':arr5,pink:arr6,'#b284be':arr7})

    }
     
 
   
    useEffect(()=>pokeColor(),[]);
    
    const cardBacgroundColor=(pokeName)=>{
        for(let key in color){
            if(color[key].includes(pokeName)){
                return key
            }
        }
        return "white"
    }

    
    

    
    return (
        <>
        {
            loading ? <h1>Loading...</h1> :
                pokemon.map((item) => {
                    
                    return (
                        <> <Link to="/about">
                           
                            <div className="card" style={{backgroundColor:`${cardBacgroundColor(item.name)}`,}}  key={item.id} onClick={()=>infoPokemon(item)}>
                                <h2 style={{color:`${cardBacgroundColor(item.name)}`==='#222' ? '#fff' : '#222'}}>{item.id}</h2>
                                <img src={item.sprites.front_default} alt="" />
                                <h2 style={{color:`${cardBacgroundColor(item.name)}`==='#222' ? '#fff' : '#222'}} className="pokeName">{item.name}</h2>
                            </div>
                            </Link>
                        </>
                    )
                })
        }

        </>
    )
}
export default Card;