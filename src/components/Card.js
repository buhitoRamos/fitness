import React from 'react'
import circleImg from '../images/circles.png'
import './styles/Card.css'
class Card extends React.Component {
 render(){
     //creando esta constante evito usar this.props.img==quedando mas corto
     const {title, description, rightColour, leftColour, img } =this.props
        return (
            <div className="card mx-auto Fitness-Card"
            style={{
                backgroundImage: `url(${circleImg}), linear-gradient(to right, ${rightColour}, ${leftColour})`
            }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={img} className="float-right"/>
                        </div> 
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card