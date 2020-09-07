/*
---------DE ESTA MANERA NOS MANEJABAMOS ANTES DE REACT--------
const element = document.createElement('h1')
element.innerText = 'Hola react'
const container = document.getElementById('root')
container.appendChild(element)
*/

import React  from 'react'
import ReactDOM from 'react-dom'
const user={
  firtsName: 'Martin',
  lastName: 'Lopez'
}

const nombre = 'martin'
function getName(user){
  if(user){
    return `${user.firtsName} ${user.lastName}`
  }
  else{
    return `extraño`
  }

  
}

const element =<h1>Hello {getName(user)}</h1>

const container =document.getElementById('root')

 ReactDOM.render(element, container)