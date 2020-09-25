import React from "react"
import CardInfo from '../components/CardInfo.json'
class ImgList extends React.Component {
    state = {
        data: CardInfo
    }


    
    render() {
        const { handleClick} = this.props
        return (
            <div className="container">
                {
                    this.state.data.map(data => {
                        return (
                            <h1>
                                <button value={data.img}
                                onClick={handleClick}>imagen {data.id}</button>
                            </h1>
                        )
                    })
                }
            </div>
        )
    }
}
export default ImgList