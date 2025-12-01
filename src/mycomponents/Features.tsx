import Slider, { type Settings } from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Headphones, LucideBanknoteArrowDown, Tag, Truck } from "lucide-react";

const settings:Settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 4,
          autoplay: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
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

function Features() {
  return (
    <div className="h-fit w-full p-4">
      <div>
        <Slider {...settings}>
                <div className="flex justify-center flex-col items-center gap-3 p-4">
                    <Truck  className="font-bold text-base "/>
                    <p className="font-bold text-center">Free Shipping</p>
                    <span className="text-base">On any purchase over $500</span>
                </div>
                <div className="flex flex-col items-center gap-3 p-4">
                    <Headphones />
                    <p className="font-bold text-center">Online Support 24/7</p>
                    <span className="text-base text-center">Support online 24 hours a day</span>
                </div>
                <div className="flex flex-col items-center gap-3 p-4">
                    <LucideBanknoteArrowDown />
                    <p className="font-bold text-center">Money Return</p>
                    <span className="text-base">Back guarantee under 7 days</span>
                </div>
                <div className="flex flex-col items-center gap-3 p-4">
                    <Tag />
                    <p className="font-bold text-center">Member Discount</p>
                    <span className="text-base">On every order over $120</span>
                </div>
        </Slider>
      </div>
    </div>
  )
}

export default Features
