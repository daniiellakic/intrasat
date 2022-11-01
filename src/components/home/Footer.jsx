import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#000300] w-full mx-auto py-16 px-10 sm:px-20 grid lg:grid-cols-3 gap-20 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#ffd300]'>INTRASAT.</h1>
            <p className='w-full text-xl font-bold text-gray-500'>Trädgård & Landskap</p>
            <p className='w-full font-bold text-gray-500'>© Allt material på hemsidan är skyddat enligt upphovsrättslagen</p>
        </div>
        <div className='lg:col-span-2 flex mt-4 justify-end gap-20'>
            <div>
                <h1 className='w-full text-xl font-bold text-[#ffd300]'>Företagsinformation:</h1>
                <p className='w-full text-l font-bold text-gray-500'>Organisationsnr: 516410-8622</p>
                <p className='w-full text-l font-bold text-gray-500'>Godkänd för F-skatt & momsregistrerad</p>
            </div>
            <div>
                <h1 className='w-full text-xl font-bold text-[#ffd300]'>Kontakta oss:</h1>
                <p className='w-full text-l font-bold text-gray-500'>Adress: Siriusgatan 14, 195 55 Märsta</p>
                <p className='w-full text-l font-bold text-gray-500'>Tel: 076-550 78 13</p>
                <p className='w-full text-l font-bold text-gray-500'>E-post: info@intrasat.se</p>
            </div>
        </div>
 
        
        
    </div>
  )
}

export default Footer