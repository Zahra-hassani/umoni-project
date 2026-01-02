import React from 'react'
import Slider, { type Settings} from 'react-slick'

const settings:Settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 400,
    cssEase: "linear",
    speed: 1800,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

function OurBrand() {
  return (
    <div className='h-fit w-full flex flex-col justify-center items-center p-4 gap-5'>
      <h1 className="text-xs font-sans font-semibold lg:font-bold text-center uppercase">our brand</h1>
      <h2 className='text-3xl font-bold md:text-5xl font-sans text-center'>30 Brilliant New Items For Home</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-4 md:p-8">
        <img src="./product-3-1.jpg" alt="product-1" className='lg:col-span-1 lg:row-span-1' />
        <img src="./product-5-1.jpg" alt="product-2" className='lg:col-span-2 lg:row-span-2' />
        <img src="./product-18-1.jpg" alt="product-3" className='lg:col-span-1 lg:row-span-1' />
        <img src="./product-6-1.jpg" alt="product-4" className='lg:col-span-1 lg:row-span-1' />
        <img src="./product-4-1.jpg" alt="product-5" className='lg:col-span-1 lg:row-span-1' />
      </div>
      <div className='w-full'>
      <Slider {...settings}>
            <div>
                <img src="./brand-1.png" alt="" className="h-fit w-fit object-cover" />
            </div>
            <div>
                <img src="./brand-2.png" alt="" className="h-fit w-fit object-cover" />
            </div>
            <div>
                <img src="./brand-3.png" alt="" className="h-fit w-fit object-cover" />
            </div>
            <div>
                <img src="./brand-4.png" alt="" className="h-fit w-fit object-cover" />
            </div>
            <div>
                <img src="./brand-5.png" alt="" className="h-fit w-fit object-cover" />
            </div>
            <div>
                <img src="/brand-6.png" alt="" className="h-fit w-fit object-cover" />
            </div>
      </Slider>
      </div>
    </div>
  )
}

export default OurBrand
