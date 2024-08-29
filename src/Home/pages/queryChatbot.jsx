import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Chatbot from './chatbot'
import './_queryChatbot.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function QueryChatbot() {
  const tbutton = useSelector(state => state.isButtonActive);
  const isMenuOpen = useSelector(state => state.isMenuOpen);
  const navigate = useNavigate()
  const handleCloseChat = () => {
    navigate('/');
  }
  return (
    <div className='flex flex-col query-container'>
        <Navbar />
        <div className='flex justify-center items-center h-screen mt-10'>
          {/* <h1> you can add QueryChatbot  content here</h1> */}     
      { (tbutton || !isMenuOpen) && <button 
        className=" absolute top-24 md:top-36 right-2 p-2 bg-red-500 text-white rounded m-2 "
        onClick={handleCloseChat}
        >
        Close Chat
        </button>}
          <Chatbot />
        </div>
        <Footer />
    </div>
  )
}
