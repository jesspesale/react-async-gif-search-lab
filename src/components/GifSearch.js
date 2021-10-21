import React from 'react'

class GifSearch extends React.Component {
    state = {
        value: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target)
        this.props.searchGifs(this.state.value)
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} value={this.state.value} />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default GifSearch