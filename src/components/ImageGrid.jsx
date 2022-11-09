import React from 'react'
import Walk from '../assets/walk.jpeg'
import Hall from '../assets/hall.jpeg'
import Job from '../assets/job.jpeg'
import Wc from '../assets/wc.jpeg'
import Three from '../assets/three.jpeg'

const ImageGrid = () => {
  return (
    <div className='bg-white max-w-[1240px] mx-auto px-4' id='imageGrid'>
        <h1 className=' text-[#000000] md:text-4xl sm:text-3xl text-2xl text-center uppercase p-2 py-8 font-bold underline decoration-[#ffd300] decoration-4'>Vårt Jobb</h1>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 med:gap-4'>
            <img className='w-full h-[540px] object-cover col-span-2 md:col-span-3 row-span-2' src={Walk} alt="/" />
            <img className='w-full h-[265px] object-cover' src={Hall} alt="/" />
            <img className='w-full h-[265px] object-cover' src={Job} alt="/" />
            <img className='w-full h-[265px] object-cover' src={Wc} alt="/" />
            <img className='w-full h-[265px] object-cover' src={Three} alt="/" />
        </div> 

    </div>
  )
}

export default ImageGrid