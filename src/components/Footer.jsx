import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const date = new Date().getFullYear();
 
function Footer() {
  return (
    <footer className="footer">
      <div className="about">
        <h6>About Our Website</h6>
        <p>
          Welcome to our holiday booking website! We are dedicated to providing the best travel experiences, offering a wide range of destinations, accommodations, and activities to make your holiday unforgettable.
        </p>
      </div>
      <div className="social-media-icons">
        <a href="https://facebook.com" className="icon-link">
          <FontAwesomeIcon icon={faFacebook} style={{ color: '#4267B2', filter: 'brightness(150%)' }} />
        </a>
        <a href="https://instagram.com" className="icon-link">
          <FontAwesomeIcon icon={faInstagram} style={{ color: '#C13584', filter: 'brightness(120%)' }} />
        </a>
        <a href="https://youtube.com" className="icon-link">
          <FontAwesomeIcon icon={faYoutube} style={{ color: '#FF0000', filter: 'saturate(200%)' }} />
        </a>
        <a href="https://whatsapp.com" className="icon-link">
          <FontAwesomeIcon icon={faWhatsapp} style={{ color: '#25D366', filter: 'brightness(130%)' }} />
        </a>
      </div>
      <h6>&copy; {date}</h6>
    </footer>
  );
}

export default Footer;
