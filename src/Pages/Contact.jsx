import React, { useRef } from 'react';

import bannerImg from "../../src/assets/hero.jpg"
function Contact() {
  return (
    <section className='min-h-screen'>
    <div className='bg-transparent top-0 w-full h-[400px] relative bg-cover bg-center text-gray-50 bg-[image:var(--banner-image)]' 
    style={{ '--banner-image': `url(${bannerImg})`}} >
      <h1 className="lg:text-5xl text-2xl font-bold text-pink-500 lg:py-32 py-20 text-center">
          Launch Your Product with a Cool Landing Page
        </h1>
        <p className=" flex justify-center items-center mb-8 text-gray-900 text-xl px-6">
          Your 1-2 sentence elevator pitch for what your product does and why goes here. Be concise, get to the point, don't use jargon.
        </p>  
    </div>
    <div className='w-full my-4 max-w-4xl mx-auto'>
      <h2 className='text-center text-3xl  font-bold'>Contact Form</h2>
      <div className='flex justify-between item-centers mt-10'>
      <div className='text-2xl w-full'>Address</div>
      
      <div className='w-full max-w-[500px]'>
     <form>
      
      <div className="input-box">
        <label>First Name</label><br/>
        <input type="text" className='field w-full h-10' placeholder='Enter your Name' required/>
      </div>
      <div className="input-box">
        <label>Email</label><br/>
        <input type="email" className='field w-full h-10' placeholder='Enter your Email' required/>
      </div>
      <div className="input-box">
        <label>Mobile No.</label><br/>
        <input type="text" className='field w-full h-10' placeholder='Enter your Mobile' required/>
      </div>
      <div className="input-box">
        <label>Message</label><br/>
        <textarea name='' id='' className='field w-full h-16' placeholder='Enter your message' required></textarea>
      </div>
      <button type='submit' className='cursor-pointer bg-teal-500 w-full h-10 border-none rounded-xl border-'>Send Message</button>
     </form>
     </div>
     </div>
     </div>
    </section>
  )
}

export default Contact