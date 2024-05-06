import "./../stylefiles/our-success.css";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import "animate.css";
import { useState } from "react";

function OurSuccess() {
  const [countOn, setCountOn] = useState(false);
  return (
    <div style={{ width: "95%", margin: "0 auto" }} className="success">
      <ScrollTrigger
        onEnter={() => setCountOn(true)}
        onExit={() => setCountOn(false)}
      >
        <div style={{ marginTop: "100px", marginBottom: "100px" }}>
          <div className="heading-main-design animate__animated animate__fadeInDown">
            <h1>
              Our Success
              <span style={{ display: "block" }}>Our Top Success</span>
            </h1>
          </div>
          <div className="OurSuccessContainer">
            <ul style={{ fontSize: "21px" }}>
              <li>
                <span>Working Since</span>
                <h4 className="animate__animated animate__fadeIn">2016</h4>
              </li>
              <li>
                <span>Happy Clients</span>
                <h4 className={`animate__animated animate__fadeIn`}>
                  {countOn && <CountUp start={0} end={1000} duration={3} />}+
                </h4>
              </li>
              <li>
                <span>Recent Achievements</span>
                <h4 className="animate__animated animate__fadeIn">
                  {countOn && <CountUp start={0} end={130} duration={3} />} +
                </h4>
              </li>
            </ul>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
}

export default OurSuccess;
