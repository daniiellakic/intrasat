import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='text-white bg-[#000300]' id='hero'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          <p className='text-[#ffd300] uppercase font-bold p-2'>Förhöj ditt första intryck</p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Trädgård & Landskap</h1>
          <p className='text-gray-500 p-2 md:text-3xl sm:text-2xl text-xl py-4 font-bold '>Vi erbjuder förvaltning av utemiljöer, bygg & mark entreprenad samt leveranser av gods för både längre samt kortare destinationer.</p>
          <Link to='/contactForm' smooth={true} duration={500} className='bg-[#ffd300] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
          <button>Kontaka Oss</button>
          </Link>
        </div>

    </div>
  )
}

export default Hero