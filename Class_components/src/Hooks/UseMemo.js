import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [count, setCount] = useState(0);
    const [update, setUpdate] = useState(0);

    // function Demo() {
    //     console.log(" Demo Executed ");
    //     return count
    // }

    const usememoEx = useMemo(function Demo() {
        console.log(" Memo comp Executed ");
        return count
    },[count])
    return (
        <>
            <h2> Count is {count}  || Update is {update} || {usememoEx}</h2>
            <button onClick={() => setCount(count + 1)}>Count</button>&nbsp;&nbsp;
            <button onClick={() => setUpdate(update + 10)}>Update</button>
        </>
    )
}

export default UseMemo