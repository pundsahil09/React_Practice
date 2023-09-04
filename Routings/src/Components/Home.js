import React from 'react'
import { useNavigate } from 'react-router-dom'



function Home() {
    let navigate = useNavigate()
    return (
        <>
        
        <h1> Welcome To Home Page. </h1>

        <div>
            <button type='submit' onClick={()=>navigate('Order-Summary')}> Order Now </button>
        </div>

        </>
    )
}

export default Home