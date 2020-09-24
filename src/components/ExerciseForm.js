import React from "react"
import BtnNavegation from '../components/BtnNavegation'

class ExerciseForm extends React.Component{

    /*
    Se inicializa el estate como obeto vacío para que no de error
    se puede utilizar clases por por la ayuda de BABEL estamos trabajando con ES7
    */

    state = {}

    //e.preventDefault es para que no refresque la pagina al hacer submit

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }

    /*
    Este Evento handleChange(onChange) cada ves que se da un cambio
     (presiono una tecla) captura el evento con el nombre del input y valor
    y lo guarda en el state
    */

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return (
            <div className="container">
            <form 
                onSubmit={this.handleSubmit}
            >
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="title" 
                        name="title"
                        onChange={this.handleChange}
                        value={this.state.title}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="description" 
                        name="description"
                        onChange={this.handleChange}
                        value={this.state.description}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="img" 
                        name="img"
                        onChange={this.handleChange}
                        value={this.state.img}
                    />
                </div>
                <div className="form-row">
                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="leftColor" 
                            name="leftColor"
                            onChange={this.handleChange}
                            value={this.state.leftColor}
                        />
                    </div>
                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="rightColor" 
                            name="rightColor"
                            onChange={this.handleChange}
                            value={this.state.rightColor}
                        />    
                    </div>
                </div>
                
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Submit
                </button>
                <BtnNavegation
                url="/exercises" />
            </form>
        </div>
        )
    }
}
 export default ExerciseForm