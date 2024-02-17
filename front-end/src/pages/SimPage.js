import React, { useEffect, useState } from 'react'
import { ThreeDots } from 'react-loading-icons'

function SimPage() {
    const [text, setText] = useState('');
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [conversation, setConversation] = useState([])

  useEffect(() => {
    const fetchData = () => {
      fetch('http://127.0.0.1:5100/calls')
        .then(response => response.json())
        .then(data => {
            setConversation(prev=>[...prev, data])
            setIsLoading(false);
            setData(data);
        })
    };

    fetchData();
  }, []);

  const postUserInput = async () => {
    setIsLoading(true);
      const response = await fetch('http://127.0.0.1:5100/calls', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userinput: text }),
      });
      const data = await response.json();
      console.log(data)
      setConversation(prevConversation => [...prevConversation, data]);
      setIsLoading(false);
      setData(data);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from reloading when pressing "Enter"
    // Do something with the text here (e.g., send it to the backend)
    setConversation(prev=>[...prev, {userinput: text}])
    postUserInput()
    setText('');
  };
  console.log(conversation)

  return (
    <div>
        <div>
            {conversation.map((msg,i)=><div key={i}>{msg.gptresponse ? msg.gptresponse : msg.userinput}</div>)}
        </div>
        <div>
            {isLoading && (
                <ThreeDots fill='gray'/>
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