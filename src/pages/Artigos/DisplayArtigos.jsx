import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa'
import { useEffect } from 'react';


export default function MenuArtigos({ title, description, slug, imageurl, imagesalt }) {
    useEffect(() => {
        window.scrollTo(0, 30);
      }, []);

    return (
        <>
            
            { document && ( 
                <Link to={`/Artigos/${slug}`} >
                    <main className="w-[320px] h-full md:w-[340px] md:h-[620px] lg:w-[500px]  flex flex-col items-center bg-white text-black rounded-lg px-6 py-5 shadow-lg font-Montserrat">
                        <div className='w-full h-full p-3 flex flex-col justify-between'>
                            <div className="w-full h-full flex flex-col gap-5">
                                <h1 className='text-2xl font-semibold text-center'>{title}</h1>
                                <img src={imageurl} alt={imagesalt} />
                                <p className='leading-relaxed'>{description}</p>
                            </div>
                            <div className="w-full h-full flex flex-col justify-end mt-5">
                                <p className='flex items-center gap-1 self-start font-semibold uppercase hover:text-blue-800'>Ler artigo completo <FaLongArrowAltRight/></p>
                            </div>
                        </div>
                    </main>
                </Link>

            )}
        </>
    );
} 

MenuArtigos.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    content: PropTypes.string,
    imageurl: PropTypes.string,
    slug: PropTypes.string,
    imagesalt: PropTypes.string,
    articleId: PropTypes.number,
}