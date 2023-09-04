import React, { useContext } from 'react'
import {AppData} from '../../App'
function CompC() {
    let {data, stdData} = useContext(AppData);
  return (
    <>
        <h2> Compoinent C </h2>

        <h5> Data is {data} </h5>
        <h5> student data is {stdData.name}, {stdData.age}, {stdData.salary} </h5>
    </>
  )
}

export default CompC