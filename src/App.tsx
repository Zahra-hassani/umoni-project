
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./mycomponents/Navbar"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Blog from "./pages/Blog"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Footer from "./mycomponents/Footer"

const products:{id:number,name:string,price:number,imgUrl:string}[] = [
  {
    id: 1,
    name: "Africa Chair",
    price: 100.00,
    imgUrl: "./product-1.jpg",
  },
  {
    id: 2,
    name: "Chair Ele",
    price: 500.00,
    imgUrl: "./product-2.jpg",
  },
  {
    id: 3,
    name: "Daumiller Dining Armchair",
    price: 400.00,
    imgUrl: "./product-3.jpg",
  },
  {
    id: 4,
    name: "Cubist Table Lamp",
    price: 200.00,
    imgUrl: "./product-4.jpg",
  },
  {
    id: 5,
    name: "Equinox Pendant",
    price: 259.00,
    imgUrl: "./product-5.jpg",
  },
  {
    id: 6,
    name: "",
    price: 100,
    imgUrl: "./product-6.jpg",
  },
  {
    id: 7,
    name: "",
    price: 100,
    imgUrl: "./product-7.jpg",
  },
  {
    id: 8,
    name: "",
    price: 100,
    imgUrl: "./product-8.jpg",
  },
  {
    id: 9,
    name: "Boho Chair",
    price: 40.00,
    imgUrl: "./product-9.jpg",
  },
  {
    id: 10,
    name: "",
    price: 100,
    imgUrl: "./product-10.jpg",
  },
  {
    id: 11,
    name: "Etcetera Easy Chair",
    price: 1000.00,
    imgUrl: "./product-11.jpg",
  },
  {
    id: 12,
    name: "Plautino Side Table",
    price: 100.00,
    imgUrl: "./product-12.jpg",
  },
  {
    id: 13,
    name: "Clam Chair",
    price: 200.00,
    imgUrl: "./product-13.jpg",
  },
  {
    id: 14,
    name: "",
    price: 100,
    imgUrl: "./product-14.jpg",
  },
  {
    id: 15,
    name: "",
    price: 100,
    imgUrl: "./product-15.jpg",
  },
  {
    id: 16,
    name: "Matin Table Lamp",
    price: 100.00,
    imgUrl: "./product-16.jpg",
  },
  {
    id: 17,
    name: "Clifton Cabinet",
    price: 1250.00,
    imgUrl: "./product-17.jpg",
  },
  {
    id: 18,
    name: "Lantern Sconce",
    price: 100.00,
    imgUrl: "./product-17.jpg",
  },
  {
    id: 19,
    name: "Bold Stool",
    price: 100.00,
    imgUrl: "./product-19.jpg",
  },
  {
    id: 20,
    name: "Africa Chair",
    price: 100,
    imgUrl: "./product-1-1.jpg",
  },
  {
    id: 21,
    name: "Clam Chair",
    price: 100,
    imgUrl: "./product-13-2.jpg",
  },
  {
    id: 22,
    name: "",
    price: 100,
    imgUrl: "./product-2-1.jpg",
  },
  {
    id: 23,
    name: "",
    price: 100,
    imgUrl: "./product-4-3.jpg",
  },
]

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop products={products} />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
