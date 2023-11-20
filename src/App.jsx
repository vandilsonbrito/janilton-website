import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Sobre from './components/AboutSection/AboutSection';
import DisplayArtigos from './pages/artigos/menuArtigos/MenuArtigos';
import Artigos from './pages/artigos/artigos/Artigos';
import MaisSobre from './pages/Sobre/Sobre';
import CanalSection from './components/ChannelSection/ChannelSection';
import ContactSection from './components/ContactSection/ContactSection';
import SobrePage from './pages/Sobre/Sobre';
import NotFound from './pages/notfound/NotFound';

function App() {

  return (
    <>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/sobre' element={<SobrePage/>}/>
          <Route path='/mais-sobre' element={<MaisSobre/>}/>
          <Route path='/artigos' element={<DisplayArtigos/>}/>
          <Route path='/artigos/:id' element={<Artigos articleId=''/>}/>
          <Route path='/Sobre' element={<Sobre/>}/>
          <Route path='/Canal' element={<CanalSection/>}/>
          <Route path='/Contato' element={<ContactSection/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>   
    </>
  )
} 

export default App
