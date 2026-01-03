import BestFeatures from "@/mycomponents/BestFeatures"
import HeroShare from "@/mycomponents/HeroShare"
import OurBrand from "@/mycomponents/OurBrand"
import OurTeam from "@/mycomponents/OurTeam"


function About() {
  return (
    <div>
      <HeroShare title="About" />
      <OurBrand />
      <BestFeatures />
      <OurTeam />
    </div>
  )
}

export default About
