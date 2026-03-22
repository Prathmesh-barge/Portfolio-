import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:prathmeshbarge9@gmail.com" data-cursor="disable">
                prathmeshbarge9@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <div style={{ marginBottom: "1rem" }}>
              <p style={{ margin: "0 0 5px 0" }}><strong>M.Sc. Computer Science</strong> <br /> (2023 – 2025)</p>
              <p style={{ fontSize: "0.9rem", color: "#ccc", margin: "0 0 5px 0" }}>Savitribai Phule Pune University</p>
              <p style={{ fontSize: "0.8rem", color: "#999", margin: 0 }}>K K Wagh College Nashik</p>
            </div>
            <div>
              <p style={{ margin: "0 0 5px 0" }}><strong>B.Sc. Computer Science</strong> <br /> (2019 – 2023)</p>
              <p style={{ fontSize: "0.9rem", color: "#ccc", margin: "0 0 5px 0" }}>Savitribai Phule Pune University</p>
              <p style={{ fontSize: "0.8rem", color: "#999", margin: 0 }}>K K Wagh College Nashik</p>
            </div>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="#"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/prathmesh-barge4255aa279"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="#"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="#"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Prathmesh Barge</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
