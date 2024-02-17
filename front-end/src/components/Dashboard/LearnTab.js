import React from 'react'
import {useNavigate} from 'react-router-dom'

function LearnTab() {
    const navigate = useNavigate()
    const handleGreenClick = () => {
        navigate('/simulator')
    }
  return (
    <div className='flex flex-col gap-6 my-3 items-center cursor-pointer'
    onClick={handleGreenClick}>
        <div className='learn-green flex justify-evenly items-center w-80 h-44 p-2'>   
            <div className='flex flex-col justify-start gap-3 h-full'>
                <h1>Challenge</h1>
                <p>Are you callproof?</p>
            </div>
            <img src='./images/learnimg.svg' className='w-48 h-36'/>
        </div>

        <div className='learn-pink flex justify-evenly items-center w-80 h-44 p-2'>   
            <div className='flex flex-col justify-start gap-3 h-full'>
                <h1>Coming Soon</h1>
                <p>Understanding Privacy</p>
            </div>
            <img src='./images/learnimg2.svg' className='h-36 w-44'/>
        </div>
    </div>
  )
}

export default LearnTab