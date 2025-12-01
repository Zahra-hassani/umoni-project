import Arrivals from "@/mycomponents/Arrivals"
import Banner from "@/mycomponents/Banner"
// import Features from "@/mycomponents/Features"
import Hero from "@/mycomponents/Hero"
import TopSofas from "@/mycomponents/TopSofas"


function Home() {
  return (
    <div>
      <Hero />
      <Arrivals />
      <Banner />
      <TopSofas />
      {/* <Features /> */}
    </div>
  )
}

export default Home
