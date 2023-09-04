import React, { Component, createRef } from 'react'

export class RefEx extends Component {
    constructor(props) {
        super(props)

        this.inputEx = createRef()
    }
     clickHandler = () => {
        console.log(this.inputEx.current.value);
        this.inputEx.current.style.color = 'red';
        this.inputEx.current.style.backgroundColor = "yellow";
    }
    render() {
        return (
            <>
                <h2> Ref component example </h2>

                <div>
                    <input type="text" ref={this.inputEx} placeholder='Enter Text Here' /><br />
                    <button onClick={this.clickHandler}>SUBMIT</button>
                </div>
            </>
        )
    }
}

export default RefEx
