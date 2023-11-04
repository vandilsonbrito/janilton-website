import { Link } from 'react-scroll';
import Janilton from '../../assets/imgs-janilton/foto-globo.jpg';

export default function PresentationSection() {
  return (
    <div className="w-full h-full bg-white my-10 px-[15%] font-Montserrat flex flex-col items-center  sm:my-16 sm:px-[20%] md:px-[15%] xl:px-[10%] text-black" id='/Sobre'>
        
        <div className="w-full flex flex-col xl:flex-row items-center xl:gap-24">
            <h2 className="uppercase font-semibold text-3xl md:text-5xl xl:mt-8 xl:mb-10 xl:hidden">Sobre mim</h2>
            <img src={Janilton} alt="Imagem do Professor Janilton" className='w-[250px] my-6 sm:my-10 xl:w-[250px]'/>
            <div className="flex flex-col gap-5 text-lg md:text-xl lg:text-lg md:-px-10">
                <div className="w-full  justify-center hidden xl:flex">
                  <h2 className="uppercase font-semibold text-3xl md:text-5xl xl:mt-8 xl:mb-10">Sobre mim</h2>
                </div>
                <p className=''>Olá, eu sou o professor Janilton Almeida! Com uma sólida formação acadêmica e mais de duas décadas de experiência no ensino, estou comprometido com a promoção da educação e o desenvolvimento integral dos estudantes. Minha trajetória acadêmica abrange diversas áreas do conhecimento.
                </p>
                <p>Sou graduado em Geografia, Ciências Biológicas e Pedagogia, o que me permite uma perspectiva multidisciplinar e interdisciplinar que enriquece minha prática pedagógica.</p>
                <p className=''>Além disso, obtive especializações em Mídias na Educação, Formação Socioeconômica do Brasil e Gestão Ambiental e Desenvolvimento Sustentável. Atualmente, estou avançando em minha jornada acadêmica como Doutorando em Ciências, com um mestrado em Ensino de Ciências.</p>
                <p className=''>Há mais de 25 anos, atuo como professor de Geografia e em coordenações de ensino e formação de professores. E atualmente estou na coordenação do Núcleo de Apoio Pedagógico da Secretaria de Educação do Município de Ibiassucê, Bahia.</p>
                <p>Seja bem-vindo ao meu mundo de conhecimento, aprendizado e descobertas. Estou ansioso para compartilhar essa jornada educacional com você. Vamos nessa! <Link to='' className='hover:underline cursor-pointer text-blue-600'> Mais sobre.</Link></p>
          </div>
        </div>
    </div>
  )
}
