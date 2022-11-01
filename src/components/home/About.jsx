import React from 'react'
import Logo from './../../assets/logga3.0.jpeg'

const About = () => {
  return (
    <div className=' bg-white w-full py-16 px-6' id='about'>
        <img className=' bg-white w-[400px] font-medium my-6 mx-auto py-2' src={Logo} alt="/" />
        <div className='justify-center max-w-[800px] mx-auto'>
            <h1 className=' text-[#000000] md:text-4xl sm:text-3xl text-2xl text-center uppercase p-2 py-2 font-bold underline decoration-yellow-400 decoration-4'>Om Oss</h1>   
            <p className=' text-[#000000] p-2 md:text-xl sm:text-2xl text-xl text-center py-10 '>2017 startade Intrasat Ltd som har norra Stockholm som bas. Våra grundpelare är Kunskap, Kvalité och Kundservice.
                Målet är att leverera våra tjänster på ett säkert, miljövänligt samt kvalitativt sätt och ge våra kunder den ultimata kundresan.
                2020 ändrade vi bolagsform till AB och har interna avdelningar med fokus inom sitt område, transport, bygg & mark entreprenad samt förvaltning.
                Vårt styrka är att vi är flexibla och står alltid redo för nya uppdrag för kort eller långsykt.</p>

        </div>
      
    </div>
  )
}

export default About