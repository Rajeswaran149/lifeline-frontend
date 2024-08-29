import React, { useEffect, useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import lifelineImage from './lifeline.jpg';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleButton, toggleMenu } from '../reduxActions/appAction';

const Navbar = () => {
  // const [ isMenuOpen , setIsMenuOpen ] = useState(false);
  const isMenuOpen = useSelector(state => state.isMenuOpen);
  const location = useLocation();
  const dispatch = useDispatch();
  const Navigate = useNavigate()

  const menuToggle = () => {
    dispatch(toggleMenu(true));
    dispatch(toggleButton(false))
}
  const closingWindow = () => {
    dispatch(toggleButton(false))  
    dispatch(toggleMenu(false));
  }
  const isHomePage = location.pathname === '/';
  const handleChatbotClick = () => {
    Navigate('/query-chatbot');
   }

  return (
    <nav className='bg-red-500 p-6 m-1 rounded-t-md'>
    <div className='flex space-x-2 items-center justify-between md:hidden'>
          <div className='text-white font-serif text-2xl'>
           <Link to='/'> 𝕃𝕚𝕗𝕖𝕝𝕚𝕟𝕖</Link>  
          </div>
          <div className='flex md:hidden space-x-2 items-center'>
            
            <IoMdMenu className='text-white size-7 hover:bg-red-600 rounded' onClick={menuToggle} />
          </div>
    </div>
    {isMenuOpen && (
      <div className=' fixed top-0 left-0  w-screen h-screen flex flex-col justify-between p-6 bg-white '>
                <div className='flex justify-end '>
                  <IoClose className='size-6 text-red-400 hover:bg-red-700 rounded' onClick={closingWindow}/>
                </div>
                <div className='  flex flex-col justify-start items-center h-screen w-screen '>
                <Link to='/emergency-alert' className=' bg-red-500 px-2 py-1 text-black font-semibold mb-4 hover:bg-red-800 hover:text-white  rounded-sm' onClick={()=>dispatch(toggleMenu(false))}>Emergency Alerts</Link>
                <Link to='/query-chatbot' className='bg-red-500 px-4 py-1 text-black font-semibold mb-4 hover:bg-red-800  hover:text-white rounded-sm ' onClick={()=>{dispatch(toggleButton(false));dispatch(toggleMenu(false))}}>Query Chatbot</Link>
                
                </div>
             
              
        </div>
        )}

    <div className= ' hidden bg-white p-4 rounded-sm md:flex justify-between items-center'>

  
      <div className='text-red-600 font-semibold text-2xl '>
        <Link to='/'> 𝕃𝕚𝕗𝕖𝕝𝕚𝕟𝕖</Link>
      </div>

      {/* Desktop View: Menu Items  */}
      <div className='hidden md:flex md:flex-row text-black md:gap-4 font-semibold'>
        <Link to='/emergency-alert' className='bg-red-500  px-2 py-1 rounded-sm hover:bg-red-800 hover:text-white'>Emergency Alerts</Link>
        <Link to='/query-chatbot' className=' bg-red-500 px-2 py-1 rounded-sm hover:bg-red-800 hover:text-white' onClick={()=>{dispatch(toggleButton(true))}}>Query Chatbot</Link>
      </div>
      
      {/* Desktop View:Icons and Login/Signup */}
      <div className=' md:flex md:space-x-2 md:justify-between items-center'>
        

      </div>
      
      
    </div>
    {isHomePage && (
      <>
        <div className='md:hidden'>
          {/* replace here to original image */}
    
          <img className='object-cover w-full h-50 p-4 rounded-lg' src={lifelineImage} alt="Lifeline image" />
        
        </div>
        <div className='md:hidden'>
          <h1 className='text-white text-3xl '>Re imagining the way you think introducing LIFELINE</h1>
          <h6 className='text-white mt-2'>Click on the Chatbot button below to ask your queries.</h6>
        </div>

        <div className='flex justify-center mt-6 md:hidden'>
          <button 
          className='bg-white px-10 py-1 rounded-sm font-medium hover:bg-red-500 hover:text-white' 
          onClick={handleChatbotClick}
          >Chatbot</button>
        </div>
      </>
    )} 

  </nav>
  );
};

export default Navbar;
