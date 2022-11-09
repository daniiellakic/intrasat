import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div>
        <div className='bg-[#000300] w-full mt-16 z-40 grid lg:grid-cols-4 md:flex-row  md:space-x-3 text-center justify-center' id='contact'>
           <Link to='/about' className='p-2 z-10 text-gray-500 w-[200px] font-bold underline decoration-[#ffd300] decoration-4 mx-auto py-3'>
           <button>Om Oss</button>
           </Link>
           <Link to='/service' className='p-2 z-10 text-gray-500 w-[200px] font-bold underline decoration-[#ffd300] decoration-4 mx-auto py-3'>
           <button>Våra tjänster</button>
           </Link>
           <Link to='/imageGrid' className='p-2 z-10 text-gray-500 w-[200px] font-bold underline decoration-[#ffd300] decoration-4 mx-auto py-3'>
           <button>Vårt Jobb</button>
           </Link>
           <Link to='/contactForm' className='p-2 z-10 text-black-500 bg-[#ffd300] w-[150px] rounded-md font-medium my-2 mx-auto py-1'>
           <button>Kontakta Oss</button>
           </Link>     
        </div>
        <div className='bg-[#000300] w-full mx-auto py-16 px-10 sm:px-24 grid lg:grid-cols-3 gap-10 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#ffd300]'>INTRASAT.</h1>
                <p className='w-full text-xl font-bold text-gray-500'>Trädgård & Landskap</p>
                <p className='w-full font-bold text-gray-500'>© Allt material på hemsidan är skyddat enligt upphovsrättslagen</p>
            </div>
            <div className='w-full lg:col-span-2 mt-4 justify-end sm:flex sm:gap-20 gap-20'>
                <div>
                    <h1 className='w-full text-xl font-bold uppercase text-[#ffd300]'>Företagsinformation:</h1>
                    <p className='w-full text-l font-bold text-gray-500'>Adress: Siriusgatan 14, 195 55 Märsta</p>
                    <p className='w-full text-l font-bold text-gray-500'>Organisationsnr: 516410-8622</p>
                    <p className='w-full text-l font-bold text-gray-500'>Godkänd för F-skatt & momsregistrerad</p>
                </div>
                <br/>
                <div>
                    <h1 className='w-full text-xl font-bold uppercase text-[#ffd300]'>Telefon & E-post: </h1>
                    <p className='w-full text-l font-bold text-gray-500'>Tel: 076-550 78 13</p>
                    <p className='w-full text-l font-bold text-gray-500'>E-post: info@intrasat.se</p>
                </div>
            </div>        
        </div>  

    </div>
    
    )
}

export default Footer