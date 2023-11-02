import { Link } from "react-router-dom";
import { RxHamburgerMenu } from 'react-icons/rx';


export default function Header() {
  
    return (
      <header className="w-full h-[88px] bg-blue-800 px-5 sm:px-10 xl:px-20 flex items-center justify-between font-Montserrat font-semibold">
            <Link to='/'>
                <div className="w-[130px] sm:w-[170px]">
                    <h1 className="text-[1.15rem] sm:text-2xl text-center text-[#fff]">Prof. Janilton</h1>
                </div>
            </Link>

            <div className="mr-1 cursor-pointer">
                <div className="lg:hidden w-full">
                    <RxHamburgerMenu className="menu-burger text-white text-3xl z-50"/>
                </div>
            </div>

            <ul className="w-[65%] items-center justify-between text-sm lg:text-[1.1rem]  text-[#fff] hidden lg:flex">
                <li className="hover:text-blue-700 hover:bg-white px-4 py-3 rounded-3xl ease-in-out duration-500"><Link to='/'>Home</Link></li>

                <li className="hover:text-blue-700 hover:bg-white px-4 py-3 rounded-3xl ease-in-out duration-500"><Link to='Sobre'>Sobre</Link></li>
                
                <li className="hover:text-blue-700 hover:bg-white px-4 py-3 rounded-3xl ease-in-out duration-500 text-center"><Link to='Planos de Aula'>Planos de Aula</Link></li>

                <li className="hover:text-blue-700 hover:bg-white px-4 py-3 rounded-3xl ease-in-out duration-500"><Link to='Artigo'>Artigos</Link></li>

                <li className="hover:text-blue-700 hover:bg-white px-4 py-3 rounded-3xl ease-in-out duration-500"><Link to='Canal'>Canal </Link></li>

                <li className="hover:text-blue-700 hover:bg-white px-4 py-3 rounded-3xl ease-in-out duration-500"><Link to='Contato'>Contato</Link></li>
            </ul>

      </header>
    )
  }