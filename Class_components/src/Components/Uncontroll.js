import React, { useRef } from 'react'

function Uncontroll() {
    let input = useRef()
    const change = (e) => {
        e.preventDefault();
        console.log(" Value by Ref "+input.current.value);
        input.current.style.backgroundColor = 'red'

        let value = document.getElementById('input1').value;
        console.log("Value by JS is "+value);
    }
    return (
        <>
            <h2> Uncontroll component Example </h2>
            <form action="" onSubmit={change}>
                <input type="text" ref={input} placeholder='Enter Text Here' />&nbsp;&nbsp;
                <input type="text" id='input1' placeholder='Enter Text Here' /><br />
                <button>Submit</button>
            </form>
        </>
    )
}

export default Uncontroll