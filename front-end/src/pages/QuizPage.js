import React, { useEffect, useState } from 'react'
import QuizCard from '../components/QuizCard'
import { ThreeDots } from 'react-loading-icons'
import {useNavigate} from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { FaArrowLeft } from 'react-icons/fa';

// const quizzes = [{question: "Are you gay?", options: ["Yes", "No"], answer: "No"},{question: "Are you homophobic?", options: ["Yes", "No"], answer: "No"},{question: "Is your bitch gay?", options: ["Yes", "No", "She is a femboy"], answer: "No"}]

function QuizPage() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentQuestionAnswer, setCurrentQuestionAnswer] = useState("")
    const [userAnswers, setUserAnswers] = useState([])
    const [quizzes, setQuizzes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const nav = useNavigate()
    const [isClicked, setIsClicked] = useState(false)

    const nextQuestion = () => {
        setCurrentQuestionAnswer("")
        setIsClicked(false)
        setUserAnswers(prevAnswers=>[...prevAnswers, currentQuestionAnswer]);
      if (currentQuestionIndex + 1 < quizzes.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    };

    const sendUserAnswers = async (ans) => {
        console.log(ans)
        await fetch('http://127.0.0.1:5100/quiz', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ans),
        })
        .then(e=>nav('/dashboard'))
    }

    const handleFinishQuiz = () => {
        setUserAnswers(prevAnswers=>{
            sendUserAnswers([...prevAnswers, currentQuestionAnswer])
            return [...prevAnswers, currentQuestionAnswer]
        });
    }

    useEffect(() => {
        const fetchQuizzes = async () => {
            setIsLoading(true)
            const response = await fetch('http://127.0.0.1:5100/quiz');
            const data = await response.json();
            setQuizzes(data.data)
            setIsLoading(false)
        };
    
        fetchQuizzes();
      }, []);


    return (
      <div>
        <div className='flex flex-row justify-around items-center py-5 px-3 w-full'>
            <FaArrowLeft size={25} onClick={()=>nav(-1)}/>
            <div className='quizTab'>Preventing Fraudulent Calls</div>
            <IoHome size={25}/>
        </div>
        {isLoading || !quizzes.length ? <ThreeDots fill='gray' /> : <>
        <QuizCard
        quiz={quizzes[currentQuestionIndex]}
        val={currentQuestionAnswer}
        setVal={setCurrentQuestionAnswer}
        setIsClicked={setIsClicked}
        isClicked={isClicked}
        />
        <div className='flex w-full justify-end px-5'>
        {currentQuestionIndex < quizzes.length - 1 ? (
          <button className="mt-4 bg-green-300 border-2 border-green-400 p-1 rounded-full px-3" onClick={nextQuestion}>
            Next Question
          </button>
        ) : (
            <button className="mt-4 bg-green-300 border-2 border-green-400 p-1 rounded-full px-3" onClick={handleFinishQuiz}>
                Finish Quiz
            </button>
        )}  
        </div>
        </>}
        
      </div>
    );
}

export default QuizPage