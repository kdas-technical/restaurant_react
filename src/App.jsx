import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Menu from './Pages/Menu'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'

function App() {


  return (
    <>
      
      <Navbar/>
     {/*Routes*/}
     <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/about' element={<About/>}> </Route>
      <Route path='/menu' element={<Menu/>}> </Route>
      <Route path='/contact' element={<Contact/>}> </Route>
     </Routes>
     
    
     <Footer/>
    
    </>
  )
}

export default App
