import React from 'react'

function Click(){
    let a = "sahil";
    function clickHand(){
        a="pund";
        alert("The value of a is changed : "+a)
    }
    return(
        <>
        <button onClick={()=>alert("Hello and welcome")}>Click Me 1</button>
        &nbsp;
        <button onClick={clickHand}>Click Me 2</button>
        &nbsp;
        <button onClick={()=>clickHand()}>Click Me 3</button>
        &nbsp;
        {a}

        </>
    )
}
export default Click;