// Pure Component example

import React, { Component, PureComponent } from 'react'

 class Parent extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : "sahil"
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name : "sahil"
            })
        }, 2000);
    }
  render() {
    console.log("--------- Parent Component ---------");
    return (
      <>
        <h2> Parent component </h2>
        <RegComp name={this.state.name}/>
        <PureComp name={this.state.name}/>
      </>
    )
  }
}



 class RegComp extends Component {
  render() {
    console.log("--------- Regular Component ---------");
    return (
      <>
        <h2> Regular component {this.props.name}</h2>
      </>
    )
  }
}



class PureComp extends PureComponent {
  render() {
    console.log("--------- Pure Component ---------");
    return (
        <>
        <h2> Pure component {this.props.name}</h2>
      </>
    )
  }
}

export default Parent



