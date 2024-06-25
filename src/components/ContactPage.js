import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="info-section">
        <h2>ADDRESS</h2>
        <p>
          <i className="fas fa-map-marker-alt"></i> Hosary Mosque, 6 October,
          Tunisia
        </p>
        <p>
          <i className="fas fa-phone"></i> Phone: 123456789
        </p>
        <p>
          <i className="fas fa-envelope"></i> contact@littlelemon.com
        </p>

        <h2>WORKING HOURS</h2>
        <p>8:00 am to 11:00 pm on Weekdays</p>
        <p>11:00 am to 1:00 am on Weekends</p>

        <h2>FOLLOW US</h2>
        <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>

      <div className="form-section">
        <form className="contact-form">
          <input type="text" placeholder="Full Name" className="input-field" />
          <input
            type="email"
            placeholder="Email Address"
            className="input-field"
          />
          <input type="text" placeholder="Subject" className="input-field" />
          <textarea placeholder="Message" className="textarea-field"></textarea>
          <button type="submit" className="submit-button">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
