import { Link } from "react-router-dom"


function Banner() {
  return (
    <div className="grid grid-cols-1 grid-rows-4 h-fit w-full md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2 gap-2 p-4">
      <div className="col-span-1 row-span-1 lg:h-fit h-full lg:col-span-3 lg:row-span-1 relative">
        <img src="./banner-16.jpg" alt="" className="h-full" />
        <div className="absolute top-0 left-0 text-white h-full w-full flex justify-center flex-col items-center gap-5 bg-black/25">
        <p className="text-base uppercase">trends</p>
        <h3 className="text-2xl font-bold lg:text-3xl">Furniture Trends</h3>
        <Link to="/shop" className="border-b border-white">Shop now</Link>
        </div>
    </div>
        <div className="col-span-1 row-span-1 lg:h-fit h-full lg:col-span-1 lg:row-span-1 relative">
            <img src="./banner-ctg-8.jpg" alt="" className="w-full h-full" />
            <div className="absolute top-0 left-0 text-white h-full w-full flex justify-center flex-col items-center gap-5 bg-black/25">
            <h3 className="text-2xl font-bold lg:text-3xl">Furniture</h3>
            </div>
        </div>
        <div className="col-span-1 row-span-1 lg:h-fit h-full lg:col-span-1 lg:row-span-1 relative">
            <img src="./banner-ctg-9.jpg" alt="" className="w-full h-full" />
            <div className="absolute top-0 left-0 text-white h-full w-full flex justify-center flex-col items-center gap-5 bg-black/25">
            <h3 className="text-2xl font-bold lg:text-3xl">Home Decor</h3>
            </div>
        </div>
        <div className="col-span-1 row-span-1 lg:h-fit h-full lg:col-span-1 lg:row-span-1 relative">
            <img src="./banner-22.jpg" alt="" className="h-[337px] w-full" />
            <div className="absolute top-0 left-0 text-white h-full w-full flex justify-center flex-col items-center gap-5 bg-black/25">
            <h3 className="text-2xl font-bold lg:text-3xl">Lighting</h3>
            </div>
        </div>
      
    </div>
  )
}

export default Banner
