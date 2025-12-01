import { Dribbble, FacebookIcon, Instagram, TwitterIcon } from "lucide-react";
import { useState } from "react"
import { Link } from "react-router-dom"


function Footer() {
    const [email,setEmail] = useState("");
  return (
    <div className="flex justify-between flex-col border-t border-gray-300 items-center gap-10 p-4 bg-gray-100 h-fit w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-3">
        <div className="flex justify-between flex-col gap-5">
            <h4 className="font-bold text-xl">Do You Need Help?</h4>
            <div>
            <p className="font-light text-[14px]">Mollura & C. SpA</p>
            <p className="font-light text-[14px]">S.S. 114Km 6400 98128 Tremestieri</p>
            <p className="font-light text-[14px]">Messina - Italy</p>
            </div>
            <div>
                <p className="font-bold">www.umonigroup.com</p>
                <p className="font-bold">(08)89421299</p>
            </div>
        </div>
        <div className="flex justify-between flex-col gap-2">
            <h4 className="text-xl font-bold">Links</h4>
            <Link className="hover:px-4 transition-all duration-300" to="/shop">Shop</Link>
            <Link className="hover:px-4 transition-all duration-300" to="/blog">Blogs</Link>
            <Link className="hover:px-4 transition-all duration-300" to="/about">About</Link>
            <Link className="hover:px-4 transition-all duration-300" to="/contact">Contact</Link>
        </div>
        <div className="flex justify-between flex-col gap-3">
            <h4 className="font-bold text-xl">Newletter</h4>
            <p className="font-light text-[14px]">Sign up for newsletter and get 10% cash back offer</p>
            <form className="flex justify-between w-full gap-4">
                <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" className="border-b-2 w-[90%] border-black px-2 py-1" placeholder="Email address..." />
                <button className="border-b-2 px-4 border-black hover:bg-black hover:text-white transition-all duration-300">Subscribe</button>
            </form>
            <div className="flex justify-between gap-3">
                <span className="text-center px-4 py-4 bg-gray-200 hover:bg-black hover:text-white transition-all duration-300 group rounded-full"><FacebookIcon className="group-hover:rotate-y-360 duration-300" /></span>
                <span className="text-center px-4 py-4 bg-gray-200 hover:bg-black hover:text-white transition-all duration-300 group rounded-full"><TwitterIcon className="group-hover:rotate-y-360 duration-300" /></span>
                <span className="text-center px-4 py-4 bg-gray-200 hover:bg-black hover:text-white transition-all duration-300 group rounded-full"><Instagram className="group-hover:rotate-y-360 duration-300" /></span>
                <span className="text-center px-4 py-4 bg-gray-200 hover:bg-black hover:text-white transition-all duration-300 group rounded-full"><Dribbble className="group-hover:rotate-y-360 duration-300" /></span>
            </div>
        </div>
      </div>
      <div className="flex justify-between gap-3">
        <p className="text-gray-500">&copy;2025 Umoni . All rights reserved.</p>
        <img src="./payment-product.jpg" alt="" />
      </div>
    </div>
  )
}

export default Footer
