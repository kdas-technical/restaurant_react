import React from 'react'
import Tabs from '../Components/Tabs'
import Banner from '../Components/Banner'
import Img from '../../src/assets/hero.jpg'
import Card from '../Components/MenusCard'
import MenuCard from '../Components/MenusCard'
import Dishes from '../Components/Dishes'
import PremMenu from '../Components/PremMenu'
import Button from '../Components/Button'
import Testimonial from './../Components/Testimonial';
function Home() {
  return (
    <>
      
      <Banner/>
      <div className="min-h-[300px] flex flex-col lg:flex-row justify-center items-center mt-10 lg:mt-0s lg:px-36 px-6">
        <img className='w-[500px] lg:px-20' src={Img} alt="img"/>
        <div className='space-y-4 lg:pt-1'>
          <h1 className='text-center md:text-start text-3xl font-medium'>Why Choose Us?</h1>
          <p>
          Your 1-2 sentence elevator pitch for what your product does and why goes here. Be concise, get to the point, don't use jargon.
          </p>
          <p>
          Your 1-2 sentence elevator pitch for what your product does and why goes here. Be concise, get to the point, don't use jargon.
          </p>
          <Button title='Buy Now'> </Button>
        </div>
      </div>
      <Dishes/>
      <PremMenu/>
      <Testimonial/>
      
    </>
  )
}

export default Home