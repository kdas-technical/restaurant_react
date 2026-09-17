import React, { useMemo, useState } from 'react'
import { X, Maximize2 } from 'lucide-react'
import img1 from '../assets/images/dishes/item1.jpg'
import img2 from '../assets/images/dishes/item2.jpg'
import img3 from '../assets/images/dishes/item3.jpg'
import img4 from '../assets/images/dishes/item4.jpg'
import img5 from '../assets/images/dishes/item5.jpg'
import img6 from '../assets/images/dishes/item6.jpg'
import menu1 from '../assets/images/menus/item1.jpg'
import menu2 from '../assets/images/menus/item2.jpg'
import menu3 from '../assets/images/menus/item3.jpg'
import menu4 from '../assets/images/menus/item4.jpg'
import menu5 from '../assets/images/menus/item5.jpg'
import menu6 from '../assets/images/menus/item6.jpg'

const photos = [
  [img1, 'Signature Pasta', 'Signature'], [menu1, 'Chef Special', 'Chef Picks'],
  [img2, 'Crispy Delight', 'Signature'], [menu2, 'Royal Platter', 'Chef Picks'],
  [img3, 'Golden Bites', 'Starters'], [menu3, 'Garden Fresh', 'Healthy'],
  [img4, 'House Favourite', 'Signature'], [menu4, 'Grilled Special', 'Chef Picks'],
  [img5, 'Fresh & Delicious', 'Healthy'], [menu5, 'Evening Platter', 'Chef Picks'],
  [img6, 'Classic Favourite', 'Signature'], [menu6, 'Dessert Moment', 'Desserts'],
]

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)
  const filters = ['All', 'Signature', 'Chef Picks', 'Starters', 'Healthy', 'Desserts']
  const visible = useMemo(() => filter === 'All' ? photos : photos.filter(([, , category]) => category === filter), [filter])

  return (
    <section id="gallery" className="bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-12">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="font-semibold uppercase tracking-[0.3em] text-amber-400">A taste of our table</p>
            <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">Food worth photographing.</h2>
            <p className="mt-4 leading-7 text-white/60">Explore a selection of dishes from our kitchen, prepared fresh and served with care.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map(item => <button key={item} onClick={() => setFilter(item)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${filter === item ? 'bg-amber-500 text-neutral-950' : 'bg-white/10 text-white/70 hover:bg-white/20'}`}>{item}</button>)}
          </div>
        </div>

        <div className="grid auto-rows-[190px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[210px]">
          {visible.map(([img, title, category], index) => (
            <button key={`${title}-${index}`} onClick={() => setSelected({ img, title, category })} className={`group relative overflow-hidden rounded-3xl text-left ${index % 7 === 0 ? 'col-span-2 row-span-2' : ''}`}>
              <img src={img} alt={title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5">
                <div><p className="text-xs font-semibold uppercase tracking-widest text-amber-300">{category}</p><h3 className="mt-1 text-lg font-bold">{title}</h3></div>
                <span className="rounded-full bg-white/15 p-2 backdrop-blur"><Maximize2 className="h-4 w-4" /></span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-5" onClick={() => setSelected(null)}>
        <button aria-label="Close gallery" onClick={() => setSelected(null)} className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"><X /></button>
        <div className="max-h-[90vh] max-w-5xl" onClick={e => e.stopPropagation()}>
          <img src={selected.img} alt={selected.title} className="max-h-[78vh] w-auto rounded-3xl object-contain shadow-2xl" />
          <div className="pt-4 text-center"><p className="text-xs uppercase tracking-widest text-amber-400">{selected.category}</p><h3 className="mt-1 text-2xl font-bold">{selected.title}</h3></div>
        </div>
      </div>}
    </section>
  )
}
