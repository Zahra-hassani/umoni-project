import { Heart, ShoppingBagIcon } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

type product = {
  id: number,
  name: string,
  price: number,
  imgUrl: string
}

const products:product[] = [
  {
    id: 1,
    name: "Africa Chair",
    price: 100.00,
    imgUrl: "./product-1.jpg",
  },
  {
    id: 9,
    name: "Boho Chair",
    price: 40.00,
    imgUrl: "./product-9.jpg",
  },
  {
    id: 19,
    name: "Bold Stool",
    price: 100.00,
    imgUrl: "./product-19.jpg",
  },
  {
    id: 2,
    name: "Chair Ele",
    price: 500.00,
    imgUrl: "./product-2.jpg",
  },
  {
    id: 13,
    name: "Clam Chair",
    price: 200.00,
    imgUrl: "./product-13.jpg",
  },
  {
    id: 17,
    name: "Clifton Cabinet",
    price: 1250.00,
    imgUrl: "./product-17.jpg",
  },
  {
    id: 4,
    name: "Cubist Table Lamp",
    price: 200.00,
    imgUrl: "./product-4.jpg",
  },
  {
    id: 3,
    name: "Daumiller Dining Armchair",
    price: 400.00,
    imgUrl: "./product-3.jpg",
  },
  {
    id: 5,
    name: "Equinox Pendant",
    price: 259.00,
    imgUrl: "./product-5.jpg",
  },
  {
    id: 11,
    name: "Etcetera Easy Chair",
    price: 1000.00,
    imgUrl: "./product-11.jpg",
  },
  {
    id: 18,
    name: "Lantern Sconce",
    price: 100.00,
    imgUrl: "./product-17.jpg",
  },
  {
    id: 16,
    name: "Matin Table Lamp",
    price: 100.00,
    imgUrl: "./product-16.jpg",
  },
  // {
  //   id: 6,
  //   name: "",
  //   price: 100,
  //   imgUrl: "./product-6.jpg",
  // },
  // {
  //   id: 7,
  //   name: "",
  //   price: 100,
  //   imgUrl: "./product-7.jpg",
  // },
  // {
  //   id: 8,
  //   name: "",
  //   price: 100,
  //   imgUrl: "./product-8.jpg",
  // },
  // {
  //   id: 10,
  //   name: "",
  //   price: 100,
  //   imgUrl: "./product-10.jpg",
  // },
  // {
  //   id: 12,
  //   name: "Plautino Side Table",
  //   price: 100.00,
  //   imgUrl: "./product-12.jpg",
  // },
  // {
  //   id: 14,
  //   name: "",
  //   price: 100,
  //   imgUrl: "./product-14.jpg",
  // },
  // {
  //   id: 15,
  //   name: "",
  //   price: 100,
  //   imgUrl: "./product-15.jpg",
  // },
  // {
  //   id: 20,
  //   name: "Africa Chair",
  //   price: 100,
  //   imgUrl: "./product-1-1.jpg",
  // },
  // {
  //   id: 21,
  //   name: "Clam Chair",
  //   price: 100,
  //   imgUrl: "./product-13-2.jpg",
  // },
  // {
  //   id: 22,
  //   name: "",
  //   price: 100,
  //   imgUrl: "./product-2-1.jpg",
  // },
  // {
  //   id: 23,
  //   name: "",
  //   price: 100,
  //   imgUrl: "./product-4-3.jpg",
  // },
];

function Products() {
  return (
    <div className='p-4 w-full flex flex-col items-center gap-4'>
      <h1 className="font-bold text-center text-3xl lg:text-4xl">Our Products</h1>
      <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus repudiandae quo assumenda quae iure.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {products.map((product) =>(
            <div key={product.id} className="flex flex-col gap-2 relative group">
                <img src={product.imgUrl} alt="" className="h-[80%] w-full" />
                <h2 className="font-bold">{product.name}</h2>
                <p className="text-base">${product.price}</p>
                <div className="absolute top-0 left-0 w-full h-[80%] opacity-0 group-hover:opacity-100 bg-black/10 transition-all duration-300 flex flex-col items-end p-3.5 gap-4">
                    <Heart size={34} className="hover:text-white transition-all duration-300 font-bold group-hover:scale-100 scale-0 hover:bg-white bg-clip-text cursor-pointer" />
                    <Link to="/shop"><ShoppingBagIcon size={34} className="hover:text-white transition-all duration-300 font-bold group-hover:scale-100 scale-0 hover:bg-white bg-clip-text" /></Link>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Products
