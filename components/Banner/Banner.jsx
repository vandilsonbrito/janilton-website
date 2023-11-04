import Wave from '../../src/assets/imgs-design/wave.svg'

export default function Banner() {
  return (
    <div className='relative overflow-hidden'>
        <div className="w-full h-[680px] overflow-hidden relative">
            <div className={`w-full h-full ${window.innerWidth > 800 ? 'bg-Banner' : 'bg-BannerMobile'} bg-no-repeat bg-cover bg-right-bottom opacity-70 relative`}>
                <div className="w-full h-full bg-[#3248916b] opacity- absolute"></div>
            </div>
            
            <div className="w-[100%] h-full flex flex-col lg:flex-row justify-center z-50 absolute top-24 pl-[0%] lg:pl-[12%] gap-0">
                <div className="w-full h-fit flex flex-col items-center">
                    <div className="w-full mt-[5%] px-10 flex flex-col  lg:px-0 lg:block lg:flex-row lg:mt-[21%]">
                        <div className="w-full flex flex-col items-center -ml-6 sm:gap-3">
                            <h2 className="text-5xl sm:text-7xl lg:leading-[7.5rem] lg:text-[7rem] text-[#000]">Professor</h2>
                            <h2 className="text-[3.3rem] sm:text-7xl lg:leading-[7.5rem] lg:text-[8rem] text-[#000000] ml-20 lg:ml-32"><strong>Janilton</strong></h2>
                        </div>
                    </div>
                    <div className="w-[75%] sm:w-[60%] lg:w-[95%] text-center mt-2 lg:mt-0">
                        <h1 className="text-base lg:text-2xl bg-[#fff5f8] xl:ml-[15%] mt-2 p-1">Domine a arte de dar aulas com um especialista em aulas criativas.</h1>
                    </div>
                </div>
                <div className="w-[100%] h-full flex flex-col lg:flex-row items-center lg:px-[50px] xl:px-[140px]">
                    <div className={`w-[300px] h-[350px] mt-5 sm:mt-0 lg:w-[450px] lg:h-[570px] ${window.innerWidth > 800 ? 'bg-Picture-Profile' : 'bg-Picture-Profile-Mobile'} bg-Picture-Profile bg-no-repeat bg-contain lg:-mt-16`}></div>
                </div>
            </div>
        </div>
        <div className="w-[100%] h-[150px] absolute top-[85%] -left-[30%] z-[100] rotate-6 pointer-events-none">
            <img src={Wave} alt="" className='w-full h-full object-cover '/>
        </div>
        <div className="w-[30%] 2xl:w-[37%] h-[100px] absolute top-[95%] left-[72%] z-[100] pointer-events-none">
            <img src={Wave} alt="" className='w-full h-full object-cover scale-x-[-1] -rotate-12'/>
        </div>
    </div>
  )
}
