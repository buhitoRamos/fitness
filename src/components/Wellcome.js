import React from 'react'
import './styles/Wellcome.css'

const Wellcome = ({ userName }) => (
  
  <div className="container">
    <div className="Fitness-User-Info">
      <h1>Hello, {userName}</h1>
      <p>Let´s to workout to get some gains!</p>
    </div>
  </div>
)

export default Wellcome

/*
Este es un componente funcional, son mas faciles de escribir per
no se puede  trabajar con STATE ni con CICLO DE VIDA
...................................................................
Actualizado a ES7
*/