
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Convencimento from "../components/WinningSection/WinningSection";
import Sobre from '../components/AboutSection/AboutSection';
import Canal from '../components/ChannelSection/ChannelSection';
import Contato from '../components/ContactSection/ContactSection';
import Footer from "../components/Footer/Footer";
import Gallery from "../components/GallerySection/Gallery";
import ArticleCTASection from "../components/ArticleCTASection/ArticleCTASection";


export default function Layout() {
  return (
    <div>
        <Header/>
        <Banner/>
        <Convencimento/>
        <Sobre/>
        <ArticleCTASection/>
        <Canal/>
        <Gallery/>
        <Contato/>
        <Footer/>
    </div>
  )
}
