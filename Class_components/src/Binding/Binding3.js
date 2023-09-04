//Binding in class constructor
import React, { Component } from 'react'

export class Binding3 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            msg: "Hello from initial state"
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler() {
        this.setState({
            msg: "Binding in class constructor"
        })
    }
    render() {
        return (
            <>
                <>
                    <h2>{this.state.msg}</h2>
                    <div>
                        <button onClick={this.clickHandler}>Click</button>
                    </div>
                </>
            </>
        )
    }
}

export default Binding3