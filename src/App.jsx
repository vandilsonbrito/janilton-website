import { Routes, Route } from 'react-router-dom';
import Sobre from '../components/AboutSection/AboutSection';
import Canal from '../components/ChannelSection/ChannelSection';
import Contato from '../components/ContactSection/ContactSection';

import Layout from '../layouts/Layout';

function App() {

  return (
    <>
        <Layout/>
        <Routes>
          <Route path='/Sobre' element={<Sobre/>}/>
        </Routes> 
    </>
  )
}

export default App
