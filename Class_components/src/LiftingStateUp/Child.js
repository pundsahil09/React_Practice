import React from 'react'

function Child(props) {
    let data = "Demo@gmail.com"
    let obj = {
        name : "sahil",
        age : 23,
    }
  return (
    <>
        <h2>Child Component</h2>

        <button onClick={()=>props.show(data, obj)}> Send </button>
    </>
  )
}

export default Child