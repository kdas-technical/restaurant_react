import React from 'react'

const Button = (props) => {
  return (
    <div>
    <button className='border-orange-500 border-2 text-orange-600 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300'>    
    { props.title }
    </button>
    
      
    </div>
  )
}

export default Button