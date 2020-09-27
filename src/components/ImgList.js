import React from "react"
class ImgList extends React.Component {
    
    render() {
        const { onClick, cardInfo} = this.props
        return (
            <div className="container">
                {
                    cardInfo.map(data => {
                        return ( 
                            <div className="btn-group btn-group-toggle">
                                <button value={data.img}
                                inputMode="radio"
                                className="btn btn-secondary btn-lg d-line"
                                onClick={onClick}>Imagen {data.id}</button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default ImgList