import React from 'react'
import './styles/Btn.css'
import btn from '../images/btn.png'

function BtnNavegation (props)  {
   

    return(
        
    <div>
        <a href="/exercises/new">
    <img src={btn} className="btn" />
    </a>

   </div>
    )
    
}

export default BtnNavegation
/*
Este componente es el boton de navegación 
*/
