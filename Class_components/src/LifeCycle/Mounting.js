import React, { Component } from 'react'

export class Mounting extends Component {
    constructor(props) {
        super(props);
        console.log("This is constructor method");

        this.state = {
            name: "Setting state"
        }
    }

    // static getDerivedStateFromProps(state, props)
    // {
    //     return {name : props.name}
    // }

    componentDidMount() {
        console.log("This is componentDidMount method.");
        setTimeout(() => {
            this.setState({
                name:'Hello'
            })
        }, 2000);
    }
    render() {
        console.log("This is render method");
        return (
            <>
                <h1>Name is : {this.state.name}</h1>
            </>
        )
    }
}

export default Mounting