import React from 'react'
import ExerciseList from '../components/ExerciseList'
import Wellcome from '../components/Wellcome'
import CardInfo from '../components/CardInfo.json'
import BtnNavegation from '../components/BtnNavegation'

class Exercises extends React.Component {

    state = {
        data: CardInfo
    }



    render() {
        return (
            <div>
                <Wellcome
                    userName="Martín"
                />
                <ExerciseList
                    exercise={this.state.data}

                />
                <BtnNavegation
                    url="/exercise/new"
                />
            </div>
        )
    }

}
export default Exercises
/*
Esta es la pagina de Exercises que carga los componentes de ejercicios por el momento tenemos:
Card==> componente de clase mas dinamico
Wellcome==> componente funcional
.................................................................................
ahora utilizamos ES7 entonces elimino constructor pero mantengo el state

*/