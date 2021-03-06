import React from "react"
import BtnNavegation from '../components/BtnNavegation'
import "../components/styles/Btn.css"

class ExerciseForm extends React.Component {



    //e.preventDefault es para que no refresque la pagina al hacer submit

    handleSubmit = e => {
        e.preventDefault()
        alert("the card was saved successfully")
    }
    render() {
        const { onChange, form } = this.props
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}
                className="form">
                    <div className="form-group">
                        <br></br>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="title"
                            name="title"
                            onChange={onChange}
                            value={form.title}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="description"
                            name="description"
                            onChange={onChange}
                            value={form.description}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="img"
                            name="img"
                            onChange={onChange}
                            value={form.img}
                        />
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="leftColor"
                                name="leftColor"
                                onChange={onChange}
                                value={form.leftColor}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="rightColor"
                                name="rightColor"
                                onChange={onChange}
                                value={form.rightColor}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn-primary btn"
                    >Submit</button>
                    <div className="btn">
                        <BtnNavegation
                            url="/exercises" />
                    </div>
                </form>
            </div>
        )
    }
}
export default ExerciseForm