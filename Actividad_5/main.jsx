import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'
import { Saludo } from './fcomponent/Saludo.jsx'
import Pokemon from './fcomponent/Pokemon.jsx'
import Punto1 from './fcomponent/Punto1.jsx'//Llamo al archivo del púnto1
import Punto2 from './fcomponent/Punto2.jsx'
import Punto3 from './fcomponent/Punto3.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
      <Punto1></Punto1><br></br>
      <Punto2></Punto2><br></br>
      <Punto3></Punto3>
    </>
)
