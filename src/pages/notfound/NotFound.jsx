import HeaderOutter from '../../components/Header/HeaderOutter';
import Footer from '../../components/Footer/Footer';
import { BiSolidErrorAlt } from "react-icons/bi";


export default function NotFound() {

    return (
        <>
            <HeaderOutter/>
            <div className='w-full h-full min-h-screen bg-white text-black font-Montserrat pt-20 flex flex-col justify-center items-center gap-5'>
                <BiSolidErrorAlt className='text-6xl lg:text-8xl'/>
                <p className='text-3xl xl:text-6xl'>Error 404</p>
                <p className='text-2xl xl:text-4xl'>Página não encontrada.</p>

            </div>
            <Footer/>
        </>
    );
}