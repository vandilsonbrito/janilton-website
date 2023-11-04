import { FcGoogle } from 'react-icons/fc'; 

export default function Login() {
  return (
    <div className="w-full h-screen bg-blue-800 flex flex-col justify-center items-center">
      <button className='flex items-center gap-2 p-4 bg-white rounded-full hover:shadow-2xl duration-500 active:scale-[0.95]'> <FcGoogle/> Fazer Login com o Google</button>
    </div>
  )
}
