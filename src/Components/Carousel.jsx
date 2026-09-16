import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };
  const products = [
    { id: 1, name: 'Premium Boots', price: '$120', img: './../assets/images/slider/slider1.jpg' },
    { id: 2, name: 'Sport Watch', price: '$85', img: 'https://placeholder.com' },
    { id: 3, name: 'Leather Jacket', price: '$250', img: 'https://placeholder.com' },
    { id: 4, name: 'Running Shoes', price: '$95', img: 'https://placeholder.com' },
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
       <Slider {...settings}>
       {products.map((product) => (
          <div key={product.id} className="p-2"> 
            {/* Slide Card styled with Tailwind */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 p-4 transition-transform duration-300 hover:scale-105">
              <img src={product.img} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="mt-4 text-lg font-bold text-gray-800">{product.name}</h3>
              <p className="text-emerald-600 font-semibold mt-1">{product.price}</p>
            </div>
          </div>
        ))}
      </Slider>
      </div>
  );
}


export default Carousel