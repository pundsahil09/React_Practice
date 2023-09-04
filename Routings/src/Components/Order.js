import React from 'react'
import { useNavigate } from 'react-router-dom'

function Order() {
    const navigate = useNavigate();
  return (
    <>
        <h2>
            Order Placed Sucessful.
        </h2>
        <div>
        <button type='submit' onClick={()=>navigate(-1)}> Continue Shopping </button>
        </div>
    </>
  )
}

export default Order