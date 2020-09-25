import React from "react"
import "../components/ExerciseForm"
import ExerciseForm from "../components/ExerciseForm"
import Card from "../components/Card"
import ImgList from "../components/ImgList"

class ExerciseNew extends React.Component {

    /*
    paso el evento handleChange a esta pagina para que maneje a su hijo, para esto
    en el estado del componente le creo un objeto que se llama form para almacenar 
    todos los datos que se van ingresando.
    en el metodo uso ...this.state.form =>para que no me deje guardado lo ya escrito
    */
    state = {
        form: {
            title:"",
            description:"",
            rightColor:"",
            leftColor:"",
            img:""
        }
    }


    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <Card {...this.state.form} />
                        <div>
                            <ImgList />
                        </div>
                    </div>
                    <div className="col-sm">
                        <ExerciseForm
                            className="col-sm"
                            onChange={this.handleChange}
                            form={this.state.form}
                        />
                    </div>


                </div>

            </div>





        )

    }

}
export default ExerciseNew