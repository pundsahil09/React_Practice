import React from 'react'
import { useEffect, useState } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0);
    const [update, setUpdate] = useState(0);

    useEffect(()=>{
        console.log(" useEffect called.. ");
    })

    useEffect(()=>{
        console.log(" useEffect called once ");
    },[])

    useEffect(()=>{
        console.log(" useEffect called when count update ");
    },[count])

    useEffect(()=>{
        console.log(" useEffect called when update updated ");
    },[update])

  return (
    <>
        
            <h1> Count is : {count}</h1><br />
            <button onClick={()=>setCount( count + 1)}>Click Me</button>
            <h1> Update is : {update}</h1><br />
            <button onClick={()=>setUpdate( update + 1)}>Click Me</button>
        
    </>
  )
}

export default UseEffect