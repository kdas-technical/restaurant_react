import React from 'react'
import Tabs from '../Components/Tabs'
import Banner from '../Components/Banner'
import About from './../Components/About';
import Card from '../Components/MenusCard'
import MenuCard from '../Components/MenusCard'
import Dishes from '../Components/Dishes'
import PremMenu from '../Components/PremMenu'

import Testimonial from './../Components/Testimonial';
function Home() {
  return (
    <section className='min-h-screen'>
      
      <Banner/>
     <About/>
      <Dishes/>
      <PremMenu/>
      <Testimonial/>
      
    </section>
  )
}

export default Home