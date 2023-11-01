import { Routes, Route } from 'react-router-dom';
import Layout from '../layouts/layout';
import Home from '../pages/Home/Home';
import Sobre from '../pages/Sobre/Sobre';
import Canal from '../pages/Canal/CanalYB';
import Contato from '../pages/Contato/Contato';

function App() {

  return (
    <>
        <Routes>

            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='Sobre' element={<Sobre/>}/>
                <Route path='Planos de Aula' element={<Sobre/>}/>
                <Route path='Artigo' element={<Canal/>} />
                <Route path='Canal' element={<Canal/>} />
                <Route path='Contato' element={<Contato/>} />
            </Route>

        </Routes>
    </>
  )
}

export default App
