import { Globe2, Package, Phone } from 'lucide-react'


function BestFeatures() {
  return (
    <div className='flex flex-col p-4 items-center gap-4 bg-amber-500/25 w-full h-fit'>
      <h1 className="font-bold font-sans text-center text-2xl">We're Solving The Biggest Problems In Furniture</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className='flex flex-col items-center gap-4 p-3'>
                <Globe2 size={34} />
                <h1 className="font-semibold text-center text-xl">Fast & Free Shipping</h1>
                <p className='text-[12px] font-sans text-center font-extralight'>Every single order ships for free. No minimums, no tiers, no fine print whatsoever.</p>
            </div>
            <div className='flex flex-col items-center gap-4 p-3'>
                <Phone size={34} />
                <h1 className="font-semibold text-center text-xl">Modular, Easy-To-Move Design</h1>
                <p className='text-[12px] font-sans text-center font-extralight'>Our innovative modular design is driven by the belief that furniture should fit this home, anf the next one.</p>
            </div>
            <div className='flex flex-col items-center gap-4 p-3'>
                <Package size={34} />
                <h1 className="font-semibold text-center text-xl">Durable, Premium Materials</h1>
                <p className='text-[12px] font-sans text-center font-extralight'>We use materials like sustainably-forested wood, strengthened steel hardware, and top-grain italian leather.</p>
            </div>
      </div>
    </div>
  )
}

export default BestFeatures
