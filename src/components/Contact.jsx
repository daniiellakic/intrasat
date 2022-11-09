import React from 'react'
import Background from '../assets/background.jpg'

const Contact = () => {
  return (
    <div className='w-full mt-8 p-0 my-28' id='contact'>
        <div className='w-full h-600px bg-gray-900/90 absolute'>
            <img className='w-full h-[23.5rem] md:h-[18.3rem] sm:h-[21rem] object-cover mix-blend-overlay' src={Background} alt="" />
        </div>
        <div className='text-white mx-auto text-center flex flex-col justify-center'>
            <h1 className=' z-10  text-white tracking-wider text-xl font-bold p-8'>Har du frågor eller funderingar?</h1>
            <h1 className=' z-10 text-white tracking-wider text-3xl md:text-4xl sm:text-4xl p-9 sm:p-11 md:p-6 font-bold uppercase '>Tveka inte att kontakta oss!</h1>
        </div>       
    </div>
  )
}

export default Contact