
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Convencimento from "../components/WinningSection/WinningSection";
import Sobre from '../components/AboutSection/AboutSection';
import Canal from '../components/ChannelSection/ChannelSection';
import Contato from '../components/ContactSection/ContactSection';
import Footer from "../components/Footer/Footer";

export default function Layout() {
  return (
    <div>
        <Header/>
        <Banner/>
        <Convencimento/>
        <Sobre/>
        <Canal/>
        <Contato/>
        <Footer/>
    </div>
  )
}
