
export default function ContactSection() {
  return (
    <div className="w-full h-full bg-[#dbdbdbdc] px-8 py-14 flex flex-col items-center font-Montserrat" id="/Contato">
        <h3 className=" font-bold text-lg md:text-3xl mb-8 text-black">Entre em contato comigo</h3>
        <form action="" className="w-[95%] md:w-[60%] h-full flex flex-col items-center gap-8">
            <input type="text" name="" id="" className="w-full h-[45px] rounded-md px-3" placeholder="Digite Seu Nome"/>
            <input type="email" name="" id="" className="w-full h-[45px] rounded-md px-3" placeholder="Digite Seu E-mail"/> 
            <textarea type="" name="" id="" className="w-full h-[100px] rounded-md px-3 pt-1" placeholder="Mensagem"/>
            <input type="submit" value="Enviar" className="uppercase w-[50%] h-[50px] rounded-xl bg-blue-700 text-white text-lg lg:text-xl font-semibold  cursor-pointer hover:shadow-xl hover:bg-blue-800  active:scale-[0.98] ease-in-out duration-200"/>
        </form>
    </div>
  )
}
