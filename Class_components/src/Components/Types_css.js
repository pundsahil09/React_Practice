import React from 'react'
import style from '../CSS/types.module.css'
import '../CSS/External.css'

const Demo = {
    backgroundColor: 'red',
    color: 'white',
    border: '2px solid black',
    padding : '5px'
}

function Types_css() {
    return (
        <>
            <h1 style={Demo}> Apply css using Inline </h1>
            <h1 className='main'> Apply css using External </h1>
            <h1 className={style.primary}> Apply css using Module. </h1>
        </>
    )
}

export default Types_css