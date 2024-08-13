import React from 'react'

const url = 'https://moviesdatabase.p.rapidapi.com/titles/search/title/Cars?exact=false&titleType=movie&#39'
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'baa0375f2amshab03c823bc2a951p1d42a2jsn4e49670372aa',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
};

const getDataMovie = async () => {
    try {
        const response =  await fetch(url, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }

}

const info = await getDataMovie();
//console.log(info.results)

export default function Punto1() {
  return(
    <>
        {info.results.map((item)=>{
            return (
                <>
                <div className='carta-movie'>
                    <h2>{item.originalTitleText.text}</h2>
                    {item.titleType.id}
                    {(item.primaryImage == null  )?// si no tiene imagen
                    (<img src='https://ih1.redbubble.net/image.4905811447.8675/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'/>):
                    (<img src={item.primaryImage.url} alt="" />)}
                </div>
                </>
            )
        })}
    </>
  )
}
