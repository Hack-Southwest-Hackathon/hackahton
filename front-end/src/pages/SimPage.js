import React, { useEffect, useState } from 'react'
import { ThreeDots } from 'react-loading-icons'

function SimPage() {
    const [text, setText] = useState('');
    const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      setIsLoading(true);
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data);
        })
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from reloading when pressing "Enter"
    // Do something with the text here (e.g., send it to the backend)
    console.log(text);
    setText('');
  };

  return (
    <div>
        <div>
            {isLoading ? (
                <ThreeDots fill='gray'/>
            ) : (
                <p></p>
            )}
        </div>
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