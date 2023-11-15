import { useState } from "react";

export default function ContactSection() {
  const ACCEESS_KEY = import.meta.env.VITE_ACCESS_KEY;

  const handleChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });
  
  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: 'StaticForms - Contact Form',
    honeypot: '', // if any value received in this field, form submission will be ignored.
    message: '',
    replyTo: '@', 
    accessKey: ACCEESS_KEY 
  });
  const [response, setResponse] = useState({
    type: '',
    message: ''
  });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' }
      });

      const json = await res.json();

      if (json.success) {
        setResponse({
          type: 'success',
          message: 'Obrigado por entrar em contato comigo!'
        });
      } else {
        setResponse({
          type: 'error',
          message: json.message
        });
      }
    } catch (e) {
      console.log('An error occurred', e);
      setResponse({
        type: 'error',
        message: 'An error occured while submitting the form'
      });
    }
  };

  return (
    <div className="w-full h-full bg-[#dbdbdbdc] px-8 pt-16 pb-24 flex flex-col items-center font-Montserrat" id="/contato">
        <h3 className=" font-bold text-lg md:text-3xl mb-8 text-black">Entre em contato comigo</h3>

        <form action="https://api.staticforms.xyz/submit" 
        method="POST" 
        onSubmit={handleSubmit}
        className="w-[95%] md:w-[60%] h-full flex flex-col items-center gap-8"
        >

            <input 
            type="text" 
            name="name"
            className="w-full h-[45px] rounded-md px-3" placeholder="Digite Seu Nome" required maxLength='25' onChange={handleChange}
            />
            <input 
            type="email" 
            name="email" 
            id="email" 
            className="w-full h-[45px] rounded-md px-3" placeholder="Digite Seu E-mail" required maxLength='50' onChange={handleChange}
            /> 
            <textarea 
            type="text"
            name="message"
            className="w-full h-[100px] rounded-md px-3 pt-1" 
            placeholder="Mensagem" 
            required 
            onChange={handleChange}
            />
            <input 
            type="submit"
            value="Enviar" 
            className="uppercase w-[50%] xl:w-[40%] h-[50px] rounded-xl bg-blue-700 text-white text-lg lg:text-xl font-semibold  cursor-pointer hover:shadow-xl hover:bg-blue-800  active:scale-[0.98] ease-in-out duration-200"
            />
            <div className="w-full flex items-center">
                <p className=''>{response.type === 'error' ? 'Ocorreu um erro ao enviar. Tente novamente.' : response.message }</p>
            </div>
        </form>
    </div>
  )
} 
