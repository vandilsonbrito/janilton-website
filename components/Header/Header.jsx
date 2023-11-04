import { Link, animateScroll as scroll } from "react-scroll";  
import { RxHamburgerMenu } from 'react-icons/rx';


export default function Header() {
    
    const headerHeight = 88;
    const scrollToTop = () => {
        scroll.scrollToTop();
      };
  
    return (
      <header className="w-full h-[88px] fixed z-[200]">
            <div className="w-full h-full  bg-blue-800 px-5 sm:px-10 xl:px-20 flex items-center justify-between font-Montserrat font-semibold ">
                <Link to='/' onClick={() => scrollToTop()} className="cursor-pointer">
                    <div className="w-[130px] sm:w-[170px]">
                        <h1 className="text-[1.15rem] sm:text-2xl text-center text-[#fff]">Prof. Janilton Almeida</h1>
                    </div>
                </Link>
                <div className="mr-1 cursor-pointer">
                    <div className="lg:hidden w-full">
                        <RxHamburgerMenu className="menu-burger text-white text-3xl z-50"/>
                    </div>
                </div>
                <ul className="w-[65%] items-center justify-between text-sm lg:text-[1.1rem]  text-[#fff] hidden lg:flex">
                    <Link to='/Sobre' smooth={true} duration={500} offset={-headerHeight} className="cursor-pointer">
                        <li className="hover:text-blue-700 hover:bg-white px-4 py-3 rounded-3xl ease-in-out duration-500">Sobre</li>   
                    </Link>
                    <Link  id="Sobre" to='/PlanosdeAula' offset={-headerHeight} smooth={true} duration={500} className="cursor-pointer">
                        <li className="hover:text-blue-700 hover:bg-white px-4 py-3 rounded-3xl ease-in-out duration-500 text-center">Planos de Aula</li>
                    </Link>
                    <Link to='/Artigo' smooth={true} duration={500} offset={-headerHeight} className="cursor-pointer">
                        <li className="hover:text-blue-700 hover:bg-white px-4 py-3 rounded-3xl ease-in-out duration-500">Artigos</li>
                    </Link>
                    <Link to='/Canal' smooth={true} duration={500} offset={-headerHeight} className="cursor-pointer"> 
                        <li className="hover:text-blue-700 hover:bg-white px-4 py-3 rounded-3xl ease-in-out duration-500">Canal</li>
                    </Link>
                    <Link to='/Contato' smooth={true} duration={500} offset={-headerHeight} className="cursor-pointer">
                        <li className="hover:text-blue-700 hover:bg-white px-4 py-3 rounded-3xl ease-in-out duration-500">Contato</li>
                    </Link>
                </ul>
            </div>

      </header>
    )
  }