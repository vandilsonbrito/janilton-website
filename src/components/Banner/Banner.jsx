import Wave from '../../assets/imgs-design/wave.svg'

export default function Banner() {
  return (
    <div className='relative overflow-hidden'>
        <div className="w-full h-[700px] md:h-[680px] overflow-hidden relative">
            <div className={`w-full h-full ${window.innerWidth > 800 ? 'bg-Banner' : 'bg-BannerMobile'}  bg-no-repeat bg-cover bg-right-bottom opacity-70 relative`}>
                
                <div className="w-full h-full bg-[#8ba0e6a2] opacity- absolute"></div>
            </div>
            
            <div className="w-[100%] h-full flex flex-col lg:flex-row justify-center z-50 absolute top-24 pl-[0%] xl:pl-[12%] gap-0">
                <div className="w-full h-fit flex flex-col items-center justify-center">
                    <div className="w-[90%] mt-[2%]  px-10 flex flex-col lg:px-0 lg:block lg:flex-row lg:mt-[10%] lg:ml-3 xl:ml-0 2xl:mt-[5%]">
                        <div className="w-full flex flex-col justify-center items-center sm:gap-2 lg:gap-0 xl:gap-3 text-black">
                            
                            <h2 className="text-5xl mt-2 sm:text-7xl lg:leading-[7.5rem] lg:text-[5rem] xl:text-[6rem]">Professor</h2>
                        
                            <h2 className="text-[3.3rem] sm:text-7xl lg:leading-[7.5rem] lg:text-[5.5rem] xl:text-[7rem] font-bold">Janilton</h2>
                        
                            <h2 className="text-[3.3rem] -mt-3 sm:text-7xl lg:leading-[7.5rem] lg:text-[5.5rem] xl:text-[7rem] font-bold">Almeida</h2>
                           
                        </div>
                        <div className="w-full text-center mt-2 lg:mt-0">
                        <h1 className="text-[0.9rem] lg:text-xl bg-[#fff5f8] p-1">Domine a arte de dar aulas com um especialista em aprendizagem criativa, inovação e iniciação cinetífica na escola.</h1>
                    </div>
                    </div>
                    
                </div>
                <div className="w-[100%] h-full flex flex-col lg:flex-row items-center lg:px-[50px] xl:px-[140px]">
                    <div className={`w-[300px] h-[350px]  lg:w-[450px] lg:h-[570px] ${window.innerWidth > 800 ? 'bg-Picture-Profile' : 'bg-Picture-Profile-Mobile'} bg-Picture-Profile bg-no-repeat bg-contain -mt-5 lg:-mt-16`}></div>
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
