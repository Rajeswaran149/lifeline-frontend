import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { base_url } from '../../config';

export default function Chatbot() {
    // const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [toggle , setToggle] = useState(false);

  const handleSendMessage =  async () => {
    
        if (input.trim()) {
          const userMessage = input;     // no need
          // setMessages([...messages, input]);
          setMessages([...messages, { text: userMessage, user: 'user' }]);  // setMessages([...messages, input]);
        setInput(''); // need

              try {
                const response = await axios.post(`${base_url}/api/chat`, { message: userMessage });
               console.log(response)
                setMessages([...messages, { text: userMessage, user: 'user' }, { text: response.data, user: 'ai' }]);
            } catch (error) {
                console.error('Error sending message:', error);
            }

        }
    };

  return (
    <div className="">
        <div className=" bg-white border border-gray-300 shadow-lg w-screen h-screen flex flex-col">
          <div className="flex-1 p-2 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className="p-2 border-b border-gray-200">
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-2 border-t border-gray-200 flex ">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded"
              placeholder="Type a message..."
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 p-2 bg-blue-500 text-white rounded"
            >
              Send
            </button>
          </div>
        </div>

    </div>
  )
}
