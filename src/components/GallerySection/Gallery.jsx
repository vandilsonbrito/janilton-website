import imgGallery0 from '../../assets/imgs-gallery/foto0.webp';
import imgGallery1 from '../../assets/imgs-gallery/foto1.webp';
import imgGallery2 from '../../assets/imgs-gallery/foto3.webp';
import imgGallery3 from '../../assets/imgs-gallery/foto2.webp';
import imgGallery4 from '../../assets/imgs-gallery/foto4.webp';
import imgGallery5 from '../../assets/imgs-gallery/foto5.webp';
import imgGallery6 from '../../assets/imgs-gallery/foto6.webp';
import imgGallery7 from '../../assets/imgs-gallery/foto7.webp';
import imgGallery8 from '../../assets/imgs-gallery/foto8.webp';
import imgGallery9 from '../../assets/imgs-gallery/foto9.webp';
import imgGallery10 from '../../assets/imgs-gallery/foto10.webp';
import imgGallery11 from '../../assets/imgs-gallery/foto11.webp';
import imgGallery12 from '../../assets/imgs-gallery/foto12.webp';
import imgGallery13 from '../../assets/imgs-gallery/foto13.webp';
import imgGallery14 from '../../assets/imgs-gallery/foto14.webp';
import imgGallery15 from '../../assets/imgs-gallery/foto15.webp';
import imgGallery16 from '../../assets/imgs-gallery/foto16.webp';
import imgGallery17 from '../../assets/imgs-gallery/foto17.webp';
import imgGallery18 from '../../assets/imgs-gallery/foto18.webp';
import imgGallery19 from '../../assets/imgs-gallery/foto19.webp';
import imgGallery20 from '../../assets/imgs-gallery/foto20.webp';
import imgGallery21 from '../../assets/imgs-gallery/foto21.webp';
import imgGallery22 from '../../assets/imgs-gallery/foto22.webp';
import imgGallery23 from '../../assets/imgs-gallery/foto23.webp';
import imgGallery24 from '../../assets/imgs-gallery/foto24.webp';
import imgGallery25 from '../../assets/imgs-gallery/foto25.webp';
import imgGallery26 from '../../assets/imgs-gallery/foto26.webp';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css'; 
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import PropTypes from 'prop-types';
SwiperCore.use([Navigation, Pagination, Scrollbar]);
import AOS from 'aos';
import { useEffect } from 'react';


