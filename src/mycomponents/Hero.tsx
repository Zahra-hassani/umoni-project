import { motion } from "framer-motion";
import Slider, { type Settings } from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings:Settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


function Hero() {
  return (
    <div className="lg:h-screen md:h-[500px] h-1/2 w-full relative">
      <motion.div 
      initial={{x: 0, opacity:1}}
      whileInView={{x: 0,opacity: 1}}
      transition={{ duration: 500}}
      className="bg-black/30 absolute z-30 top-0 left-0 flex justify-center flex-col items-start text-white gap-6 h-[400px] md:h-[500px] w-full p-19">
        <span className="text-[12px] font-medium uppercase">Top Trending</span>
        <h1 className="text-5xl font-bold">Lifestyle</h1>
        <p>Upgrade your home with our amazing assotment of decor.</p>
        <button className="px-6 py-2 bg-black text-white font-bold text-base hover:text-black hover:bg-white transition-all duration-300">Explore Now</button>
      </motion.div>
      <div>
      <Slider {...settings}>
            <div>
                <img src="./bg-5.jpg" alt="" className="md:h-[500px] h-[400px] w-full object-cover" />
            </div>
            <div>
                <img src="./bg-2.jpg" alt="" className="md:h-[500px] h-[400px] w-full object-center" />
            </div>
            <div>
                <img src="./bg-3.jpg" alt="" className="md:h-[500px] h-[400px] w-full object-cover" />
            </div>
      </Slider>
      </div>
    </div>
  )
}

export default Hero
