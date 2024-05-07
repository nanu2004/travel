import "animate.css";
import { useState, useEffect } from "react";
import firstSlide from "../../assets/slider-3.jpg";
import secondSlide from "../../assets/slider-4.jpg";
import thirdSlide from "../../assets/slider-5.jpg";
import { NavLink } from "react-router-dom";

export function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle manual slide navigation
  const handlePrev = () => {
    const newIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
  };

  // Function to handle automatic slide transitions
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [activeIndex]); // Re-run effect when activeIndex changes

  const slides = [firstSlide, secondSlide, thirdSlide];

  return (
    <div style={{ marginTop: "20px" }}>
      <div className="container-fluid p-0">
        <div
          id="header-carousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-item ${
                  index === activeIndex
                    ? "active animate__animated animate__fadeIn animate__faster"
                    : "animate__animated animate__fadeOut animate__faster"
                }`}
              >
                <img
                  className="w-100 hero-img animate__animated animate__zoomIn"
                  src={slide}
                  alt="Image"
                  style={{ height: "600px" }} // Increase the height here
                />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: "900px" }}>
                    <h4
                      className={`text-white text-uppercase mb-md-3 animate__animated animate__fadeInLeft ${
                        index === 0 ? "animate__delay-1s" : "animate__delay-2s"
                      }`}
                    >
                      {index === 0 ? "Welcome to Travels" : "Tours & Travel"}
                    </h4>
                    <h1
                      className={`display-3 text-white mb-md-4 animate__animated animate__fadeInRight ${
                        index === 0 ? "animate__delay-1s" : "animate__delay-2s"
                      }`}
                    >
                      {index === 0
                        ? "Let's Discover The World Together"
                        : "Discover Amazing Places With Us"}
                    </h1>
                    <NavLink
                      href=""
                      className="btn btn-primary py-md-3 px-md-5 mt-2 animate__animated animate__fadeInUp animate__delay-3s"
                    >
                      Book Now
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="carousel-control-prev"
            data-slide="prev"
            onClick={handlePrev}
          >
            <div
              className="btn btn-dark"
              style={{ width: "45px", height: "45px" }}
            >
              <span className="carousel-control-prev-icon mb-n2"></span>
            </div>
          </div>
          <div
            className="carousel-control-next"
            data-slide="next"
            onClick={handleNext}
          >
            <div
              className="btn btn-dark"
              style={{ width: "45px", height: "45px" }}
            >
              <span className="carousel-control-next-icon mb-n2"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
