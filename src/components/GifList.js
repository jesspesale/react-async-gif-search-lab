import React from 'react'

class GifList extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ul>
               {this.props.gifs.map(gif => <li><img src={gif}/></li> )}
            </ul>
        )
    }
}

export default GifList