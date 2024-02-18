import React from 'react'
import { FaPlay } from "react-icons/fa"
import {useNavigate} from "react-router-dom"
import ProgressBar from "@ramonak/react-progress-bar";

function LibraryCard({course}) {
    const navigate = useNavigate()
    const handleTabClick = () => {
        if (course.isAvailable) {
            navigate('/course')
        } else {
            return
        }
    }

  return (
    <div className={`${course.color} rounded-xl py-3`}>
        <div className='p-4 flex flex-col justify-evenly h-full gap-2'>
            <h3 className='font-bold mb-2'>{course.title}</h3>
            <p>{course.desc}</p>
            <ProgressBar completed={course.progress} maxCompleted={course.max}
            height='10px' customLabel='    ' bgColor='#ED7B9C' baseBgColor='white'/>
            <div className='flex justify-between'>
                <p className='font-bold'>{course.progress}/{course.max}</p>
                {<div onClick={handleTabClick}
                className='bg-white flex justify-center items-center p-1 rounded-full cursor-pointer pl-'>
                    <FaPlay size={15}/>
                </div>}
            </div>
        </div>
    </div>
  )
}

export default LibraryCard