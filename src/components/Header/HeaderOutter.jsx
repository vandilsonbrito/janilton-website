import { Link  } from "react-router-dom";  


export default function HeaderOutter() {
    
    const scrollToTop = () => {
        scroll.scrollToTop();
      };

  
    return (
      <header className="w-full h-[88px] fixed z-[200] ">
            <div className="w-full h-full  bg-blue-800 px-5 sm:px-10 xl:px-20 flex items-center justify-between font-Montserrat font-semibold ">
                <Link to='/' onClick={() => scrollToTop()} className="cursor-pointer">
                    <div className="w-[130px] sm:w-[170px]">
                        <h1 className="text-[1rem] md:text-[1.3rem] leading-7 text-center text-[#fff]">Prof. Janilton Almeida</h1>
                    </div>
                </Link>
        
                <nav className="w-[65%] items-center justify-end  text-sm lg:text-[1.1rem]  text-[#fff]  flex">
                    <Link to='/'className="cursor-pointer">
                        <span className="hover:text-blue-700 hover:bg-white px-4 py-3 rounded-3xl ease-in-out duration-500 text-[1rem] md:text-[1.2rem]">Home</span>   
                    </Link>
      
                </nav>
            </div>

      </header>
    )
  }