/*
---------DE ESTA MANERA NOS MANEJABAMOS ANTES DE REACT--------
const element = document.createElement('h1')
element.innerText = 'Hola react'
const container = document.getElementById('root')
container.appendChild(element)
*/

import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App'


const container = document.getElementById('root')

ReactDOM.render(
    <App />, container)

/*
Esta es la primer pagina que va a cargar todas las paginas, de aca carga la pagina Exersices que
está dentro de pages
*/