import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Sobre from './components/AboutSection/AboutSection';
import Login from "./pages/Login/Login";

function App() {

  return (
    <>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/Sobre' element={<Sobre/>}/>
          <Route path='/Login' element={<Login/>}/>
        </Routes> 
    </>
  )
}

export default App
