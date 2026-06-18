import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter } from "react-router-dom";
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
function App() {


  return (
    <>
      <BrowserRouter>
     <Navbar/>
     
     {/*Routes*/}
     <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/about' element={<About/>}> </Route>
      <Route path='/contact' element={<Contact/>}> </Route>
     </Routes>
     
    
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
