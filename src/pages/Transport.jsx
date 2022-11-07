import React from "react";
import Contact from "../components/Contact";
import Logo from '../assets/logga3.0.jpeg'

const Transport = () => {
  return (
    <div>
        <div>
            <img className=' bg-white w-[400px] font-medium my-6 mx-auto py-2' src={Logo} alt="/" />
            <p className="justify-center text-center font-bold text-4xl uppercase underline decoration-[#ffd300] decoration-4-">Transport</p>
        </div>
        <div className="max-w-[950px] justify-center mx-auto grid md:grid-cols-2 gap-8 m-20">
            <p className="w-full flex flex-col p-4 my-8 text-3xl">Vårt kompetens inom transport gör att du som kund får de billigaste och bästa priserna på din frakt, bud och transporter.</p>
            <p className="w-full flex flex-col p-4 my-8 text-xl ">Vi har arbetat sida vid sida med stora aktörer inom transport där vi skräddarsyr tjänsten efter kundens behov. Vi har sedan 2018 haft ett starkt samarbete med ledande aktörer när de gäller transportavdelningen, där vi genom vår flexibilitet samt goda kvalité byggt upp ett starkt förtroende. 
            </p>
        </div>
        <Contact/>
    </div>
  )
}

export default Transport