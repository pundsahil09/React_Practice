import React from 'react'
import UseFetch from './UseFetch'

function FetchDemo() {
    const [data] = UseFetch("https://jsonplaceholder.typicode.com/posts")
    return (
        <>
            
            {
                data.map((ele, i) => {
                    return (<h2 key={i}>{ele.title}</h2>)
                })
            }
            

        </>
    )
}

export default FetchDemo