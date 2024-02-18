import React from 'react'
import LibraryCard from './LibraryCard'

function LibraryTab() {
    const courses = [{
        title: "International Student Training",
        desc: "Protect Yourself",
        progress: 5,
        max: 5,
        color: "bg-[#FFE7EE]",
        isAvailable: true
    },{
        title: "Recognising Emails",
        desc: "Coming Soon",
        progress: 0,
        max: 18,
        color: "bg-[#BBD6FF]",
        isAvailable: false
    },{
        title: "Preventing Fraudulent Calls",
        desc: "Coming Soon",
        progress: 0,
        max: 24,
        color: "bg-[#BAE0DB]",
        isAvailable: false
    }]
  return (
    <div className='grid grid-cols-2 gap-4'>
        {courses.map(course=><LibraryCard key={course.title} course={course}/>)}
    </div>
  )
}

export default LibraryTab