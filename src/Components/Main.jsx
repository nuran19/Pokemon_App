import React from "react";
import Card from "./Card";


const Main=({pokemon,loading,infoPokemon,prevUrl,setPokeData,setUrl,nextUrl})=>{
    //console.log(loading)
    
    return(
        <>
            <div className="container">
                <div className="main-content">
                    <Card pokemon={pokemon} loading={loading} infoPokemon={infoPokemon} />
                    
                    <div className="btn-group">
                        {  prevUrl && <button onClick={()=>{
                            setPokeData([])
                           setUrl(prevUrl) 
                        }}>Previous</button>}

                        { nextUrl && <button onClick={()=>{
                            setPokeData([])
                            setUrl(nextUrl)
                        }}>Next</button>}

                    </div>
                </div>
                
            </div>
        </>
    )
}
export default Main;