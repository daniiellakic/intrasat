import React from 'react'
import Background from '../assets/background.jpg'

const Contact = () => {
  return (
    <div className='w-full mt-24'>
        <div className='w-full h-600px bg-gray-900/90 absolute'>
            <img className='w-full h-[20rem] object-cover mix-blend-overlay' src={Background} alt="" />
        </div>
        <div className='text-white mx-auto text-center flex flex-col justify-center'>
            <h1 className=' z-10  text-white tracking-wider text-xl font-bold p-8'>Har du frågor eller funderingar?</h1>
            <h1 className=' z-10 text-white tracking-wider text-3xl md:text-4xl sm:text-4xl  p-8 font-bold uppercase '>Tveka inte att kontakta oss!</h1>
            <button className='p-8 z-10 bg-[#ffd300] w-[300px] uppercase rounded-md font-medium my-6 mx-auto py-3 text-black'>Kontakta oss här</button>
        </div>
       
    </div>
  )
}

export default Contact