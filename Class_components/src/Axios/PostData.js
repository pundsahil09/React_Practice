import axios from 'axios'
import React, { Component } from 'react'

export class PostData extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    sendData = (e) => {
        e.preventDefault();

        console.log(this.state);

        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response=>{
            console.log(" Response Submitted Sucessfully ");
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    render() {
        return (
            <>
                <h1> Post Form  </h1>
                <form onSubmit={this.sendData}>
                    <input type="text" name='userId' value={this.state.userId} onChange={this.changeHandler} placeholder='Enter userId' /><br /><br />
                    <input type="text" name='title' value={this.state.title} onChange={this.changeHandler} placeholder='Enter title' /><br /><br />
                    {/* <input type="text" name='body' value={this.state.body} placeholder='Enter body'/><br /><br /> */}
                    <textarea name="body" value={this.state.body} cols="50" rows="7" onChange={this.changeHandler} placeholder='Enter Body Text Here'>
                    </textarea><br /><br />
                    <button type='submit'> Send Data </button>
                </form>

            </>
        )
    }
}

export default PostData