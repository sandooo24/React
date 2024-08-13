import pokemones from "../data/pokemon";

function Punto2(){
    tipos(pokemones)
    return(
        <>Punto 2</>
    )
}

function tipos(array){
    let T=["Grass","Poison","Fire","Flying","Water","Bug"],cant=0;
    T.forEach(element => {//FOreach tipos
        array.forEach(({type}) => {//Foreach Pokemones
            if(type[0]==element){//Si el tipo coincide
                cant++;//Suma la cantidad de tipos
            }//Si el tipo coincide
        });//Foreach Pokemones
        console.log(element,":",cant);
        cant=0
    });//FOreach tipos 
}

export default Punto2