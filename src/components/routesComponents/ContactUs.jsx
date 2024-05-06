import { useState } from "react";
import "../../stylefiles/contact-us.css";
function ContactUs() {
  return (
    <div style={{ width: "95%", margin: "0 auto" }}>
      <div
        className="heading-main-design animate__animated animate__fadeInDown"
        style={{ margin: "16px 0" }}
      >
        <h1>
          Contact us
          <span style={{ display: "block" }}>Our Contact us Info</span>
        </h1>
      </div>
      {/* head start */}
      <div className="contact-us">
        <div className="container">
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: "400px" }}
          ></div>
          {/*  */}
          <div style={{ padding: "2px", borderRadius: "3px" }}>
            <h3 className="display-4 text-uppercase" style={{ color: "white" }}>
              Contact
            </h3>
            <div className="step-contact">
              <span>Home</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="svgStyle"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>

              <p className="m-0 text-uppercase">Contact</p>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      {/* head end */}

      {/* <!-- Contact Start --> */}
      <ContactForm />
      {/* <!-- Contact End --> */}
    </div>
  );
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div>
      <div
        className="heading-main-design animate__animated animate__fadeInDown"
        style={{ margin: "26px 0c" }}
      >
        <h1>
          Get In Touch
          <span style={{ display: "block" }}>Fill the contact Form</span>
        </h1>
      </div>
      <div
        className="contact-form-area"
        style={{ width: "80%", margin: "30px auto" }}
      >
        <h3>Contact Us Form </h3>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-12 mb-20">
              <div className="form-inner">
                <label>Name*</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Daniel Scoot"
                  required
                />
              </div>
            </div>
            <div className="col-lg-6 mb-20">
              <div className="form-inner">
                <label>Phone*</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>
            <div className="col-lg-6 mb-20">
              <div className="form-inner">
                <label>Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Us...."
                  required
                />
              </div>
            </div>
            <div className="col-lg-12 mb-30">
              <div className="form-inner">
                <label>Write Your Message*</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What’s on your mind"
                  required
                ></textarea>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-inner">
                <button className="primary-btn1 btn-hover" type="submit">
                  Submit Now
                </button>
              </div>
            </div>
          </div>
        </form>
        {/*  */}
      </div>
      {/* map */}
      <div style={{ margin: "20px 0" }}>
        <div
          className="heading-main-design animate__animated animate__fadeInDown"
          style={{ margin: "16px 0" }}
        >
          <h1>
            Map
            <span style={{ display: "block" }}>Here Our Location</span>
          </h1>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2598782.958070114!2d-104.89481611494084!3d56.13036641230813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537177d664bbd8eb%3A0x1ef473183c6ce167!2sCanada!5e0!3m2!1sen!2sus!4v1564543966718!5m2!1sen!2sus"
          width="600"
          height="450"
          allowfullscreen=""
          style={{ border: 0, width: "100%" }}
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
