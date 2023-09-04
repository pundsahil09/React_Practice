import React, { useState } from 'react'
import HOC from './HOC'

function Person1({money, increaseHandler}) {
    // const [money, setMoney] = useState("10");
    // const increaseHandler =()=>{
    //     setMoney( money * 2 )
    // }

  return (
    <>
        <h3> Person 1 </h3>

        <h4> SAHIL Auction is rs {money} </h4>&nbsp;<button onClick={increaseHandler}> Increase Money </button>

    </>
  )
}

export default HOC(Person1)