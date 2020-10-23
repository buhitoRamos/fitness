import React from 'react'
import './styles/Btn.css'
import btn from '../images/btn.png'
import { Link } from 'react-router-dom'

const BtnNavegation = ({url}) => (
    <div>
        <Link to={url}>
            <img src={btn} />            
<<<<<<< HEAD
        </Link>
=======
        </Link.
>>>>>>> ed9f226377f4023acfa8ddd67a9cf688095b6c60

    </div>
)

export default BtnNavegation
/*
Este componente es el boton de navegación
............................................................................................
Lo que esta comentado es porque como se resolvió mas abajo es con una manera mas moderna de
escribir javascript ES7, React como tiene incorporado Babel hace que sea compatible
con todos los navegadores

Ejemplo:
 function BtnNavegation(props) {
     return (

         <div>
             <Link to={props.url}>
                 <img src={btn} className="btn" />
             </Link>

         </div>
     )

 }


*/
