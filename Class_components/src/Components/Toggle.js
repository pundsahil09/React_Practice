import React, { useState } from 'react'

function Toggle() {
    let [data, setData] = useState("Hello and welcome");

    let [visibility, setVisibility] = useState(true);

    let [bText, setText] = useState(" HIDE ")

    function toggle(){
        setVisibility(!visibility);

        (!visibility)?setText(" HIDE "):setText(" SHOW ")
    }

  return (
    <>
    <div>
        {
            visibility?<h1>{data}</h1>:null
        }
        <button onClick={toggle}>{bText}</button>
    </div>
    </>
  )
}

export default Toggle