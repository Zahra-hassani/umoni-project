import { Star } from "lucide-react";
import type { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

type Testimonial = {
    id: number;
    name: string;
    imgUrl: string;
    feedback: string;
}

const testimonials:Testimonial[] = [
    {
        id: 1,
        name: "Michael C.",
        imgUrl: './test-1.jpg',
        feedback: "What I admire about art is the unexpected, the originality:architecture is of course the context and the home of what we make."
    },
    {
        id: 2,
        name: "Michael C.",
        imgUrl: './test-2.jpg',
        feedback: "What I admire about art is the unexpected, the originality:architecture is of course the context and the home of what we make."
    },
]

const settings:Settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    speed: 100,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          autoplaySpeed: 2000
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay:true,
          autoplaySpeed: 2000
        }
      }
    ]
  };

function Testimonial() {
  return (
    <div className='flex flex-col items-center gap-4 p-4 h-fit w-full'>
      <h1 className='text-3xl lg:text-4xl text-center py-2'>Our Testimonial</h1>
      <p className="font-light">Customers love our products and we always strive to theme all.</p>
      <div className="w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Slider {...settings}>
            <div className="w-full">
                    <p className="font-sans font-bold text-[12px] uppercase">from the people</p>
                    <div className="flex">
                    <Star size={24} className="text-yellow-400" />
                    <Star size={24} className="text-yellow-400" />
                    <Star size={24} className="text-yellow-400" />
                    <Star size={24} className="text-yellow-400" />
                    <Star size={24} className="text-neutral-400" />
                    </div>
                    <p className="text-xl font-semibold">What I admire about art is the unexpected, the originality:architecture is of course the context and the home of what we make.</p>
                    <p className="font-bold"> Michael C.</p>
            </div>
                <div className="h-full w-full">
                    <img src="./test-1.jpg" className="h-full w-full" alt="" />
                </div>
            <div className="w-full">
                    <p className="font-sans font-bold text-[12px] uppercase">from the people</p>
                    <div className="flex">
                    <Star size={24} className="text-yellow-400" />
                    <Star size={24} className="text-yellow-400" />
                    <Star size={24} className="text-yellow-400" />
                    <Star size={24} className="text-yellow-400" />
                    <Star size={24} className="text-neutral-400" />
                    </div>
                    <p className="text-xl font-semibold">What I admire about art is the unexpected, the originality:architecture is of course the context and the home of what we make.</p>
                    <p className="font-bold"> Michael C.</p>
            </div>
                <div className="h-full w-full">
                    <img src="./test-1.jpg" className="h-full w-full" alt="" />
                </div>
            {/* <div className="flex items-center gap-4 p-5">
                <div className="flex flex-col gap-4 p-4">
                    <p className="font-sans font-bold text-[12px] uppercase">from the people</p>
                    <div className="flex">
                    <Star size={24} className="bg-yellow-400" />
                    </div>
                    <p className="text-xl font-semibold">What I admire about art is the unexpected, the originality:architecture is of course the context and the home of what we make.</p>
                    <p className="font-bold"> Michael C.</p>
                </div>
                <div>
                    <img src="./test-2.jpg" className="h-full w-full" alt="" />
                </div>
            </div> */}
        </Slider>
      </div>
    </div>
  )
}

export default Testimonial
