import { ChevronRight } from "lucide-react"
interface Child {
    title:string,
}


const HeroShare: React.FC<Child> = ({ title }) => {
  return (
    <div className="h-2/3 w-full flex justify-center flex-col items-center gap-4 py-26 text-3xl font-bold bg-[url(./bg-breadcrumb.jpg)] bg-no-repeat bg-center">
      <h1 className="text-4xl text-transparent bg-conic-120 from-40% from-transparent bg-clip-text to-60% to-amber-700 bg-size-[700%] bg-left animate-right">{title}</h1>
      <div className="flex">
      <h1 className="text-white">Home</h1>
      <ChevronRight size={36}  className="text-amber-700 translate-y-1.5 font-bold"/>
      <h1 className="text-amber-700">{title}</h1>
      </div>
    </div>
  )
}

export default HeroShare
