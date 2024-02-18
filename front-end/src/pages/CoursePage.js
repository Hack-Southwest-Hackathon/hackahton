import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import { FaArrowLeft } from 'react-icons/fa'
import { IoHome } from 'react-icons/io5'

function CoursePage() {
    const navigate = useNavigate()

  return (
    <>

    <div className='flex flex-col items-center h-full justify-evenly gap-10 px-14'>
        <div className='flex flex-row justify-around items-center py-5 px-3 w-full'>
                <FaArrowLeft size={25} onClick={()=>navigate(-1)}/>
                <div className='quizTab'>Frauducation</div>
                <IoHome size={25} onClick={()=>navigate('/dashboard')}/>
        </div>
        <div className='text-2xl font-bold text-center'>Preventing Fraudulent Calls</div>
        <div className='text-wrap'>This course will use text, quizzes and AI enabled simulations to teach you how to prevent fraud via calls.
For international students mainly. </div>
        <button onClick={()=>navigate('/quizzes')}
         className="mt-4 bg-green-300 border-2 border-green-400 p-1 rounded-full px-3 w-full" >Start now</button>
    </div>
    <Logo /></>
  )
}

export default CoursePage