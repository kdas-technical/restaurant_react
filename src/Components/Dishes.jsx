import React from 'react'
import DishesCard from './DishesCard';
import img1 from "./../assets/images/dishes/item1.jpg"
import img2 from "./../assets/images/dishes/item2.jpg"
import img3 from "./../assets/images/dishes/item3.jpg"
import img4 from "./../assets/images/dishes/item4.jpg"
const Dishes = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5'>
     <h1 className='text-center text-4xl font-semibold pt-20 pb-10'> Our Dishes </h1>   
    <div className='flex flex-wrap gap-8 justify-center'>
      <DishesCard img= {img1} title="Tasty Dish" price="$10.10" />
      <DishesCard img= {img2} title="Tasty Dish" price="$10.10" />
      <DishesCard img= {img3} title="Tasty Dish" price="$10.10" />
      <DishesCard img= {img4} title="Tasty Dish" price="$10.10" /> 
      <DishesCard img= {img1} title="Tasty Dish" price="$10.10" />
      <DishesCard img= {img2} title="Tasty Dish" price="$10.10" />
      
    </div>    
    </div>
  )
}

export default Dishes