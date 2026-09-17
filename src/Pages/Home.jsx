import React from 'react'
import Tabs from '../Components/Tabs'
import Banner from '../Components/Banner'
import { Clock3, Leaf, ChefHat, Utensils } from 'lucide-react'
import About from './../Components/About';
import Card from '../Components/MenusCard'
import MenuCard from '../Components/MenusCard'
import Dishes from '../Components/Dishes'
import PremMenu from '../Components/PremMenu'
import Gallery from '../Components/Gallery'
import Testimonial from './../Components/Testimonial';
import Carousel from '../Components/Carousel';
function Home() {
  return (
    <section className='min-h-screen'>
      
      <Banner/>
      <section className="bg-white py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 md:grid-cols-4">
        {[
          [ChefHat, 'Expert Chefs', 'Passion on every plate'],
          [Leaf, 'Fresh Ingredients', 'Quality you can taste'],
          [Utensils, 'Special Recipes', 'Made fresh every day'],
          [Clock3, 'Open Daily', '11:00 AM – 11:00 PM'],
        ].map(([Icon, title, text]) => (
          <div key={title} className="rounded-2xl border border-stone-100 p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <Icon className="mx-auto mb-3 h-8 w-8 text-amber-500" />
            <h3 className="font-bold text-neutral-900">{title}</h3>
            <p className="mt-1 text-sm text-neutral-500">{text}</p>
          </div>
        ))}
      </div>
    </section>
     <About/>
     <Carousel/>
      <Dishes/>
      <PremMenu/>
      <Gallery/>
      <Testimonial/>
      
    </section>
  )
}

export default Home