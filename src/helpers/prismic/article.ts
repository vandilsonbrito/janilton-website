import { useAllPrismicDocumentsByType, useFirstPrismicDocument, useSinglePrismicDocument } from '@prismicio/react';
import { articleDocument } from './types/article';


export const handleDocument = () => {

    const [documents] = useAllPrismicDocumentsByType('articles');
    
    if (!documents) {
      return {}; 
    }
  
    const titles = documents.map((item) => item.data?.title?.[0]?.text);
    const descriptions = documents.map((item) => item.data?.description?.[0]?.text);
    const textContents = documents.map((item) => item?.data?.body?.[0].items?.[0]?.paragraph);
    const imagesurl = documents.map((item) => item?.data?.image?.url);
    const imagesalt = documents.map((item) => item?.data?.image?.alt);
    const slugs = documents.map((item) => item.uid)

    
    return { titles, descriptions, textContents, imagesurl, imagesalt, slugs}
  };

