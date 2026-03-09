import { MdCopyright } from "react-icons/md";
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
              <a
                href="mailto:polisettysaichandrasekhar@gmail.com"
                data-cursor="disable"
              >
                polisettysaichandrasekhar@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+918465028428" data-cursor="disable">
                +91 8465028428
              </a>
            </p>
            <h4>Education</h4>
            <p>B.Tech in ECE</p>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Sai Polisetty</span>
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
