// import '../CSS/UseState1.css'
import React, { useState } from 'react'

function UseState() {
    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count + 1)
    }

    const Decrement = () => {

        setCount(count - 1)
    }

    return (
        <>
            <div id='container'>
                <h2> Counter App </h2><br /><br />

                <div>
                    <h3> Count is : {count} </h3>
                </div><br /><br />
                <button onClick={Increment}>Increase</button>&nbsp;&nbsp;<button onClick={Decrement} disabled={count === 0}>Decrease</button>
            </div>
        </>
    )
}

export default UseState