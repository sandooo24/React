import React from 'react'
const url = "https://pokeapi.co/api/v2/pokemon/pikachu  ";

const getDataPokemon = async () => {
    try {
        const response =  await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

const info = await getDataPokemon();
//console.log(info)

export default function Punto2() {
    return(
        <>
            <div className='carta-movie'>
                <h2>{info.name}</h2>
                <img src={info.sprites.front_default} alt="" />
                <div>
                {info.stats.map(({base_stat,stat})=>{
                    return (<h4>{stat.name}: {base_stat}</h4>)
                })}
                </div>
            </div>
        </>
    )  
}
