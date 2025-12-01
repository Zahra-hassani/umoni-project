
import { Facebook, Mail, PhoneCall } from "lucide-react"


function ContactUs() {
  return (
    <div className="flex flex-col items-center gap-3">
        <h1 className="text-white text-2xl md:text-4xl py-6 text-shadow-[0_0_2px,0_0_2px,0_0_2px,0_0_2px] text-shadow-black uppercase">Get in touch</h1>
    <div className="h-fit w-[80%] p-4 grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col gap-3 md:after:h-[90%] md:after:w-px md:after:bg-gray-400 after:hidden relative md:after:top-[5%] md:after:right-0">
        <div className="flex justify-start group items-start gap-4">
            <PhoneCall className="group-hover:animate-call" />
            <p className="text-base group-hover:font-bold">(08)89421299</p>
        </div>
        <div className="flex justify-start group items-start gap-4">
            <Mail className="group-hover:animate-caret-blink" />
            <p className="text-base group-hover:font-bold">www.umonigroup.com</p>
        </div>
        <div className="flex justify-start group items-start gap-4">
            <Facebook className="group-hover:animate-caret-blink" />
            <p className="text-base group-hover:font-bold">Umoni Group</p>
        </div>
        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laudantium esse quibusdam. Quaerat nobis delectus officia nostrum nihil expedita ipsam suscipit nisi, officiis, minima optio eligendi pariatur, voluptatem modi consectetur!</p>
      </div>
      <form className="flex flex-col gap-3 p-4">
        <input type="text" className="px-2 py-1 w-full  border-gray-700 border-2" placeholder="Your name" />
        <input type="text" className="px-2 py-1 w-full  border-gray-700 border-2" placeholder="Subject" />
        <input type="email" className="px-2 py-1 w-full border-2 border-gray-700" placeholder="Email" />
        <textarea className="px-2 py-1 border-2 border-gray-700 h-30 w-full" placeholder="Write your message..."></textarea>
        <button className="px-6 py-2 border-2 border-gray-700 hover:bg-black hover:text-white transition-all duration-300">Send</button>
      </form>
    </div>
    </div>
  )
}

export default ContactUs
