import React from 'react'

function Footer() {
  return (
    <div className="bg-gray-900 text-white mt-8 md:mt-0 py-6"> {/* Main container with background and padding */}
    <div className="flex flex-col md:flex-row justify-between md:px-32 px-8"> {/* Centered container with horizontal padding */}
     <div className='w-full md:w-1/4'>
      <h1 className="text-5xl font-bold mb-4">
       FoodOnline
      </h1>
      <p className="text-xl mb-8">
        Your 1-2 sentence elevator pitch for what your product does and why goes here. Be concise, get to the point, don't use jargon.
      </p>
      </div>
      <div>
      <h1 className='font-medium text-2xl pb-4 pt-5 md:pt-0'> Links </h1>
        <nav className='flex flex-col gap-2'>
       <a href='./'className='transition-all cursor-pointer'> Dishes </a>
       <a href='./'className='transition-all cursor-pointer'>About </a>
       <a href='./'className='transition-all cursor-pointer'>Menu </a>
       <a href='./'className='transition-all cursor-pointer'>Reviews </a>
     </nav>
      </div>
      <div>
      <h1 className='font-medium text-2xl pb-4 pt-5 md:pt-0'> Menu </h1>
        <nav className='flex flex-col gap-2'>
       <a href='./'className='transition-all cursor-pointer'>Our Dishes  </a>
       <a href='./'className='transition-all cursor-pointer'> Premium Menu </a>
       
     </nav>
      </div>
      <div>
        <h1 className='font-medium text-2xl pb-4 pt-5 md:pt-0'> Contact Us </h1>
        <nav className='flex flex-col gap-2'>
       <a href='./'className='hover:text-blue-300 transition-all cursor-pointer'> abc@gmail.com </a>
       <a href='./'className='hover:text-orange-400 transition-all cursor-pointer'>+91 12345678 </a>
       <a href='./'className='hover:text-orange-400 transition-all cursor-pointer'>Social Media </a>
       <a href='./'className='hover:text-orange-400 transition-all cursor-pointer'> </a>

        </nav>
      
      </div>
      </div>
      <div>
        <p className='text-center py-4'> @copyright developed by
          <span className='text-orange-500'>programmer </span>|
          All right reserved
        </p>
      </div>
      
  </div>
  )
}

export default Footer