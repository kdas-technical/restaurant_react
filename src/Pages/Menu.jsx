import React from 'react'
import bannerImg from "../../src/assets/hero.jpg"
import Dishes from '../Components/Dishes'
import PremMenu from '../Components/PremMenu'
const Menu = () => {
  return (
    <>
    <section className='min-h-screen'>
    <div className='bg-transparent w-full h-[400px] relative bg-cover bg-center text-gray-50 bg-[image:var(--banner-image)]' 
    style={{'--banner-image': `url(${bannerImg})`}} >
        <h1 className="lg:text-5xl text-2xl font-bold text-pink-500 lg:py-32 py-20 text-center">
          Launch Your Product with a Cool Landing Page
        </h1>
        <p className=" mb-8 text-gray-900 text-xl px-6">
          Your 1-2 sentence elevator pitch for what your product does and why goes here. Be concise, get to the point, don't use jargon.
        </p>
    </div>
    </section>
    <Dishes/>
    <PremMenu/>
    </>
  )
}

export default Menu
