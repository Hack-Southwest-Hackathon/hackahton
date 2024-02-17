import React from 'react'
import ProgressButton from './ProgressButton'

function IntroPage({handleNextPage, title, text, val, idx}) {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='home-title'>{title}</h1>
        <img src={`./images/homeimg${idx+1}.svg`}/>
        <div className='flex flex-row justify-between items-center'>
            <h2 className='home-text'>{text}</h2>
            <ProgressButton val={val} onClick={handleNextPage}/>
        </div>
    </div>
  )
}

export default IntroPage