import React from 'react'
import Card from '../components/Card'
import Wellcome from '../components/Wellcome'

class Exercises extends React.Component {

    render() {
        return (
            <div>
                <Wellcome
                    userName="Martín"
                />
                <Card
                    title="Technique Guides"
                    description="Learn amazing street workout and calisthenics"
                    rightColour="#A74CF2"
                    leftColour="617BFB"
                    img="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06"
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
*/