import React from "react"
import Exercises from "../pages/Exercises"
import ExerciseNew from "../pages/ExerciseNew"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import NotFound from './NotFound'

function App(props) {

    return (
        <div>
            <BrowserRouter>
            <Switch>
            <Route path='/exercises' component={Exercises} />
            <Route path='/exercise/new' component={ExerciseNew} />
            <Route component={NotFound} />

            </Switch>
                
            </BrowserRouter>

        </div>

    )
}
export default App

/*
Este componente es el que permite la navegacion utilizando browseRoute
que no refresca la pagina
se importa BrowseRouter con sus hijos Route y switch.
1) se define la etiketa de BrowseRouter=> Componente padre
2) Se define etiketa switch => que servira para definir un componente 
que se ejecute si se ingresa un path o url inválida
3) se crea una etiketa Route por pagina el path "Direccion url que se mostrará en el nevegador"
4) se seleccionará la pagina que renderizará o componente notFound
5) se seleccionará la otra pagina que redireccionará junto con su path


*/