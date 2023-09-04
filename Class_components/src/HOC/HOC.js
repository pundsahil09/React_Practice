import React, { useState } from 'react'

function HOC(OriginalComp) {

    function NewComp() {
        const [money, setMoney] = useState(10);
        const increaseHandler = () => {
            setMoney(money * 2)
        }
        return <OriginalComp increaseHandler={increaseHandler} money={money}/>
    }
    return NewComp; 

}

export default HOC