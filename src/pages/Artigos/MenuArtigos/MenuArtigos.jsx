import { useEffect } from 'react';
import Footer from '../../../components/Footer/Footer';
import HeaderOutter from '../../../components/Header/HeaderOutter';
import SkeletonArticle from '../../../components/Loading/SkeletonArticle';
import { handleDocument } from '../../../helpers/prismic/article';
import DisplayArtigos from '../DisplayArtigos';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';""

export default function MenuArtigos() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.overflow = 'auto';
      }, []);

    const { titles, descriptions, textContents, imagesurl, imagesalt, slugs } = handleDocument();
    
    const showArticles = (titles, descriptions, textContents, imagesurl, imagesalt, slugs) => {
        const artigosDisplays = [];
        for (let i = 0; i < titles.length; i++) {
            artigosDisplays.push(<DisplayArtigos key={i} title={titles[i]} description={descriptions[i]} textContent={textContents[i]} imageurl={imagesurl[i]} imagealt={imagesalt[i]} slug={slugs[i]} />);
        }
        return artigosDisplays;
    }

    const fadeInOut = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };

    return (
        <>
            <Helmet>
                <meta name="description" content="Leia artigos de opinião sobre o ensino de Ciências, Geografia e área afins"/>
            </Helmet>
            <motion.div 
                initial="hidden"
                animate={'visible'}
                variants={fadeInOut}
                transition={{ duration: 0.3 }}
                className='w-full min-h-screen'
                >
                    
                {<HeaderOutter/>}
                <div className='w-full h-full min-h-screen   bg-white text-white py-28 lg:py-40 flex flex-col justify-center'>
                    <div className="w-full flex justify-center pb-10 md:pb-20">
                        <h1 className='text-3xl md:text-4xl text-black uppercase font-semibold'>Artigos</h1>
                    </div>
                    <div className="w-full h-full flex flex-wrap justify-center items-center gap-8 xl:gap-14">
                        { (titles && descriptions && textContents && imagesurl && imagesalt  && slugs) ? 
                            showArticles(titles, descriptions, textContents, imagesurl, imagesalt, slugs) 
                            :
                                <>
                                    <SkeletonArticle/>
                                    <SkeletonArticle/>
                                    <SkeletonArticle/>
                                    <SkeletonArticle/>
                                </> 

                        }

                    </div>
                </div>
                
                <Footer/>
            </motion.div>
        </> 
        
    );
}