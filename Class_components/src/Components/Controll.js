// controll component
import React, {useState} from 'react'

function Controll() {
    const [value, setValue] = useState("");
    function changeHandler(e){
        console.log(e);

        setValue(e.target.value)
    }
  return (
    <>
        {/* <input type="text" value={value} placeholder='Enter text here' onChange={(e)=>{setValue(e.target.value)}}/> */}
        <input type="text" value={value} placeholder='Enter text here' onChange={changeHandler}/>
        <h3> Entered Value is : {value} </h3>
    </>
  )
}

export default Controll