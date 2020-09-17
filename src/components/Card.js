import React from 'react'
import circleImg from '../images/circles.png'
import './styles/Card.css'
class Card extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMoJ5SbQWvDZmNQoqu24DGDZuyLdPd3_UflA&usqp=CAU'
        }

    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                image: this.props.img
            })
        }, 5000)

    }

    render() {        

        const { title, description, rightColour, leftColour, img } = this.props
        return (
            <div className="card mx-auto Fitness-Card"
                style={{
                    backgroundImage: `url(${circleImg}), linear-gradient(to right, ${rightColour}, ${leftColour})`
                }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={this.state.image} className="float-right" />
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
/*
creando esta constante "const {x,x}=this.props" evito usar this.props.img==quedando mas corto
las props siempre son heredadas del padre y son contantes
el estate son las variables, y siempre se definenn en el constructor
componenDidMount petenece al ciclo de vida de un componente en reac, y es un evento que se 
inicia cuando carga el componente
*/