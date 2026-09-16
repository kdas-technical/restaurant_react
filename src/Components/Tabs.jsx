import React from 'react'
import { useState } from 'react'
const Tabs = () => {
   const [activeTab , setActiveTab] =useState()
    const tabs =["tab1","tab2" ,"tab3" ,"tab4"]
    const contents=["content1","content2","content3","content4"]
  return (
    <div className='w-full h container mx-auto'>
    <div className='flex justify-center items-center gap-3'>
     {tabs.map(((tab,index) =>
     <button key = {'tab_$(index)'} className={`px-4 py-3 $(activeTab===index?'bg-blue-800 text-white':'') hover:bg-blue-500`}>{tab}
    </button>
    ))}
    </div>
    <div className='flex flex-col mx-auto'>
      {}
    <div key={(`content_$(index)`)}> contain</div>
    <div> contain</div>
    <div> contain</div>
    <div> contain</div>
    </div>
    </div>
  )
}

export default Tabs