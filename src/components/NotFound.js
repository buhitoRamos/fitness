import React from 'react'
import BtnNavegation from '../components/BtnNavegation'
import "../components/styles/Btn.css"
import img from "../images/gym.jpg"


const NotFound = ()=> (
    
    <div>
        <div clasName="container">
            <br/>
            <div className="text-center h1">
            <h1
            className="badge badge-primary text-center"
            >NOT FOUND
            </h1>

            </div>            
            <img
            className="rounded mx-auto d-block"
            src={img}
            />
        </div>
     
        <div className="btn">
            <BtnNavegation
                url="/exercises"
            />
        </div>
    </div>
)


export default NotFound
/*
Utilizando ES7 para que el codigo sea mas legible
*/
