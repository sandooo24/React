import React,{ useState, useEffect} from "react";
import Carta from "./Carta";

const getData2 = async ()=>{    
    const url = `https://dragonball-api.com/api/characters?page=2&limit=10`
    const respose = await fetch(url);
    const data = await respose.json();
    return data 
}

const ini= await getData2()

export default function Punto1(){
    const [ btn, btnSet ] = useState(1);
    const [ info, infoSet ] = useState(ini);

    const btnNext=()=>{
        let numP=btn+1;
        if(numP>6){
            numP=1
        }
        btnSet(numP)
    }

    const btnBack=()=>{
        let numP=btn-1;
        if(numP<1){
            numP=6
        }
        btnSet(numP)
    }

    useEffect(()=>{
        console.log(btn)
        const getData = async ()=>{    
            const url = `https://dragonball-api.com/api/characters?page=${btn}&limit=10`
            const respose = await fetch(url);
            const data = await respose.json();
            infoSet(data)
        }

        getData()
    }, [btn])

    return(<>   
        <div className="box">
            {info.items.map(item => {
                return(<Carta data={item}></Carta>)
            })}
        </div>
        <div className="buttons">
            <button onClick={btnBack} > ⇚ </button>
            <button onClick={btnNext} > ⇛ </button>
        </div>
    </>)
}
