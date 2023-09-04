import React from 'react'
import Child from './Child'

function Parent() {
    function disp(data, obj){
        alert("HELLO");

        console.log(` Email is ${data} and name is ${obj.name} and age is ${obj.age}`);
    }
  return (
    <>
    <h2>Parent Component</h2>

        <Child show={disp}/>
    </>
  )
}

export default Parent