import React from 'react'
import Contact from '../components/Contact'
import Logo from '../assets/logga3.0.jpeg'

const Counstruction = () => {
  return (
    <div>
        <div>
            <img className=' bg-white w-[400px] font-medium my-6 mx-auto py-2' src={Logo} alt="/" />
            <p className="justify-center text-center font-bold text-4xl uppercase underline decoration-[#ffd300] decoration-4-">Bygg & Mark entrepenad</p>
        </div>
        <div className="max-w-[950px] justify-center mx-auto grid md:grid-cols-2 gap-8 m-20">
            <p className="w-full flex flex-col p-4 my-8 text-3xl">Vi har genom åren vuxit och utökat våran verksamhet till bygg & mark entreprenad där vi byggt upp ett team av personal samt konsulter som alla är specialiserade inom sitt område och på så sätt kompletterar varandra.</p>
                <p className="w-full flex flex-col p-4 my-8 text-xl">Detta gör att vi kan bredda våra tjänster och leverera på högsta kvalitet samt att kunden slipper handskas med flera olika entreprenörer som kan bli rörigt. Områden vi specialiserat oss inom är mark/schakt, snickeri/renovering men utför det mesta inom byggsektorn ink bygg städ samt rivningsjobb.
                    För att öka tryggheten för våra kunder har varje kund direktkontakt med projektledaren som ser till att kundens behov uppfylls samt att allting flyter på smidigt för att ge kunden den ultimata kundresan som är företagets mål. </p>
            </div>
     <Contact/>
    </div>
  )
}

export default Counstruction