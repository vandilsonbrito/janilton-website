 
import { GrYoutube, GrInstagram } from 'react-icons/gr'; 

export default function Social() {
  return (
    <div className="w-fit mt-4 flex justify-center gap-5">
        <a href="https://www.instagram.com/profjaniltonalmeidaeduc/" target="_blank" rel="noopener noreferrer" className="w-fit h-fit p-2 md:p-3 text-xl md:text-2xl text-blue-700 bg-white hover:bg-[#e44ca0] hover:text-white rounded-full cursor-pointer ease-in-out" aria-label="Siga o Professor Janilton Almeida no Instagram">
            <GrInstagram />
        </a>
        <a href="https://www.youtube.com/@prof.janiltonalmeida8089" target="_blank" rel="noopener noreferrer" className="w-fit h-fit p-2 md:p-3 text-xl md:text-2xl text-blue-700 bg-white hover:bg-red-500 hover:text-white rounded-full cursor-pointer ease-in-out" aria-label="Inscreva-se no canal do Professor Janilton Almeida no YouTube">
            <GrYoutube />
        </a>
    </div>
  )
}