import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);

    }
  return (
    <div className=' flex justify-between items-center h-24  max-w-[1240px] mx-auto px-6 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#ffd300]'>INTRASAT.</h1>
        <ul className='hidden md:flex uppercase space-x-4'>
            <li className='p-4 cursor-pointer transition duration-150 border-b-4 border-transparent hover:border-yellow-500'>Oss</li>
            <li className='p-4 cursor-pointer transition duration-150 border-b-4 border-transparent hover:border-yellow-500'>Tjänster</li> 
            <li className='p-4 cursor-pointer transition duration-150 border-b-4 border-transparent hover:border-yellow-500'>Jobb</li>
            <li className='p-4 cursor-pointer transition duration-150 border-b-4 border-transparent hover:border-yellow-500'>Kontakt</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} />}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
           <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
           <h1 className='w-full text-3xl font-bold text-[#ffd300] m-4'>INTRASAT.</h1>
            <li className='p-4 border-b border-gray-600'>Om Oss</li>
            <li className='p-4 border-b border-gray-600'>Tjänster</li>
            <li className='p-4 border-b border-gray-600'>Vårt Jobb</li>
            <li className='p-4'>Kontakt</li>
           </ul>
        </div>
    </div>
  )
}

export default Navbar