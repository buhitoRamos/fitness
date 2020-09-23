import React from 'react'
import './styles/Btn.css'
import btn from '../images/btn.png'
import { Link } from 'react-router-dom'

function BtnNavegation(props) {


    return (

        <div>
            <Link to={props.url}>
                <img src={btn} className="btn" />
            </Link>

        </div>
    )

}

export default BtnNavegation
/*
Este componente es el boton de navegación
*/
