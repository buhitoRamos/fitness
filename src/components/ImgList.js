import React from "react"
import CardInfo from '../components/CardInfo.json'
class ImgList extends React.Component {
    state = {
        data: CardInfo
    }
    
    render() {
        return (
            <div className="container">
                {
                    this.state.data.map(data => {
                        return (
                            
                            <h1>
                                <a href={data.img}>imagen {data.id}</a>
                            </h1>
                             
                        )
                    })
                }
            </div>

        )

    }

}
export default ImgList