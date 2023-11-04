import { GrYoutube } from 'react-icons/gr'; 

export default function CanalSection() {
  return (
    <div className="w-full h-full bg-main-blue text-white font-Montserrat px-8 py-14 lg:py-20 flex flex-col items-center" >
      <h3 className="uppercase font-bold text-lg md:text-3xl" id='/Canal'>Meu canal do YouTube</h3>
      <iframe src="https://www.youtube.com/watch?v=UgIwjLg4ONk" title='Canal do YouTube do Professor Janilton Almeida' className="w-[350px] h-[220px] sm:w-[480px] sm:h-[320px] md:w-[520px] md:h-[360px] lg:w-[650px] lg:h-[380px]  mt-8 md:mt-12 border-[8px] border-white"></iframe>
      <a href="#" >
        <button className="mt-10 w-fit flex items-center gap-3 h-[50px] bg-blue-600 text-white p-6 rounded-3xl font-semibold uppercase text-[1.05rem] border-[2px] border-blue-600 hover:border-white duration-200 ease-in-out active:scale-[0.98]">Conheça meu canal <GrYoutube className='mb-1 text-lg'/></button>
      </a>
    </div>
  )
}
