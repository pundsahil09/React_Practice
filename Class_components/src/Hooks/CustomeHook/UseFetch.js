import React, { useEffect, useState } from 'react'

 function UseFetch(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async()=>{
        let call = await fetch(url);
        let resp = await call.json();
        console.log(resp);
        setData(resp)
      }
      fetchData();
    },[])
    return[data]
}


export default UseFetch