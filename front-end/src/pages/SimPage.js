import React, { useState } from 'react'
import { ThreeDots } from 'react-loading-icons'

function SimPage() {
    const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from reloading when pressing "Enter"
    // Do something with the text here (e.g., send it to the backend)
    console.log(text);
    setText('');
  };

  return (
    <div>
        <ThreeDots fill='gray'/>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter your text here"
            />
            <button type="submit">Send</button>
        </form>
    </div>
  )
}

export default SimPage