import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../stylefiles/testimonial.css";
import PropTypes from "prop-types";
import testimonial_1 from "../../assets/test-1.jpg";
import testimonial_2 from "../../assets/test-2.jpg";
import testimonial_3 from "../../assets/test-3.jpg";

const testimonialData = [
  {
    imageSrc: testimonial_1,
    name: "Daniel Clifford",
    designation: "Paris, France",
    review: {
      heading:
        "My trip to Paris with this travel agency was absolutely fantastic! The Eiffel Tower, the Louvre Museum, the delicious food - everything exceeded my expectations. I can't wait to go back!",
      content:
        "I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.",
    },
  },
  {
    imageSrc: testimonial_2,
    name: "Ava Brown",
    designation: "Santorini, Greece",
    review: {
      heading:
        "Santorini is a paradise on Earth, and this travel agency helped me experience it to the fullest. From the breathtaking sunsets to the charming villages, every moment was magical. Thank you for an unforgettable trip!",
      content:
        "I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.",
    },
  },
  {
    imageSrc: testimonial_3,
    name: "John Bouchard",
    designation: "Kyoto, Japan",
    review: {
      heading:
        "My trip to Kyoto was a dream come true, thanks to this travel agency. The temples, the traditional tea houses, the cherry blossoms - it was like stepping into a different world. I'm grateful for the wonderful memories!",
      content:
        "I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.",
    },
  },
];

const TestimonialSlide = ({ imageSrc, name, designation, review }) => (
  <div className="div1 eachdiv" style={{ marginRight: "20px" }}>
    <div className="userdetails">
      <div className="imgbox">
        <img src={imageSrc} alt="" />
      </div>
      <div className="detbox">
        <p className="name">{name}</p>
        <p className="designation">{designation}</p>
      </div>
    </div>
    <div className="review">
      <h4>{review.heading}</h4>
    </div>
  </div>
);

TestimonialSlide.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  review: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

const Testimonials = () => {
  const settings = {
    autoplay: false,
    autoplaySpeed: 1000,
    speed: 600,
    draggable: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <div>
        <div className="heading-main-design animate__animated animate__fadeInDown">
          <h1>
            Testimonials
            <span style={{ display: "block" }}>Our Top Testimonials</span>
          </h1>
        </div>
      </div>
      <div className="testimonial">
        <Slider {...settings}>
          {testimonialData.map((testimonial, index) => (
            <TestimonialSlide {...testimonial} key={index} />
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Testimonials;
