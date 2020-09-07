/*
---------DE ESTA MANERA NOS MANEJABAMOS ANTES DE REACT--------
const element = document.createElement('h1')
element.innerText = 'Hola react'
const container = document.getElementById('root')
container.appendChild(element)
*/

import React  from 'react'
import ReactDOM from 'react-dom'
import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.css'




const container =document.getElementById('root')

 ReactDOM.render(<Card />, container)