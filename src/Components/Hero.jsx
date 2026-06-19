import React from 'react'
import bannerImg from "../../src/assets/hero.jpg"
function Hero() {
  return (
<div className='relative  h-screen bg-cover bg-center text-gray-50'
    style={{ 'backgroundImage': `url(${bannerImg})` }} >
    <div className="container bg-transparent absolute top-60 mx-auto px-6 "> {/* Centered container with horizontal padding */}
        <h1 className="text-5xl font-bold text-pink-500 my-6 text-center">
          Launch Your Product with a Cool Landing Page
        </h1>
        <p className=" mb-8 text-gray-900 text-xl px-6">
          Your 1-2 sentence elevator pitch for what your product does and why goes here. Be concise, get to the point, don't use jargon.
        </p>
        <button className="bg-orange-500 hover:bg-blue-700 mx-96 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300">
          Get Started
        </button>
      </div>
  </div>
  
    
  )
}

export default Hero