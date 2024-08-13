import React from 'react'
const urlP = "https://rickandmortyapi.com/api/character";
const urlD = "https://rickandmortyapi.com/api/location";

const getData = async (url) => {
    try {
        const response =  await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}


const personajes = await getData(urlP);
const dimensiones = await getData(urlD);

console.log(personajes.results)
console.log(dimensiones.results)

export default function Punto1() {
  return(<>
    <h1>Personajes de Rick y Morty</h1>
    <div className='personajes'>
    {personajes.results.map( (item) => {
        let idDime=item.origin.url.split("https://rickandmortyapi.com/api/location/")
        return(<>
            <div className='carta'>
                <h3>{item.name}</h3>
                <div className='carta-data'>
                    <img src={item.image} width='100'/>
                    <ul>
                        <li>Especie: {item.species}</li>
                        {(item.origin.name == 'unknown')?//SI su origen es indefinicdo
                        (<li>Origen: {item.origin.name}</li>)://Muetre solor el origen
                        (<>
                            <li>Origen: {item.origin.name}</li>
                            <li>{dimensiones.results[idDime[1]-1].dimension}</li>
                        </>)//Muetra el origeny la dimension
                        }
                    </ul>
                </div>
                Apariciones en los episodios<br/>
                <span>
                {item.episode.map((epi)=>{//Muetra los episodios
                    return(<>{epi.split("https://rickandmortyapi.com/api/episode/")}-</>)
                })}
                </span>
                <p/>
                Cargado en la base de datos:<br/>
                {`${item.created[0]}${item.created[1]}${item.created[2]}${item.created[3]}-${item.created[5]}${item.created[6]}-${item.created[8]}${item.created[9]}`}
            </div>
        </>)
    })}
    </div>
  </>)
}
