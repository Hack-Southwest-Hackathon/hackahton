import React from 'react';

function QuizCard({ quiz, val, setVal }) {
  const handleInputChange = (event) => {
    setVal(event.target.value);
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
              value={option}
              checked={val === option}
              onChange={handleInputChange}
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
