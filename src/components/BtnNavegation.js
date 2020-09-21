import React from 'react'
import './styles/Btn.css'

class BtnNavegation extends React.Component {
    constructor(props){
        super(props)
        this.state={
            img:'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/add.png?alt=media&token=fbe1d973-4b4f-42d8-b76e-2c4354f6ed9d'
        }
    }
render(){
    return(
        
    <div>
    <img src={this.state.img} className="btn" />
   </div>
    )
    
}
}
export default BtnNavegation
