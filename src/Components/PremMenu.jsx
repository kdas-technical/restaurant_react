import React from 'react'
import MenuCard from './MenusCard'
import img1 from "./../assets/images/menus/item1.jpg"
import img2 from "./../assets/images/menus/item2.jpg"
import img3 from "./../assets/images/menus/item3.jpg"
import img4 from "./../assets/images/menus/item4.jpg"


const PremMenu = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5'>
      <div className='text-center text-4xl font-semibold pt-20 pb-10'>
     <h1>Premium Menu</h1>
     <p className='text-gray-400 text-sm'> Your 1-2 sentence elevator pitch for what your product does and why goes here. Be concise, get to the point, don't use jargon.</p>
     <div className='flex flex-row justify-center items-center gap-8'>
     <MenuCard img= {img1} title="Tasty Dish" price="$10.10" />
     <MenuCard img= {img2} title="Tasty Dish" price="$10.10" />
     <MenuCard img= {img3} title="Tasty Dish" price="$10.10" />
     <MenuCard img= {img4} title="Tasty Dish" price="$10.10" />
     </div>

    </div>
    </div>
  )
}

export default PremMenu