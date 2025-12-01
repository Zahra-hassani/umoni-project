import { Link } from "react-router-dom"


function Notfound() {
  return (
    <div className="h-fit w-full md:h-[400px] lg:h-[80%] flex justify-center flex-col items-center gap-4 p-5">
      <h1 className="text-3xl md:text-4xl lg:text-9xl">404</h1>
      <h2 className="text-2xl md:text-3xl lg:text-4xl after:content-[''] after:h-px relative after:absolute after:bottom-0 after:left-[30%] md:after:left-[40%] pb-5 after:w-30 after:bg-gray-300">Oops!That page can't be found</h2>
      <p className="text-[14px] font-light text-center">We're really sorry but we can't seem to find the page you were looking for.</p>
      <button className="px-6 py-2 font-medium hover:bg-black hover:text-white border transition-all duration-300"><Link to="/">Back The Homepage</Link></button>
    </div>
  )
}

export default Notfound
