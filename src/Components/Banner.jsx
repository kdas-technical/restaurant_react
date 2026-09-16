import React from 'react'
import Button from './Button'
const Banner = () => {
  return (
    <div className="md:min-h-[550px] min-h-[300px] flex flex-row justify-center items-center lg:px-32 px-5 bg-[url('./assets/hero.jpg')] bg-cover bg-center">
    <div className='w-full space-y-5'>
     <h1 className='md:text-4xl text-white text-2xl'> Launch Your Product with a Cool Landing Page</h1>
    <p className='text-xl text-orange-400'>Your 1-2 sentence elevator pitch for what your product does and why goes here. Be concise, get to the point, don't use jargon.</p>
   <div className='pl-44'>
   <Button title='Buy Now'> </Button>
   </div>
    </div>
    </div>
  )
}

export default Banner