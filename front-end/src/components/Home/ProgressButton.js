import React from 'react'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaArrowRight } from "react-icons/fa";

function ProgressButton({val, onClick}) {
  return (
    <div className='w-20 h-20'>
        <CircularProgressbarWithChildren value={val}
            styles={buildStyles({
                strokeLinecap: 'round',
                pathTransitionDuration: 0.5,
                trailColor: 'transparent',
                backgroundColor: '#3e98c7',
              })}
        >
        <button className='bg-[#3EA1CC] text-white p-3 rounded-full'
        onClick={onClick}>
            <FaArrowRight size={10}/>
        </button>
        </CircularProgressbarWithChildren>
    </div>
  )
}

export default ProgressButton