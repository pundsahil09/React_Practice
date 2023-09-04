//class property as arrow function
import React, { Component } from 'react'

export class Binding4 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            msg: "Hello from initial state"
        }
    }
    clickHandler = () => {
        this.setState({
            msg: "class property as arrow function"
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

export default Binding4