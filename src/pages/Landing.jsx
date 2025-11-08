import React from 'react'
import { useNavigate } from 'react-router'

const Landing = () => {
    const navigate = useNavigate()
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>

        <button className='px-4 py-2 rounded-lg text-white bg-linear-to-br from-blue-400 via-blue-500  to-blue-600'
        onClick={()=>{navigate(`/976844`)}}
        >

            see the card

        </button>
      
    </div>
  )
}

export default Landing
