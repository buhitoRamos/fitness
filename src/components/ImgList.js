import React from "react"
class ImgList extends React.Component {
    
    render() {
        const { onClick, cardInfo} = this.props
        return (
            <div className="container">
                {
                    cardInfo.map(data => {
                        return (
                            <h1>
                                <button value={data.img}
                                onClick={onClick}>imagen {data.id}</button>
                            </h1>
                        )
                    })
                }
            </div>
        )
    }
}
export default ImgList