

function Arrivals() {
    const arrivals:{id:number, name:string, price:number,imgUrl:string}[] = [
        {
            id:1,
            name: "Matin Table lamp",
            price:100.00,
            imgUrl: "./product-16.jpg"
        },
        {
            id:2,
            name: "Daumiller Dining Armchair",
            price:400.00,
            imgUrl: "./product-3.jpg"
        },
        {
            id:3,
            name: "Clifton Cabinet",
            price:1250.00,
            imgUrl: "./product-17.jpg"
        },
        {
            id:4,
            name: "Lantern Sconce",
            price:100.00,
            imgUrl: "./product-18-2.jpg"
        },
        {
            id:5,
            name: "Etcetera Easy Chair",
            price:1000.00,
            imgUrl: "./product-11-1.jpg"
        },
        {
            id:6,
            name: "Petit 3 Chair",
            price:100.00,
            imgUrl: "./product-7.jpg"
        },
        {
            id:7,
            name: "Africa Chair",
            price:100.00,
            imgUrl: "./product-1.jpg"
        },
        {
            id:8,
            name: "Bold Stool",
            price:100.00,
            imgUrl: "./product-19.jpg"
        }
    ]
  return (
    <div className="h-fit w-full flex flex-col items-center gap-5 p-3">
      <div className="flex justify-center flex-col items-center gap-4">
        <h1 className="font-bold lg:text-4xl md:text-3xl text-2xl">Latest Arrivals</h1>
        <p className="text-base text-center">New arrivals is coming in regularly, find the freshest modern styles here.</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {arrivals.map((item)=>(
            <div key={item.id} className="flex flex-col gap-2">
                <img src={item.imgUrl} alt="" className="h-[80%] w-full" />
                <h2 className="font-bold">{item.name}</h2>
                <p className="text-base">${item.price}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Arrivals
