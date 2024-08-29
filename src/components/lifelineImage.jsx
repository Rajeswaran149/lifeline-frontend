import React from 'react'
import lifelineImage from "./lifeline.jpg"

export default function LifelineImage({props}) {
  return (
    <img className=' object-cover w-screen h-screen p-4 rounded-lg' src={lifelineImage} alt="Lifeline image" />
    
  )
}
