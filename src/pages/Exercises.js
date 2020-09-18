import React from 'react'
import Card from '../components/Card'
import Wellcome from '../components/Wellcome'
import CardJs from './CardJs.json'

class Exercises extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: CardJs
        }
    }

    render() {
        return (
            <div>
                <Wellcome
                    userName="Martín"
                />
                {
                    this.state.data.map((exercice) => {
                        return (
                            <Card
                                title={exercice.title}
                                description={exercice.description}
                                rightColour={exercice.rigthColour}
                                leftColour={exercice.leftColour}
                                img={exercice.img}
                            />

                        )
                    })
                }
            </div>
        )
    }

}
export default Exercises
/*
Esta es la pagina de Exercises que carga los componentes de ejercicios por el momento tenemos:
Card==> componente de clase mas dinamico
Wellcome==> componente funcional
*/