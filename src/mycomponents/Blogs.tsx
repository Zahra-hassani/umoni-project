
 function BlogCard({blog}:{blog:{title:string,imgUrl:string,excerpts:string,description:string}}) {
  return (
    <div className="flex flex-col gap-4" >
            <img src={blog.imgUrl} alt="" className="h-[50%] w-full" />
            <p>Nov 29, 2025</p>
            <h1 className="font-bold text-2xl">{blog.title}</h1>
            <p className="text-[14px] font-light">{blog.excerpts}</p>
            <button className="px-6 py-2 w-fit border font-bold hover:text-white hover:bg-black transition duration-300"><Link to="">Read More <SquareArrowOutUpRight size={20} className="inline" /></Link></button>
        </div>
  )
}


import { SquareArrowOutUpRight } from "lucide-react";
import { Link } from "react-router-dom"


function Blogs() {
    const furnitureBlogs:{title:string,imgUrl:string,excerpts:string,description:string}[] = [
  {
    title: "Design That Feels Like Home",
    imgUrl:"./blog-1-1.jpg",
    excerpts: "A guide to selecting the right sofa based on style, comfort, and room size.",
    description: "Selecting the perfect sofa involves understanding your space, the level of comfort you prefer, and the style that complements your interior décor. In this blog, we explore different sofa materials, designs, and layout considerations to help you make an informed decision."
  },
  {
    title: "Post format video blogs",
    imgUrl:"./blog-4-1.jpg",
    excerpts: "Explore stylish dining table designs that elevate your dining experience.",
    description: "Modern dining tables blend functionality with aesthetics. From glass tops to solid wood constructions, we review five popular designs that are trending in contemporary homes. Learn what makes each design unique and how to choose one that fits your dining space."
  },
  {
    title: "Post format gallery blogs",
    imgUrl:"./blog-2-1.jpg",
    excerpts: "Tips and tricks to keep your wooden furniture looking new for years.",
    description: "Wooden furniture adds warmth and elegance to any space, but it requires proper care to maintain its beauty. This blog covers cleaning methods, polishing techniques, and preventative measures to protect your furniture from wear, moisture, and damage."
  },
  {
    title: "10 Budget-Friendly Ways to Upgrade Your Interior",
    imgUrl:"./blog-6-1.jpg",
    excerpts: "Smart furniture solutions designed for compact living spaces.",
    description: "Living in a small apartment doesn't mean sacrificing comfort or style. Learn about multipurpose furniture such as folding desks, sofa beds, and extendable tables that help maximize your available space while maintaining an appealing aesthetic."
  },
  {
    title: "Post format audio blogs",
    imgUrl:"./blog-7-1.jpg",
    excerpts: "Why ergonomic chairs are essential for productivity and health.",
    description: "Ergonomic office chairs support proper posture and reduce strain during long work sessions. This blog explains the key features to look for—lumbar support, adjustable height, seat depth—and how they contribute to a healthier and more productive workspace."
  },
  {
    title: "Post format quote blogs",
    imgUrl:"./blog-8.jpg",
    excerpts: "Why ergonomic chairs are essential for productivity and health.",
    description: "Ergonomic office chairs support proper posture and reduce strain during long work sessions. This blog explains the key features to look for—lumbar support, adjustable height, seat depth—and how they contribute to a healthier and more productive workspace."
  },
];

  return (
    <div className="h-fit w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {furnitureBlogs.map((blog ,index)=>(
        <BlogCard blog={blog} key={index} />
      ))}
    </div>
  )
}

export default Blogs
