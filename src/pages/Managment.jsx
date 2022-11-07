import React from 'react'
import Contact from '../components/Contact'
import Logo from '../assets/logga3.0.jpeg'

const Managment = () => {
  return (
    <div>
        <div>
            <img className=' bg-white w-[400px] font-medium my-6 mx-auto py-2' src={Logo} alt="/" />
            <p className="justify-center text-center font-bold text-4xl uppercase underline decoration-[#ffd300] decoration-4-">Förvaltning</p>
        </div>
        <div className="max-w-[950px] justify-center mx-auto grid md:grid-cols-2 gap-8 m-20">
            <p className="w-full flex flex-col p-4 my-8 text-3xl ">Snygga till utemiljön eller trädgården! Vi erbjuder en helhetslösning till dig som kund, från planering och anläggning till skötsel.</p>
                <p className="w-full flex flex-col p-4 my-8 text-xl">Sedan 2017 har vi förvaltat vi utemiljöer för företag, där våran personal som har många års erfarenhet av branschen och ser till att hålla utemiljöerna representativa och vårdade. Tillsammans ser vi till att skapa en inspirerande utemiljö som människor vill vistas i.</p>
            </div>
    <Contact/>
    </div>
  )
}

export default Managment