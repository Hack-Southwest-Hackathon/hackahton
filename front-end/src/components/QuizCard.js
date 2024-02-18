import React, { useState } from 'react';

function QuizCard({ quiz, val, setVal, setIsClicked, isClicked }) {
  const handleInputChange = (i) => {
    setVal(i);
    setIsClicked(true)
  };

  return (
    <div className='px-3'>
      <h1 className='mb-6 px-2'>{quiz.question}</h1>
      <div>
        {quiz.options.map((option, i) => (
          <div key={i}>
            <div onClick={()=>handleInputChange(i)}
            className={`cursor-pointer ${!isClicked?"quiz-option": val==i?'option-clicked':"quiz-option"}`}>{option}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuizCard;
