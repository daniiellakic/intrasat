import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    const closeMenu = () => {
      setNav(false);
    }
  
  return (
    <div className='bg-black flex justify-between items-center h-20 w-full sticky top-0 z-50 mx-auto px-5 sm:px-20 text-white'>
        <Link to='/home' className='cursor-pointer w-full text-3xl font-bold text-[#ffd300]'>INTRASAT.</Link>
        <ul className='hidden md:flex uppercase space-x-4'>

        <Link to='/home' smooth={true} duration={500}>
          <li className='p-4 cursor-pointer transition duration-150 border-b-4 border-transparent hover:border-[#ffd300]'>Hem</li>
        </Link>

        <Link to='/about' smooth={true} duration={500}>
          <li className='p-4 cursor-pointer transition duration-150 border-b-4 border-transparent hover:border-[#ffd300]'>Oss</li>
        </Link>

        <Link to='/service' smooth={true} duration={500}>
          <li className='p-4 cursor-pointer transition duration-150 border-b-4 border-transparent hover:border-[#ffd300]'>Tjänster</li>
        </Link>

        <Link to='/imageGrid' smooth={true} duration={500}>
          <li className='p-4 cursor-pointer transition duration-150 border-b-4 border-transparent hover:border-[#ffd300]'>Jobb</li>
        </Link>

        <Link to='/contactForm' smooth={true} duration={500}>
          <li className='p-4 cursor-pointer transition duration-150 border-b-4 border-transparent hover:border-[#ffd300]'>Kontakt</li>
        </Link>
        
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} />}
        </div>
        <div onClick={() => closeMenu()} className={nav ? 'fixed z-40 left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'} id='dropdown'>
           <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'} id='menu'>
           <h1 className='w-full text-3xl font-bold text-[#ffd300] m-4'>INTRASAT.</h1>
            <Link to='/home'>
              <li className='p-4 border-b border-gray-600'>Hem</li>   
            </Link>
            <Link to='/about'>
              <li className='p-4 border-b border-gray-600'>Om Oss</li>
            </Link>
            <Link to='/service'>
              <li className='p-4 border-b border-gray-600'>Tjänster</li>
            </Link>
            <Link to='/imageGrid'>
              <li className='p-4 border-b border-gray-600'>Jobb</li>
            </Link>
            <Link to='/contactForm'>
              <li className='p-4'>Kontakt</li>
            </Link>
           </ul>
        </div>
    </div>
  )
}

export default Navbar