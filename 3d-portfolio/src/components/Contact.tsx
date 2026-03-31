import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box glass-panel">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:miraqib249@gmail.com"
                data-cursor="disable"
              >
                Email — miraqib249@gmail.com
              </a>
            </p>
            <p>
              <a
                href="tel:9103696238"
                data-cursor="disable"
              >
                Phone — 9103696238
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.E. Computer Science & Engineering, 2027
            </p>
            <p>
              Focused on cybersecurity and ethical hacking.
            </p>
          </div>
          <div className="contact-box glass-panel">
            <h4>Social</h4>
            <a
              href="https://github.com/aqibmajeedmir12-a11y"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/aqib-majeed-52a476318"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-content">
            <h2>
              Designed and Developed <br /> by <span>Aqib Majeed</span>
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
