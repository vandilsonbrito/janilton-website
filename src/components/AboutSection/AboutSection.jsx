import { Link } from 'react-router-dom';
import Janilton from '../../assets/imgs-janilton/foto-perfil2.webp';
import JaniltonMobile from '../../assets/imgs-janilton/foto-perfil2-mobile.webp';

export default function AboutSection() {

  
  return (
    <div className="w-full h-full bg-white my-10 px-[10%] font-Montserrat flex flex-col items-center  sm:my-16 sm:px-[20%] md:px-[15%] lg:mb-20 xl:px-[10%] text-black" id='/sobre'>
        
        <div className="w-full flex justify-center xl:mt-8 mb-2 lg:mb-10 xl:ml-56">
          <h2 className="uppercase font-semibold text-3xl md:text-5xl ">Sobre mim</h2>
        </div>
     
        <div className="w-full h-full flex flex-col xl:flex-row items-center gap-3 lg:gap-10">
            <div className="w-full h-full flex justify-center xl:self-start xl:mt-2">
              <img src={`${window.innerWidth < 800 ? JaniltonMobile : Janilton}`} alt="Imagem do Professor Janilton" className='w-[230px] h-[300px]  my-6 sm:my-10 xl:my-0 flex '/>
            </div>

            <div className="flex flex-col gap-5 text-lg md:text-xl lg:text-lg md:-px-10">
                <p className=''>Olá, eu sou o professor Janilton Almeida! Com uma sólida formação acadêmica e mais de duas décadas de experiência no ensino, estou comprometido com a promoção da educação e o desenvolvimento integral dos estudantes. Minha trajetória acadêmica abrange diversas áreas do conhecimento.
                </p>
                <p>Sou graduado em Geografia, Ciências Biológicas e Pedagogia, o que me permite uma perspectiva multidisciplinar e interdisciplinar que enriquece minha prática pedagógica.</p>
                <p className=''>Além disso, obtive especializações em Mídias na Educação, Formação Socioeconômica do Brasil e Gestão Ambiental e Desenvolvimento Sustentável. Atualmente, estou avançando em minha jornada acadêmica como Doutorando em Ciências, com um mestrado em Ensino de Ciências.</p>
                <p className=''>Há mais de 25 anos, atuo como professor de Geografia e em coordenações de ensino e formação de professores. E atualmente estou na coordenação do Núcleo de Apoio Pedagógico da Secretaria de Educação do Município de Ibiassucê, Bahia.</p>
                <p>Seja bem-vindo ao meu mundo de conhecimento, aprendizado e descobertas. Estou ansioso para compartilhar essa jornada educacional com você. Vamos nessa! <Link to='/mais-sobre' className='hover:underline cursor-pointer text-blue-600' aria-label="Leia mais sobre Janilton Almeida"> Mais sobre.</Link></p>
            </div>
        </div>
    </div>
  )
}
