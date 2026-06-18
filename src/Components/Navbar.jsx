import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    
     <nav className='container bg-transparent max-w-screen-2xl flex justify-around items-center px-4 py-4 mx-auto'>
    
     {/*logo*/}
     <div className='text-3xl text-amber-500 font-bold'>
      <NavLink to={"/"}>logo </NavLink>
  
     </div>
     
    {/*menu*/}
     <div className='menu flex justify-between items-center gap-12 text-2xl'>
      <NavLink to={"/"}> Home </NavLink>
      <NavLink to={"/about"}> About </NavLink>
      <NavLink to={"/contact"}> Contact </NavLink>
      
     </div>
       {/*menu*/}
     <div className='login'>
      <button className='bg-purple-600 text-white rounded-lg items-center px-4 py-2'> Sign In </button>
     </div> 
     </nav>

  )
}

export default Navbar