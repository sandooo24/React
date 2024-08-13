import React from 'react'

const getData = async (url) => {
    try {
        const response =  await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

const paises = ['Brazil','China','Japan','Argentina','Malta']
let info=[]

for (let i = 0; i < paises.length; i++) {
    let urlA=`https://api.fedegoo.com.ar/getNationsByName/${paises[i]}`
    let api= await getData(urlA);
    info.push(api.countries[0]);
}
console.log(info)
export default function Punto1() {
    return(<>
    <div className='paises'>
        {info.map(item=>{
            return(<>
                <div className='pais'>
                    <img src={`https://flagsapi.com/${item.country_code2}/flat/64.png`} />
                    <br/><span >{item.country_code2}</span>
                    <br/>{item.name}
                </div>
            </>)
        })}
    </div>    
    </>)
}
