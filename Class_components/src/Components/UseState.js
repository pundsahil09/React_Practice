import React from 'react'
import { useState } from 'react'

function UseState() {
    let [data, setdata] = useState("Hello and welcome");

    function update(){
        setdata("The state got updated.")
    }
  return (
    <>
        <h3> The state is : {data} </h3>
        <div>
            <button onClick={update}>UPDATE</button>
        </div>
    </>
  )
}

export default UseState