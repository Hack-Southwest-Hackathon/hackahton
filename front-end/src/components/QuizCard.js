import React from 'react';

function QuizCard({ quiz, val, setVal }) {
  const handleInputChange = (i) => {
    setVal(i);
  };

  return (
    <div>
      <h1>{quiz.question}</h1>
      <div>
        {quiz.options.map((option, i) => (
          <div key={i}>
            <input
              type="radio"
              id={option}
              name="quiz"
              value={i}
              checked={val === i}
              onChange={()=>handleInputChange(i)}
              required={true}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuizCard;
