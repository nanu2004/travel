import { AboutShow } from "../AboutShow";
// import OurSuccess from "../OurSuccess";
import { Slider } from "../slider/Slider";
import Testimonials from "./Testimonials";
import TravelServices from "./TravelServices";

function Home() {
  return (
    <div>
      <Slider />
      <AboutShow />
      <TravelServices />
      {/* <OurTours /> */}
      {/* <OurSuccess /> */}
      <Testimonials />
    </div>
  );
}

export default Home;
