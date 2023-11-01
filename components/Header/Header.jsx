import { Link } from "react-router-dom";
import { RxHamburgerMenu } from 'react-icons/rx';


export default function Header() {
  
    return (
      <header className="w-full h-[88px] bg-blue-800 px-3 sm:px-10 lg:px-20 flex items-center justify-between font-Montserrat font-semibold">
            <Link to='/'>
                <div className="w-[70px] sm:w-[170px]">
                    <h1 className="font- text-[.85rem] sm:text-2xl text-center text-[#fff]">Prof. Janilton</h1>
                </div>
            </Link>

            <div className="mr-1 cursor-pointer">
                <div className="md:hidden w-full">
                    <RxHamburgerMenu className="menu-burger text-white text-3xl z-50"/>
                </div>
            </div>

            <ul className="w-[65%] items-center justify-between text-sm lg:text-[1.1rem]  text-[#fff] hidden md:flex">
                <Link to='/'>
                    <li className="hover:text-blue-700 hover:bg-white px-4 py-3 rounded-3xl ease-in-out duration-500">Home</li>
                </Link>
                <Link to='Sobre'>
                    <li className="hover:text-blue-700 hover:bg-white px-4 py-3 rounded-3xl ease-in-out duration-500">Sobre</li>
                </Link>
                <Link to='Planos de Aula'>
                    <li className="hover:text-blue-700 hover:bg-white px-4 py-3 rounded-3xl ease-in-out duration-500">Planos de Aula</li>
                </Link>
                <Link to='Artigo'>
                    <li className="hover:text-blue-700 hover:bg-white px-4 py-3 rounded-3xl ease-in-out duration-500">Artigos</li>
                </Link>
                <Link to='Canal'>
                    <li className="hover:text-blue-700 hover:bg-white px-4 py-3 rounded-3xl ease-in-out duration-500">Canal</li>
                </Link>
                <Link to='Contato'>
                    <li className="hover:text-blue-700 hover:bg-white px-4 py-3 rounded-3xl ease-in-out duration-500">Contato</li>
                </Link>
            </ul>

      </header>
    )
  }