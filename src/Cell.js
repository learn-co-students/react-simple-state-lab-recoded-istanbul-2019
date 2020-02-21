import React, { Component } from 'react'


export class Cell extends Component {
    constructor(props){
        super()
        this.state = {
            color: props.value
        }
    }

    clickedHandler = () => {
        const newColor = '#333'
        this.setState({
            color: newColor
        })
    }

    render() {
        return (
            <div onClick={this.clickedHandler} className='cell' style={{backgroundColor: this.state.color}} >
                
            </div>
        )
    }
}

export default Cell
