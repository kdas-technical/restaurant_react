import React from 'react'
import {BsStarFill} from 'react-icons/bs';
import {BsStarHalf} from 'react-icons/bs';
import Button from './Button';
const DishesCard = (props) => {
  return (
    <div className='w-full lg:w-1/4 p-5 rounded-lg'>
    <img className='w-full rounded-full md:w-56 aspect-square object-cover mx-auto' src={props.img} alt="img" />   
    <div className='space-y-4'>
    <h3 className='text-center text-bold text-xl pt-6'> {props.title} </h3>
    <div className='flex flex-row justify-center'>
    <BsStarFill className='text-orange-500' />
    <BsStarFill className='text-orange-500' />
    <BsStarFill className='text-orange-500' />
    <BsStarFill className='text-orange-500' />
    <BsStarHalf className='text-orange-500' />
    </div>
    <div className='flex flex-row justify-center items-center'>
        <h3 className='font-semibold text-center px-2'>{props.price} </h3>
        <Button title='Buy Now'> </Button>
    </div>
        
    </div>    
    </div>
  )
}

export default DishesCard