import React from 'react'

function OurTeam() {
    const team:{id:number, imgUrl: string, name: string, role: string}[] = [
        {
            id: 1,
            imgUrl: "./ourteam-1.jpg",
            name: "Nicolette Ritonni",
            role: "Fine ceramics"
        },
        {
            id: 2,
            imgUrl: "./ourteam-2.jpg",
            name: "Juliette Masse",
            role: "Store manager"
        },
        {
            id: 3,
            imgUrl: "./ourteam-3.jpg",
            name: "Nicolas Waldau",
            role: "Architect"
        },
        {
            id: 4,
            imgUrl: "./ourteam-4.jpg",
            name: "Yeung Ngai",
            role: "Designer"
        },
    ]
  return (
    <div className='flex flex-col items-center gap-5 py-5 px-4 w-full h-fit'>
      <h1 className="font-bold text-2xl text-center">Meet Our Team</h1>
      <p className='text-[14px] font-sans text-center font-light'>We're A Passoinate Team Of Creatives, Dedicated To Turning Ideas Into Imapactful Results.</p>
      <div className="grid grid-cols-4 gap-4 p-4">
        {team.map((member)=>(
            <div key={member.id} className='flex flex-col gap-2'>
                <img src={member.imgUrl} alt="" />
                <h1 className="font-semibold text-xl">{member.name}</h1>
                <p className='text-[12px] font-sans font-extralight'>{member.role}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default OurTeam
