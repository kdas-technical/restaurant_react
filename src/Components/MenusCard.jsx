import React from 'react'
import img1 from "./../assets/images/menus/item1.jpg"
import img2 from "./../assets/images/menus/item2.jpg"
import img3 from "./../assets/images/menus/item3.jpg"
import img4 from "./../assets/images/menus/item4.jpg"

const MenuCard = () => {
  const MenuData=[
    { id : 1,
     img: img1,
     name:'Biryani',
     price:"$30",
     descripton:"lorem ipsum lorem ipsum",
    },
    { id : 2,
     img: img2,
     name:'Chiken kari',
     price:"$20",
     descripton:"lorem ipsum lorem ipsum",
    },
    { id : 3,
     img: img3,
     name:'Cold Cofee',
     price:"$10",
     descripton:"lorem ipsum lorem ipsum",
    },
    { id : 4,
     img: img4,
     name:'Mutton Kabab',
     price:"$40",
     descripton:"lorem ipsum lorem ipsum",
    }
  
   ] 
 return (
   <>
   <div className='py-20 px-6'>
    
     { /* card section */}
     <div className='max-w[400px]'>
      <div className='flex flex-wrap gap-8 justify-between'>
      {MenuData.map(({id,img,name,price,description}) =>{ 
       return(
       <div key={id}>
         <div className='h-[100px]'>
           <img className='max-w-[200px] mx-auto block' src={img} alt=""/>
            </div>
            <div className='h-[100px] text-center'>
             <h1 className='text-xl font-bold'>{name} </h1>
             <h2 className='text-xl font-bold'>{price} </h2>
             <p className='text-gray-500 text-sm'> {description }</p>
             </div>
   </div>
       
)})}
     </div>
   </div>
   </div>
   </>
 )
}

export default MenuCard

