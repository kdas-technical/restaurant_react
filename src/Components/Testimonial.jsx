import React from 'react'
import Slider from 'react-slick';


import img2 from "./../assets/images/slider/slider2.jpg"
import img3 from "./../assets/images/slider/slider3.jpg"


// Custom Prev Arrow utilizing Tailwind utilities
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 text-gray-800 shadow-md hover:bg-gray-100 focus:outline-none transition-all"
    onClick={onClick}
    aria-label="Previous slide"
  >
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

// Custom Next Arrow utilizing Tailwind utilities
const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 text-gray-800 shadow-md hover:bg-gray-100 focus:outline-none transition-all"
    onClick={onClick}
    aria-label="Next slide"
  >
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

const Testimonial = () => {
  const slidesData = [
    { id: 1, title: "Slide One", desc: "Tailwind styled card content.lorem ipsum lorem ipsum.lorem ipsum lorem ipsum.lorem ipsum lorem ipsum.lorem ipsum lorem ipsum.", img: img3 },
    { id: 2, title: "Slide Two", desc: "Seamless slick integrations.lorem ipsum lorem ipsum.lorem ipsum lorem ipsum.lorem ipsum lorem ipsum.lorem ipsum lorem ipsum.", img: img2 },
    { id: 3, title: "Slide Three", desc: "Fully responsive layouts.lorem ipsum lorem ipsum.lorem ipsum lorem ipsum.lorem ipsum lorem ipsum.lorem ipsum lorem ipsum.",  img:img3 },
    { id: 4, title: "Slide Four", desc: "Fully responsive layouts.lorem ipsum lorem ipsum.lorem ipsum lorem ipsum.lorem ipsum lorem ipsum.lorem ipsum lorem ipsum.",  img:img2 },
  ];
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640, // Mobiles
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false // Hide arrows on small displays
        }
      }
    ]
  };
 
  return (
    <div className='container py-1'>
    <div className='text-center text-4xl font-semibold pt-5 pb-0'>
    <h1>Testimonial</h1>
    <p className='text-gray-400 text-lg px-80'> Your 1-2 sentence elevator pitch for what your product does and why goes here. Be concise, get to the point, don't use jargon.</p>
   </div>
      <div className="relative w-full max-w-6xl mx-auto px-4 py-6">
      <Slider {...settings}>
        {slidesData.map((slide) => (
          <div key={slide.id} className="px-2">
            <div className={`flex flex-col justify-center items-center h-64`}>
              <img src={slide.img} alt='img' className=' w-full rounded-full md:w-20 md:h-20 aspect-square object-cover mx-auto' />
              <h3 className="text-2xl font-bold mb-2 text-slate-500">{slide.title}</h3>
              <p className="text-center opacity-90 text-black-500">{slide.desc}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
  
    
  )
}

export default Testimonial