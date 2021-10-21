import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
    state = {
        gifs: [],
        query: ""
    }

    searchGifs = (search) => {
        this.setState({query: search})
        const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=VZGD8DHeiwi9gvNUTvADnSLf7M5uGjOo`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            this.setState({gifs: data.data.map(gif => gif.images.original.url)})
            console.log(this.state.gifs)
         })
    }

    render(){
        return(
            <div>
                <GifSearch searchGifs={this.searchGifs}/>
                <GifList gifs={this.state.gifs} />
            </div>
            )
        }
    }

export default GifListContainer