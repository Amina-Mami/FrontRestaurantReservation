import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={require("./Logo.png")} alt="Little Lemon logo" />
      </div>
      <div className="footer-section footer-contact">
        <h1>Contact Us</h1>
        <p>Hosary Mosque, 6 October, Tunisia</p>
        <p>123456789</p>
        <p>contact@littlelemon.com</p>
      </div>
      <div className="footer-section footer-social">
        <h1>Social Media</h1>
        <a href="https://facebook.com">
          <FontAwesomeIcon icon={faFacebookF} /> Facebook
        </a>
        <a href="https://instagram.com">
          <FontAwesomeIcon icon={faInstagram} /> Instagram
        </a>
        <a href="https://twitter.com">
          <FontAwesomeIcon icon={faTwitter} /> Twitter
        </a>
      </div>
    </footer>
  );
}

export default Footer;
