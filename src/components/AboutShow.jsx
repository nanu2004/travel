import aboutShow from "./../assets/slider-6.jpg";
import "./../stylefiles/card.css";
import PropTypes from "prop-types";
import OurSuccess from "./OurSuccess";
import { NavLink } from "react-router-dom";
import "animate.css";

const data = [
  {
    title: "Experienced",
    content:
      "Years of industry expertise ensure meticulous planning for unforgettable journeys.",
  },
  {
    title: "Dedicated",
    content:
      "Committed to exceeding expectations with personalized service and round-the-clock support.",
  },
  {
    title: "Simple",
    content:
      "Streamlined booking process and user-friendly platform for hassle-free travel planning.",
  },
  {
    title: "Partnership",
    content:
      "Collaborative approach to crafting bespoke experiences that reflect your unique desires.",
  },
];

export function AboutShow() {
  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <div className="top-heading">
        <h1 className="mainHeading m-50">About us</h1>
      </div>
      <div className="container-fluid py-5">
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-6" style={{ minHeight: "500px" }}>
              <div className="position-relative h-100 animate__animated animate__fadeInLeft ">
                <img
                  className="position-absolute w-100 h-100"
                  src={aboutShow}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-6 pt-5 pb-lg-5">
              <div className="about-text bg-white p-4 p-lg-5 my-lg-5">
                <h3
                  className="text-primary text-uppercase"
                  style={{ letterSpacing: "5px", fontSize: "26px" }}
                >
                  About Us
                </h3>
                <h1 className="mb-3" style={{ margin: "4px 0" }}>
                  Unveil Your Journey: Discover the World with Us
                </h1>
                <p>
                  Embark on a voyage of unparalleled experiences with [Your
                  Travel Agency Name]. We are not just another travel agency; we
                  are your ultimate gateway to exploration, adventure, and
                  unforgettable memories. At [Your Travel Agency Name], we
                  believe that travel is not just about reaching a destination;
                  it&apos;s about the journey, the moments, and the stories that
                  unfold along the way. With a passion for crafting bespoke
                  itineraries and a commitment to unparalleled service, we
                  invite you to join us as we redefine the art of travel.
                </p>
                <p>
                  At [Your Travel Agency Name], our mission is simple: to
                  transform your travel dreams into reality. Whether
                  you&lsquo;re yearning for a sun-kissed beach escape, an
                  exhilarating trek through rugged terrain, or a cultural
                  immersion in a bustling metropolis, we have the expertise and
                  resources to curate a journey that reflects your unique
                  desires and aspirations. What sets us apart? It&lsquo;s our
                  unwavering dedication to personalized service and attention to
                  detail. From the moment you reach out to us, our team of
                  seasoned travel experts will work tirelessly to understand
                  your preferences, interests, and budget, crafting a
                  tailor-made itinerary that exceeds your expectations.
                </p>
                <div className="row mb-4">
                  <div className="col-6">
                    <img className="img-fluid" src="img/about-1.jpg" alt="" />
                  </div>
                  <div className="col-6">
                    <img className="img-fluid" src="img/about-2.jpg" alt="" />
                  </div>
                </div>
                <NavLink to="/" className="btn btn-primary mt-1">
                  Book Now
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="heading-main-design animate__animated animate__fadeInDown">
        <h1>
          Why choose us
          <span style={{ display: "block" }}>here is the Reason</span>
        </h1>
      </div>

      <div
        className="flexStyle"
        style={{
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
          marginTop: "30px",
        }}
      >
        {data.map((item, index) => (
          <Box key={index} title={item.title} content={item.content} />
        ))}
      </div>

      {/*  */}
      <OurSuccess />
    </div>
  );
}

function Box({ title, content }) {
  return (
    <div style={{ width: "250px" }}>
      <div className="container-card">
        <div className="box">
          <span className="title">{title}</span>

          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

Box.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
