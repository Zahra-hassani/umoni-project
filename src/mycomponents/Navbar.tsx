
import { Menu, SearchIcon, ShoppingBagIcon, User, X } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
    const [isOpen , setIsOpen] = useState(false);
    const [search , setSearch] = useState(false);
    const list:{href:string, title:string}[] = [
        {
            href: "/",
            title: "Home"
        },
        {
            href: "/shop",
            title: "Shop"
        },
        {
            href: "/blog",
            title: "Blog"
        },
        {
            href: "/about",
            title: "About"
        },
        {
            href: "/contact",
            title: "Contact"
        },
    ]
  return (
    <nav className="h-20 w-full bg-gray-100 z-50 px-4 sticky top-0 left-0">
        {/* computer nav */}
        <div className="h-full w-full md:hidden hidden lg:flex justify-between items-center gap-5">
        <ul className="flex justify-between items-center gap-2">
            {list.map((item,index) =>(
                <li key={index} className="px-3 py-1 text-[14px] font-bold hover:text-gray-600 transition-all duration-300"><Link to={item.href}>{item.title}</Link></li>
            ))}
        </ul>
        <img src="./logo.svg" alt="" />
        <div className="flex justify-between items-center gap-4">
            <SearchIcon size={28} onClick={() => setSearch(!search)} />
            <User size={28} />
            <ShoppingBagIcon size={28} />
        </div>
        </div>
        {/* mobile nav */}
        <div className="relative flex justify-between items-center gap-5 px-4 h-full w-full lg:hidden">
            <img src="./logo.svg" alt="" />
            <ul className={`absolute top-0 left-0 transition-all duration-700 p-4 h-fit w-full ${isOpen?"flex":"hidden"} translate-y-20 translate-x-0 bg-gray-100 flex-col gap-2`}>
                {list.map((item,index)=> (
                    <li key={index} className="px-3 font-bold hover:px- transition-all duration-300"><Link to={item.href}>{item.title}</Link></li>
                ))}
            </ul>
            <div className="flex gap-1">
            <Menu size={28} className={`${isOpen?"hidden":"block"} cursor-pointer transition-all duration-300`} onClick={()=>setIsOpen(!isOpen)} />
            <X size={28} className={`${isOpen?"block":"hidden"} cursor-pointer transition-all duration-300`} onClick={()=> setIsOpen(!isOpen)} />
            </div>
        </div>
            <div className="flex lg:hidden md:justify-evenly justify-between items-center gap-5 px-4 h-20 w-full fixed bottom-0 left-0 bg-gray-100">
                <User size={28} />
                <SearchIcon size={28} onClick={() => setSearch(!search)} />
                <ShoppingBagIcon size={28} />
            </div>
            <div className={`h-screen w-full justify-between p-6 gap-2 absolute top-0 left-0 bg-black/20 backdrop-blur-md z-50 ${search?"flex":"hidden"}`}>
                <div className="flex justify-between md:w-[70%] w-[90%] mx-auto h-fit bg-stone-50 py-3 px-5 gap-4">
                    <input type="text" placeholder="Search here..." className="w-[80%] border-b-2 bg-gray-100 border-black rounded outline-0 px-3 py-1" />
                    <X size={30} onClick={() => setSearch(!search)} />
                </div>
            </div>
    </nav>
  )
}

export default Navbar
