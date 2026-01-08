import { products } from './products'
import { Link } from 'react-router-dom'
import { Heart, ShoppingBagIcon } from 'lucide-react'


function OurProducts() {
    const filteredProducts = products.filter((product) => {
        if(product.id === 6 || product.id === 8 || product.id === 15 || product.id === 14 || product.id > 18 ){
            return "";
        }
        else{
            return {};
        }
    })
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
      {filteredProducts.map((product) => (
        <Link to="/product">
        <div key={product.id} className='flex flex-col gap-2 group relative'>
            <img src={product.imgUrl} alt="" className="h-[80%] w-full" />
                <h2 className="font-bold">{product.name}</h2>
                <p className="text-base">${product.price}</p>
                <div className="absolute top-0 left-0 w-full h-[85%] opacity-0 group-hover:opacity-100 bg-black/10 transition-all duration-300 flex flex-col items-end p-3.5 gap-4">
                    <Heart size={34} className="hover:text-white transition-all duration-300 font-bold group-hover:scale-100 scale-0 hover:bg-white bg-clip-text cursor-pointer" />
                    <Link to="/shop"><ShoppingBagIcon size={34} className="hover:text-white transition-all duration-300 font-bold group-hover:scale-100 scale-0 hover:bg-white bg-clip-text" /></Link>
                </div>
        </div>
        </Link>
      ))}
    </div>
  )
}

export default OurProducts
