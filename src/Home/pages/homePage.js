import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import MainBody from '../../components/mainBody'


export default function HomePage() {
 return (
    <div className='flex flex-col '>
        <Navbar />
        <MainBody />
        <Footer />
        
    </div>
  )
}