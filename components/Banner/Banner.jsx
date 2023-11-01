import Wave from '../../src/assets/imgs-design/wave.svg'

export default function Banner() {
  return (
    <div className='relative overflow-hidden'>
        <div className="w-full h-[565px] overflow-hidden relative">
            <div className='w-full h-full bg-Banner bg-no-repeat bg-cover bg-right-bottom opacity-70 relative'>
                <div className="w-full h-full bg-[#3248916b] opacity- absolute"></div>
            </div>
            
            <div className="w-[100%] h-full flex justify-center items-center z-50 absolute top-9">
                <div className="w-[85%] h-full flex gap-48 items-center px-10 font-Montserrat">
                    <div className="w-[45%]">
                        <h2 className="text-[#000000] leading-[7.5rem] text-[7rem]">Professor <strong>Janilton</strong></h2>
                        <h1 className="text-2xl bg-white -ml-1 mt-2 px-2">Domine a arte de dar aulas com um especialista em aulas criativas.</h1>
                    </div>
                    <div className="w-[400px] h-[500px] font-Montserrat bg-Picture-profile bg-no-repeat bg-contain"></div>
                </div>
            </div>
        </div>
        <div className="w-[85%] h-[150px] absolute top-[82%] -left-[25%] z-[100] rotate-6">
            <img src={Wave} alt="" className='w-full h-full object-cover '/>
        </div>
        <div className="w-[30%] h-[100px] absolute top-[90%] left-[72%] z-[100]">
            <img src={Wave} alt="" className='w-full h-full object-cover scale-x-[-1] -rotate-12'/>
        </div>
    </div>
  )
}
