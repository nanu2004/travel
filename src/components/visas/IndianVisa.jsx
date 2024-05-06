import "../../stylefiles/indian-visa.css";
import "animate.css";
import IndianImg from "../../assets/indian-visa.jpg";
function IndianVisa() {
  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <div
        style={{ margin: "16px 0", position: "relative" }}
        className="animate__animated animate__fadeInBottomRight animate__fadeIn"
      >
        <img
          src={IndianImg}
          alt="Indian-Img"
          style={{ width: "100%", height: "450px", objectFit: "cover" }}
        />
        <div className="indian-tour-show animate__animated animate__zoomInDown animate__delay-2s">
          <h1
            style={{
              color: "white",
              fontFamily: "fantasy",
              letterSpacing: "4px",
            }}
          >
            Want to Travel India?
          </h1>
        </div>
      </div>
      <div>
        <div
          className="elementor-element"
          data-id="3a81ec2"
          data-element_type="widget"
          data-widget_type="elementskit-heading.default"
        >
          <div className="elementor-widget-container">
            {/*  */}
            <div
              className="heading-main-design animate__animated animate__fadeInDown"
              style={{ margin: "16px 0" }}
            >
              <h1>
                Indian Visa Services
                <span style={{ display: "block" }}>Travel to India</span>
              </h1>
            </div>
          </div>
        </div>
        <div
          className="elementor-element"
          data-id="70f266f"
          data-element_type="widget"
          data-widget_type="text-editor.default"
        >
          <div>
            {" "}
            Planning a trip to India? Guru Kirpa Travels simplifies the visa
            process, making your Indian journey hassle-free. Whether you’re a
            tourist, business traveler, or returning expatriate, we help you
            obtain the required visa quickly. India’s diverse culture and
            stunning landscapes await you. Our experienced team guides you every
            step of the way. Additionally, we offer expert advice on travel
            insurance for your peace of mind.{" "}
          </div>
        </div>
        <div
          className="elementor-element"
          data-id="a79e7c8"
          data-element_type="widget"
          data-widget_type="icon-list.default"
        >
          <div>
            <ul className="indian-ui">
              <li>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="icon icon-checked1 svgStyle color-main"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
                <span>Guru Kirpa Travels is your gateway to India</span>
              </li>
              <li>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="icon icon-checked1 svgStyle color-main"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
                <span>
                  Unlock your Indian travel dreams effortlessly with us
                </span>
              </li>
              <li>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="icon icon-checked1 svgStyle color-main"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
                <span>Travel Insurance for a worry free trip</span>
              </li>
              <li>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="icon icon-checked1 svgStyle color-main"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
                <span>Visa Made Easy - For Indians and Non-Indians</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndianVisa;
