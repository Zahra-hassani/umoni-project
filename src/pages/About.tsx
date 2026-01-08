import BestFeatures from "@/mycomponents/BestFeatures"
import HeroShare from "@/mycomponents/HeroShare"
import OurBrand from "@/mycomponents/OurBrand"
import OurTeam from "@/mycomponents/OurTeam"
import Testimonial from "@/mycomponents/Testimonial"


function About() {
  return (
    <div>
      <HeroShare title="About" />
      <OurBrand />
      <BestFeatures />
      <OurTeam />
      <Testimonial />
    </div>
  )
}

export default About
