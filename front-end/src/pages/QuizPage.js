import React, { useEffect, useState } from 'react'
import QuizCard from '../components/QuizCard'
import { ThreeDots } from 'react-loading-icons'

// const quizzes = [{question: "Are you gay?", options: ["Yes", "No"], answer: "No"},{question: "Are you homophobic?", options: ["Yes", "No"], answer: "No"},{question: "Is your bitch gay?", options: ["Yes", "No", "She is a femboy"], answer: "No"}]

function QuizPage() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentQuestionAnswer, setCurrentQuestionAnswer] = useState(0)
    const [userAnswers, setUserAnswers] = useState([])
    const [quizzes, setQuizzes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const nextQuestion = () => {
        setCurrentQuestionAnswer("")
        setUserAnswers(prevAnswers=>[...prevAnswers, currentQuestionAnswer]);
      if (currentQuestionIndex + 1 < quizzes.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    };

    const sendUserAnswers = (ans) => {
        console.log(ans)
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
        {isLoading || !quizzes.length ? <ThreeDots fill='gray' /> : <>
        <QuizCard
        quiz={quizzes[currentQuestionIndex]}
        val={currentQuestionAnswer}
        setVal={setCurrentQuestionAnswer}
        />
        {currentQuestionIndex < quizzes.length - 1 ? (
          <button className="mt-4" onClick={nextQuestion}>
            Next Question
          </button>
        ) : (
            <button className="mt-4" onClick={handleFinishQuiz}>
                Finish Quiz
            </button>
        )}</>}
        
      </div>
    );
}

export default QuizPage