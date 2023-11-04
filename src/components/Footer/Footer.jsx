import { Link } from 'react-router-dom';
import Social from '../Social/Social';

export default function Footer() {
  return (
    <div className="w-full h-full bg-main-blue pt-10 flex flex-col justify-center items-center gap-6 lg:gap-10">
        <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:gap-10 font-Montserrat">
            <h3 className="text-lg md:text-3xl font-semibold text-white lg:mt-2">Me siga nas redes socias.</h3>
            <Social/>
        </div>
        <div className="w-full bg-blue-700 pb-2 pt-1 flex justify-center text-center px-3">
          <p className='text-white'>Todos os direitos reservados ao Professor <Link to='/Login'>Janilton</Link>. Desenvolvido por <a className='underline' href="https://www.linkedin.com/in/vandilson-brito-b791b3216/">Vandilson Brito</a></p>
        </div>
    </div>
  )
}
