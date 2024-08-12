import React from "react";
import './index.css'

export default function Carta(data){
    const info=data.data
    // console.log(info)
    return(<>
        <div className="carta-poke">
            <h2>{info.name}</h2>
            <div>
                <img src={info.image} />    
            </div>
            
            <ul>
                <li>
                    <span>ki</span>
                    {info.ki}
                </li>
                <li>
                    <span>maxki</span>
                    {info.maxKi}
                </li>
                <li>
                    <span>race</span>
                    {info.race}
                </li>
            </ul>
        </div>
    </>)
}