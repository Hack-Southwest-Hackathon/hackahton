import React, { useState, useEffect } from 'react'
import Logo from '../components/Logo';

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
    <>
    <div className='flex flex-col flex-around items-center mt-10'>
        <div>
            <h1 className='congrats'>Congrats!</h1>
            <img src='./images/congrats.svg' />
        </div>
        <div className='p-4 px-10 flex flex-col items-center gap-4'>
            <div>{data.response}</div>
            <h3>{data.quiz}</h3>
        </div>
    </div>
        <Logo /></>
  )
}

export default ReflectionPage