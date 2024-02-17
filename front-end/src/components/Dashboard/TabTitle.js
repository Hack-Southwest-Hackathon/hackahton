import React from 'react'

function TabTitle({title, onClick, activeClass}) {
  return (
    <button onClick={onClick} className={`${activeClass} px-3 -py-2 h-8 flex justify-center items-center`}>{title}</button>
  )
}

export default TabTitle