// arrow function in render
import React, { Component } from 'react'

export class Binding2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         msg:"Hello from initial state"
      }
    }
    clickHandler(){
        this.setState({
            msg:"Arrow function in render method"
        })
    }
  render() {
    return (
      <>
    <h2>{this.state.msg}</h2>
    <div>
        <button onClick={()=>this.clickHandler()}>Click</button>
    </div>
      </>
    )
  }
}

export default Binding2 