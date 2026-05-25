import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box contact-main">
            <h4>Email</h4>
            <p className="contact-email">
              <a
                href="mailto:Truptiranjansingh450@gmail.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Truptiranjansingh450@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>B.Tech CSE in Cybersecurity & Cloud Computing</p>
          </div>
          <div className="contact-box contact-links">
            <h4>Connect</h4>
            <a
              href="https://github.com/Magma69-cyber"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/trupti-ranjan-singh-ba1384311"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://medium.com/@truptiranjansingh450"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Medium <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box contact-credit">
            <h2>
              Designed and Developed <br /> by <span>Trupti Ranjan Singh</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
