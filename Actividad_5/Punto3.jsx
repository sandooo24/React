import pokemones from "../data/pokemon";

function Punto3(){
    carrera(pokemones,"Charmeleon","Squirtle","Ivysaur","Caterpie")
    return(
        <>Punto 3</>
    )
}

function carrera(array,p1,p2,p3,p4){
    let maS=0,n;
    array.forEach( ({name:{english},base:{Speed}}) => {//Foreach Pokemones
        if(p1==english || p2==english || p3==english || p4==english){
            console.log(english,Speed)
            if(maS<Speed){
                maS=Speed
                n=english
            }
        }
    });//Foreach Pokemones
    console.log("El mas rapido es",n,maS);
}

export default Punto3