import React from 'react'
import circleImg from '../images/circles.png'
import './styles/Card.css'
class Card extends React.Component {


    state = {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMoJ5SbQWvDZmNQoqu24DGDZuyLdPd3_UflA&usqp=CAU'
    }


    //esta funciona no la vamos a usar por ahora porque cambiaria la imagen que requerimos a los 5 segundos
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                // image: this.props.img
            })
        }, 4000)

    }

    render() {

        const { title, description, rightColor, leftColor, img } = this.props
        return (
            <div className="card mx-auto Fitness-Card"
                style={{
                    backgroundImage: `url(${circleImg}), linear-gradient(to right, ${rightColor}, ${leftColor})`
                }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={this.props.img} className="float-right" />
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
...........................................................................................
Ahora utiliza ES7
*/