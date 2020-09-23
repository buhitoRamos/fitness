import React from 'react'
import BtnNavegation from '../components/BtnNavegation'

function NotFound(props){

    return(
        <div>
            <h1>
                NOT FOUND
            </h1>
            <div>
            <BtnNavegation
                url="/exercises"
                />
            </div>
        </div>
    )
}
export default NotFound
