

function TopSofas() {
    const sofas:{id:number,name:string,imgUrl:string,price:number}[] = [
        {
            id:1,
            name: "Clam Chair",
            imgUrl: "./product-13.jpg",
            price:200.00
        },
        {
            id:2,
            name: "Bold Stool",
            imgUrl: "./product-19.jpg",
            price:100.00
        },
        {
            id:3,
            name: "Plautino Side Table",
            imgUrl: "./product-12.jpg",
            price:100.00
        },
        {
            id:4,
            name: "Africa Chair",
            imgUrl: "./product-1.jpg",
            price:100.00
        },
    ];
  return (
    <div className="h-fit w-full flex flex-col items-center gap-5 p-4">
      <div className="flex justify-center flex-col items-center gap-3">
        <h2 className="font-bold text-2xl md:text-3xl">Top Sofas Popular</h2>
        <p className="text-center">Unmatched design-superior performance and customer satisfaction in one.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {sofas.map((sofa)=> (
            <div key={sofa.id} className="flex flex-col gap-3">
                <img src={sofa.imgUrl} alt="" className="h-[80%] w-full" />
                <h3 className="font-bold">{sofa.name}</h3>
                <p className="text-base">${sofa.price}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default TopSofas
