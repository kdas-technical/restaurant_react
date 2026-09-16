import { BrowserRouter ,Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Menu from './Pages/Menu'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
function App() {


  return (
    <>
      <BrowserRouter>
      <Navbar/>
     {/*Routes*/}
     <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/about' element={<About/>}> </Route>
      <Route path='/menu' element={<Menu/>}> </Route>
      <Route path='/contact' element={<Contact/>}> </Route>
     </Routes>
     
    
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
