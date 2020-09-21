import React from 'react'
import Card from '../components/Card'

function ExerciseList(props){
    return(
        <div>
            {
                props.exercise.map( exercise => {
                    return (
                        <Card
                            title={exercise.title}
                            description={exercise.description}
                            rightColor={exercise.rightColor}
                            leftColor={exercise.leftColor}
                            img={exercise.img}
                        />
            
                    )
                })
            }
        </div>
    )
    

}
export default ExerciseList
/*
Este componente recibe las props que envia excercises, y devuelve un listado
de tarjetas con sus propiedades, estilos, etc.
Como recibe propiedades y devuelve card debemos importar Card
*/