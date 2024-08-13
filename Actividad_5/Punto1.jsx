import pokemones from "../data/pokemon"

function Punto1(){
    combate(pokemones,"Blastoise","Squirtle")
    return(
        <>Punto 1</>
    )
}

function combate(array,pok1,pok2){
    let aPok1,aPok2,dPok1,dPok2,win=false;
    array.forEach(({name:{english,french},base:{HP,Attack}}) => {
        if(pok1==english){//SI encuentra el pok1 almacene en unas variables el ataque y la defensa
            aPok1=Attack
            dPok1=HP
        }//SI encuentra el pok1 almacene en unas variables el ataque y la defensa
        if(pok2==english){//SI encuentra el pok2 almacene en unas variables el ataque y la defensa
            aPok2=Attack;
            dPok2=HP;
        }//SI encuentra el pok2 almacene en unas variables el ataque y la defensa
    });

    console.log(pok1," A:",aPok1," HP:",dPok1)
    console.log(pok2," A:",aPok2," HP:",dPok2)

    while(win==false){//Mientras no haya ganador
        dPok1=dPok1-aPok2//Ataque de pok2
        if(dPok1<=0){//Si Gana pok2
            console.log(pok2,"a Ganado")
            break
        }//Si Gana pok2

        dPok2=dPok2-aPok1//Ataque de pok1
        if(dPok2<=0){//Si Gana pok2
            console.log(pok1,"a Ganado")
            break
        }//Si Gana pok2
    }//Mientras no haya ganador
}

export default Punto1