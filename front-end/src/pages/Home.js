import React, { useState, useEffect } from 'react'
import IntroPage from '../components/Home/IntroPage'
import { useNavigate } from "react-router-dom";

function Home() {
    const [pageIndex, setPageIndex] = useState(0)
    const txtArr = [{title: 'Protect Your Money', text: 'Learn how to protect yourself from fraud.', val: 30},{title: 'Upskill Yourself', text: 'Learn to keep private your digital self.', val: 60},{title: 'AI Awesome Learning Experience', text: 'Learn with AI powered quiz and simulations.', val: 100}]
    const navigate = useNavigate();

    const handleNextPage = () => {
        if(pageIndex < 2){
            setPageIndex(pageIndex + 1)
        } else {
            navigate('/dashboard');
        }
    }

  return (
    <div className='mt-10 mx-4'>
        <IntroPage handleNextPage={handleNextPage} text={txtArr[pageIndex].text} title={txtArr[pageIndex].title} val={txtArr[pageIndex].val} idx={pageIndex}/>
    </div>
  )
}

export default Home