export default function Gallery() {

    useEffect(() => {
        AOS.init({
          duration: 1000,
        })
      }, [])

    function LazyLoadedImage({ src, alt, className }) {
        return <img className={className} src={src} alt={alt} loading="lazy" />;
    }

  return (
    <section className="w-full h-full bg-white pt-20 pb-28 px-10 lg:px-16 font-Montserrat">
        <h3 className='text-lg md:text-2xl font-semibold uppercase text-center mb-14 xl:-ml-5 xl:-mr-5 lg:ml-0 lg:mr-0 leading-relaxed'  data-aos="fade-left">um pouco da minha vida profissional descrita em fotografias </h3>
        {/* Mobile Screens */}
        <Swiper
            navigation={window.innerWidth > 760 ? true : false}
            pagination={false}
            loop={true} 
            className="flex lg:hidden w-[100%] h-full justify-center overflow-hidden border-[5px] border-white shadow-2xl rounded-lg opacity-90 -mt-5 "
            data-aos="fade-left"
            > 
            <SwiperSlide className='w-full flex justify-center '>
                <LazyLoadedImage className='swiper-imgs' src={imgGallery0} alt="" />
            </SwiperSlide>
            <SwiperSlide className='w-full flex justify-center '>
                <LazyLoadedImage className='swiper-imgs' src={imgGallery1} alt="" />
            </SwiperSlide>
            <SwiperSlide className='w-full flex justify-center '>
                <LazyLoadedImage className='swiper-imgs' src={imgGallery2} alt="" />
            </SwiperSlide>
            <SwiperSlide className='w-full flex justify-center '>
                <LazyLoadedImage className='swiper-imgs' src={imgGallery11} alt="" />
            </SwiperSlide>
            <SwiperSlide className='w-full flex justify-center '>
                <LazyLoadedImage className='swiper-imgs' src={imgGallery17} alt="" />
            </SwiperSlide>
            <SwiperSlide className='w-full flex justify-center '>
                <LazyLoadedImage className='swiper-imgs' src={imgGallery5} alt="" />
            </SwiperSlide>
            <SwiperSlide className='w-full flex justify-center '>
                <LazyLoadedImage className='swiper-imgs' src={imgGallery6} alt="" />
            </SwiperSlide>
            <SwiperSlide className='w-full flex justify-center '>
                <LazyLoadedImage className='swiper-imgs' src={imgGallery7} alt="" />
            </SwiperSlide>
            <SwiperSlide className='w-full flex justify-center '>
                <LazyLoadedImage className='swiper-imgs' src={imgGallery8} alt="" />
            </SwiperSlide>
            <SwiperSlide className='w-full flex justify-center '>
                <LazyLoadedImage className='swiper-imgs' src={imgGallery9} alt="" />
            </SwiperSlide>
        </Swiper>
        {/* Big Screens */}
        <Swiper 
            navigation={true}
            pagination={true}
            loop={true} 
            className="hidden lg:flex  w-[100%] h-full justify-center overflow-hidden border-[5px] border-white shadow-2xl rounded-lg opacity-90 "
            data-aos="fade-left"
            > 
            <SwiperSlide className='w-full flex justify-center '>
                <LazyLoadedImage className='swiper-imgs' src={imgGallery0} alt="" />
                <LazyLoadedImage className='swiper-imgs' src={imgGallery1} alt="" />
                <LazyLoadedImage className='swiper-imgs' src={imgGallery2} alt="" />
            </SwiperSlide>
            <SwiperSlide className='w-full flex justify-center'>
                <LazyLoadedImage className='swiper-imgs' src={imgGallery3} alt="" />
                <LazyLoadedImage className='swiper-imgs' src={imgGallery4} alt="" />
                <LazyLoadedImage className='swiper-imgs' src={imgGallery5} alt="" />
            </SwiperSlide>
            <SwiperSlide className='w-full flex justify-center'>
                <LazyLoadedImage className='swiper-imgs' src={imgGallery6} alt="" />
                <LazyLoadedImage className='swiper-imgs' src={imgGallery7} alt="" />
                <LazyLoadedImage className='swiper-imgs' src={imgGallery8} alt="" />
            </SwiperSlide>
            <SwiperSlide className='w-full flex justify-center'>
                <LazyLoadedImage className='swiper-imgs' src={imgGallery9} alt="" />
                <LazyLoadedImage className='swiper-imgs' src={imgGallery10} alt="" />
                <LazyLoadedImage className='swiper-imgs' src={imgGallery11} alt="" />
            </SwiperSlide>
            <SwiperSlide className='w-full flex justify-center'>
                <LazyLoadedImage className='swiper-imgs' src={imgGallery12} alt="" />
                <LazyLoadedImage className='swiper-imgs' src={imgGallery13} alt="" />
                <LazyLoadedImage className='swiper-imgs' src={imgGallery14} alt="" />
            </SwiperSlide>
            <SwiperSlide className='w-full flex justify-center'>
                <LazyLoadedImage className='swiper-imgs' src={imgGallery15} alt="" />
                <LazyLoadedImage className='swiper-imgs' src={imgGallery16} alt="" />
                <LazyLoadedImage className='swiper-imgs' src={imgGallery17} alt="" />
            </SwiperSlide>
            <SwiperSlide className='w-full flex justify-center'>
                <LazyLoadedImage className='swiper-imgs' src={imgGallery18} alt="" />
                <LazyLoadedImage className='swiper-imgs' src={imgGallery19} alt="" />
                <LazyLoadedImage className='swiper-imgs' src={imgGallery20} alt="" />
            </SwiperSlide>
            <SwiperSlide className='w-full flex justify-center'>
                <LazyLoadedImage className='swiper-imgs' src={imgGallery21} alt="" />
                <LazyLoadedImage className='swiper-imgs' src={imgGallery22} alt="" />
                <LazyLoadedImage className='swiper-imgs' src={imgGallery23} alt="" />
            </SwiperSlide>
            <SwiperSlide className='w-full flex justify-center'>
                <LazyLoadedImage className='swiper-imgs' src={imgGallery24} alt="" />
                <LazyLoadedImage className='swiper-imgs' src={imgGallery25} alt="" />
                <LazyLoadedImage className='swiper-imgs' src={imgGallery26} alt="" />
            </SwiperSlide>
        </Swiper>
        <p className='mt-2 text-center'>Deslize para ver mais</p>
    </section>
  )
}


Gallery.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
}