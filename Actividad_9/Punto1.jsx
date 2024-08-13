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

const paises = ['Brazil','China','Japon','Argentina','France']
let info=[]

for (let i = 0; i < paises.length; i++) {
    let urlA=`http://api.weatherapi.com/v1/current.json?key=663804ab42bd4a75a75164212241006&q=${paises[i]}&aqi=no`
    let api= await getData(urlA);
    info.push(api);
}

console.log(info)
export default function Punto1() {
  return(<>
    <div className='cartas'>
        {info.map(item=>{
            return(<>
            <div className='carta-clima'>
                <div className='carta-clima-img'>
                    <img src={item.current.condition.icon} width='100' height='100' />
                    <h2>{item.current.temp_c}°C</h2>
                    <h3>{item.location.name}</h3>    
                </div>
                <div className='carta-clima-info'>
                    <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 22H36C40.4183 22 44 18.4183 44 14C44 9.58172 40.4183 6 36 6C31.5817 6 28 9.58172 28 14" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 29H4" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M27 29H21" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 29H38" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 35H4" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M27 35H21" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 35H38" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 42H4" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 42H32" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    <span>
                        <span>{item.current.humidity}%</span>  
                        <br />
                        Humidity
                    </span>

                    <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 17H10C7.79086 17 6 18.7909 6 21V21C6 23.2091 7.79086 25 10 25H12" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 33H19C16.7909 33 15 34.7909 15 37V37C15 39.2091 16.7909 41 19 41H22" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M27 7H24C21.7909 7 20 8.79086 20 11V11C20 13.2091 21.7909 15 24 15H27" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 15H40" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 25H42" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 33H34" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    <span>
                        <span>{item.current.wind_kph} km/h</span>
                        <br />
                        Wind speed
                    </span>                   
                    
                </div>
                
            </div>
            </>)
        })}
    </div>
  </>)
}
