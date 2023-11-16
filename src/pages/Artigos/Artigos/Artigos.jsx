import { useParams } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import HeaderOutter from "../../../components/Header/HeaderOutter";
import { handleDocument } from "../../../helpers/prismic/article";
import SkeletonArticle from '../../../components/Loading/SkeletonArticle';
import { useEffect } from "react";

export default function PaginaArtigos() {
    useEffect(() => {
        window.scrollTo(0, 30);
        document.body.style.overflow = 'auto';
      }, []);

    const { titles, descriptions, textContents, imagesurl, imagesalt, slugs } = handleDocument();

    const { id } = useParams();  

    const displayParagraphs = (i, textContents) => {
        const paragraphs = [];
        const length = textContents?.[i].length;
      
        for(let j = 0; j < length; j++) {
            paragraphs.push(
                <p key={j} className={`${window.innerWidth < 700 ? 'py-3' : 'py-1'}`}>{textContents?.[i][j].text}</p>
                )
            }
        return paragraphs;
    }
 
    const showArticle = (titles, descriptions, textContents, imagesurl, imagesalt, slugs) => {
        
        const displayContent = [];
        for (let i = 0; i < slugs?.length; i++) {
            if(id === slugs[i]) {
               displayContent.push(
                <div className='w-full h-full bg-blue- text-black pb-10 lg:pb-20 pt-32 flex flex-wrap justify-center items-center gap-14' key={i}>
                    <div className="w-[90%] sm:w-[80%] xl:w-[70%] h-full min-h-screen bg-white shadow-2xl rounded-lg flex flex-col items-center py-16 px-5 sm:px-8 lg:px-20">
                        <h1 className="text-3xl md:text-4xl font-semibold capitalize text-center">{titles[i]}</h1>
                        <img className="my-10" src={imagesurl[i]} alt={imagesalt[i]} />

                        <div className="text-lg">
                            {displayParagraphs(i, textContents)}
                        </div>
                    </div>
                </div>
               )
            }
        }

        return displayContent;

    }


  return (
    <>
            <HeaderOutter/>
            
                { (titles && descriptions && textContents && imagesurl && imagesalt && slugs) ? 
                    showArticle(titles, descriptions, textContents, imagesurl, imagesalt, slugs) 
                    :
                        <>
                            <SkeletonArticle/>
                            <SkeletonArticle/>
                            <SkeletonArticle/>
                            <SkeletonArticle/>
                        </> 

                }
            
            <Footer/>
        </>
  )
}
