import React from 'react'

function PassFunc(props) {
    return (
        <>
            <h1> Hello This is example of passing function as props. </h1>

            <button onClick={props.pass}>CLICK ME</button>
        </>
    )
}

export default PassFunc