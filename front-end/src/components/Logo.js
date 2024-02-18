import React from 'react'

function Logo() {
  return (
    <div className='w-full flex flex-row justify-center gap-4 items-center my-3'>
        <div className='w-10 h-10'>
            <img src='./images/logo.svg' />
        </div>
        <div className='text-xl font-semibold'>Frauducation</div>
    </div>
  )
}

export default Logo