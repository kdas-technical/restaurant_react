import React from 'react'
import Button from './Button'
import Img from '../../src/assets/hero.jpg'
const About = () => {
  return (
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
  )
}

export default About