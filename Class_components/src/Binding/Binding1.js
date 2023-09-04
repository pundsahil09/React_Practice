// Event binding in render method

import React, { Component } from 'react'

export class Binding1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         msg : "Hello from initial state"
      }
    }

    clickHandler(){
        this.setState({
            msg:"Event binding in render method"
        })
    }

  render() {
    return (
      <>
        <h2> {this.state.msg} </h2>

        <div>
            <button onClick={this.clickHandler.bind(this)}> Change </button>
        </div>
      </>
    )
  }
}

export default Binding1