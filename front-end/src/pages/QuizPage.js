import React, { useState } from 'react'
import QuizCard from '../components/QuizCard'

const quizzes = [{question: "Are you gay?", options: ["Yes", "No"], answer: "No"},{question: "Are you homophobic?", options: ["Yes", "No"], answer: "No"},{question: "Is your bitch gay?", options: ["Yes", "No", "She is a femboy"], answer: "No"}]

function QuizPage() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentQuestionAnswer, setCurrentQuestionAnswer] = useState("")
    const [userAnswers, setUserAnswers] = useState([])

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
  
    return (
      <div>
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
        )}
      </div>
    );
}

export default QuizPage