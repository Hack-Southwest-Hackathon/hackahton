import React, { useEffect, useRef, useState } from 'react'
import { ThreeDots } from 'react-loading-icons'
import { IoSend } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import {useNavigate} from "react-router-dom"

function SimPage() {
    const [text, setText] = useState('');
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [conversation, setConversation] = useState([]);
    const bottomRef = useRef(null);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = () => {
            fetch('http://127.0.0.1:5100/calls')
                .then(response => response.json())
                .then(data => {
                    setConversation(prev => [...prev, data])
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
        bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the page from reloading when pressing "Enter"
        // Do something with the text here (e.g., send it to the backend)
        setConversation(prev => [...prev, { userinput: text }])
        postUserInput()
        setText('');
    };
    console.log(conversation[conversation.length-1])
    if (conversation.length) {
        console.log((conversation[conversation.length-1].hasOwnProperty("gptresponse")? conversation[conversation.length-1].outofattempts : false)==="true")
    }

    return (
        <div className='my-10 pb-20'>
            <div className='flex flex-row justify-between items-center px-4 pb-4 shadow-md mb-4'>
                <div className='flex flex-row items-center gap-5'>
                    <FaArrowLeft size={25} onClick={()=>navigate(-1)}/>
                    <img src='./logo512.png' className='w-10 h-10'/>
                    <div className='flex flex-col'>
                        <div className='bot-name'>Frauducation bot</div>
                        <div className='bot-status'>· Online</div> 
                    </div>
                </div>
                <IoHome size={35} onClick={()=>navigate('/dashboard')}/>
            </div>
            <div>
                {conversation.map((msg, i) => <div key={i}>{msg.gptresponse ?
                        // <div className='rounded-full px-3 shadow-2xl w-20 h-14'><img src='./images/robot.svg' className='w-14 h-14'/></div>
                        <div className='p-3 bg-[#EEEEEE] m-3 rounded-xl inline-block' style={{
                            borderTopLeftRadius: 0, float: "left",
                            clear: "both"
                        }}>
                            {msg.gptresponse}
                        </div> 
                    :
                        <div className='p-3 bg-[#3369FF] m-3 rounded-xl inline-block text-[#FFFFFF]' style={{
                            borderBottomRightRadius: 0, float: "right",
                            clear: "both"
                        }}>
                            {msg.userinput}
                        </div>
                    }</div>)}
            </div>
            <div className='w-full flex justify-center'>
                
            </div>
            <div ref={bottomRef}></div>
            <div className='rounded-full w-full ' style={{ position: "fixed", bottom: 0, left: 0, right: 0, padding: "20px" }}>
                
                { !conversation.length? <ThreeDots fill='gray' />
                : 
                (conversation[conversation.length-1].hasOwnProperty("gptresponse")? conversation[conversation.length-1].outofattempts : false)==="true"? 
                <div className='flex flex-col mx-10 items-center gap-2 w-full justify-center'>
                    <div className='border border-slate-300 p-2 bg-slate-200 rounded-full px-6'>
                        Is this a fraud?
                    </div>
                    <div className='flex flex-row justify-center w-full gap-4'>
                        <button className=' border-green-300 p-2 bg-green-200 border-2 rounded-full px-6'>Yes</button>
                        <button className=' border-red-300 p-2 bg-red-200 border-2 rounded-full px-6'>No</button>
                    </div>
                </div>
                    :<form className='w-full' onSubmit={handleSubmit} style={{ position: "relative", display: "inline-block" }}>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Write your message here..."
                        className='w-full rounded-full p-3 shadow-xl focus:outline-none'
                    />
                    <button className='mr-3 h-full flex items-center' type="submit" style={{ position: "absolute", right: 0, bottom: 0 }}>
                        <IoSend size={20} color='#3369FF'/>
                    </button>
                </form>}
            </div>
        </div>
    )
}

export default SimPage
