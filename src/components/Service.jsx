import React from 'react'
import Transport from '../assets/truck.png'
import Customer from '../assets/customer-service.png'
import Wall from '../assets/brick-wall.png'
import { Link } from 'react-router-dom'

const Service = () => {
  return (
    <div className='bg-white px-4 w-full py-[5rem]' id='service'>
        <h1 className='md:text-4xl sm:text-3xl text-2xl text-center uppercase p-2 m-2 font-bold underline decoration-[#ffd300] decoration-4'>Tjänster</h1>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 m-20">
            <div className="w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-[1.1] duration-300">
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Transport} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Transport</h2>
                <p className='py-2 border-b mx-8 text-center'>Vi har arbetat sida vid sida med stora aktörer inom transport där vi skräddarsyr tjänsten efter kundens behov för att uppnå bästa resultat.</p>
                <Link to='/transport' className='bg-[#ffd300] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black text-center'>
                    <button>Läs mer</button>
                </Link>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-[1.1] duration-300">
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Wall} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Bygg & Mark</h2>
                <p className='py-2 border-b mx-8 text-center'>Med fler års erfarenhet vi utför byggtjänster och ser varje projekt som en referens och gör alltid vårt yttersta för att förverkliga era idéer.</p>
                <Link to='/construction' className='bg-[#ffd300] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black text-center'>
                    <button>Läs mer</button>
                </Link>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-[1.1] duration-300">
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Customer} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Förvaltning</h2>
                <p className='py-2 border-b mx-8 text-center'>Sedan 2017 har vi förvaltat utemiljöer för företag, där våran personal med fler års erfarenhet av branschen ser till att hålla utemiljöerna vårdade.</p>
                <Link to='/managment' className='bg-[#ffd300] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black text-center'>
                    <button>Läs mer</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Service