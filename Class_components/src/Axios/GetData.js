import axios from 'axios'
import React, { Component } from 'react'

export class GetData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            errMsg: ''
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((Response) => {
                console.log(Response.data);
                this.setState({
                    data: Response.data
                })
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    errMsg: " There is error while fetching data.. "
                })
            })
    }

    render() {
        const { data, errMsg } = this.state;
        return (
            <>
                {
                    data.length ? data.map((element) =>{
                        return(<h3 key={element.id}> {element.id} : {element.title} </h3>)
                    }):null
                }

            </>
        )
    }
}

export default GetData