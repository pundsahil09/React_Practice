import React, { useState } from 'react'
import HOC from './HOC'

function Person2({money, increaseHandler}) {
    // const [money, setMoney] = useState("10");
    // const increaseHandler =()=>{
    //     setMoney( money * 2 )
    // }
    return (
        <>
            <h3> Person 2 </h3>

            <h4> ROSHAN Auction is rs {money} </h4>&nbsp;<button onClick={increaseHandler}> Increase Money </button>

        </>)
}

export default HOC(Person2) 