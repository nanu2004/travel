import "../../stylefiles/air-ticket.css";
import ticketImage from "../../assets/air-ticket-1.jpg";
import "animate.css";

function AirTicket() {
  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <div className="heading-main-design animate__animated animate__fadeInDown">
        <h1>
          Air Ticket
          <span style={{ display: "block" }}>Our Top Testimonials</span>
        </h1>
      </div>
      {/* main */}
      <div>
        <div className="animate__animated animate__fadeInLeft">
          <div className="services-fimg">
            <img
              decoding="async"
              src={ticketImage}
              alt="air-ticket image"
              style={{ width: "100%", height: "400px", objectFit: "contain" }}
            />
          </div>
          <div className="section_title_wrapper pt-40 bdevs-el-content">
            <span className="subtitle bdevs-el-subtitle">
              Featured Services
            </span>
            <h2 className="section-title bdevs-el-title">
              Welcome to Guru Kirpa Travels: Your Gateway to Seamless Air
              Travel!
            </h2>
            <p className="pt-30 pb-25 mr-25">
              Are you ready to embark on a new journey? If yes, then we&lsquo;re
              here to turn your travel dreams into reality which will surely
              reduce your big last-minute hassles. It’s because we understand
              that every trip is a unique story that is waiting to unfold, and
              our mission is to turn your travel dreams into reality.
              <br />
              <br />
              And as your trusted travel companion, we specialize in providing
              top-notch air ticket services, ensuring that your journey begins
              with the smoothest takeoff possible. We even ensure that you don’t
              face any kind of travel inconvenience until you reach your final
              destination through our assistance.
            </p>
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 snipcss-1t9dG">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="services-items services-itm-color mb-30 elementor-repeater-item-40fce96">
                <h4 className="services-items__title">
                  {" "}
                  EFFORTLESS FLIGHT BOOKINGS{" "}
                </h4>
                <p>
                  Say goodbye to the hassle of searching for flights. Our
                  experienced team of travel experts is dedicated to finding you
                  the best airfare deals.
                </p>
                <a className="aborder1" href="#">
                  <i className="fal fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="services-items services-itm-color mb-30 elementor-repeater-item-270c8e0">
                <h4 className="services-items__title">
                  {" "}
                  MULTI-DESTINATION ITINERARIES{" "}
                </h4>
                <p>
                  For those with a taste for adventure and a desire to explore
                  multiple destinations, our multi-city itineraries are the
                  perfect solution.{" "}
                </p>
                <a className="aborder1" href="#">
                  <i className="fal fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="services-items services-itm-color mb-30 elementor-repeater-item-f26874f">
                <h4 className="services-items__title">
                  {" "}
                  GROUP TRAVEL COORDINATION{" "}
                </h4>
                <p>
                  Whether it&lsquo;s a family vacation, a corporate trip, or a
                  group of friends exploring the world together, our group
                  travel services are designed to simplify the booking process.
                </p>
                <a className="aborder1" href="#">
                  <i className="fal fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="services-items services-itm-color mb-30 elementor-repeater-item-e4c5272">
                <h4 className="services-items__title">
                  {" "}
                  LAST-MINUTE TRAVEL PLANS{" "}
                </h4>
                <p>
                  Life is full of surprises, and sometimes that includes sudden
                  travel needs. Our team is skilled at handling last-minute
                  bookings, ensuring you can reach your destination.
                </p>
                <a className="aborder1" href="#">
                  <i className="fal fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AirTicket;
