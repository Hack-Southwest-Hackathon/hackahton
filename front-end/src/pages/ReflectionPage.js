import React, { useState, useEffect } from 'react'

function ReflectionPage() {
    const [data, setData] = useState({})

    useEffect(()=>{
        fetch('http://127.0.0.1:5100/reflection')
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
    },[])
    console.log(data)
  return (
    <div>
        
    </div>
  )
}

export default ReflectionPage