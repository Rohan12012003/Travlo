import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function ContactsPopup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    query: ""
  });
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', data);
    setData({
      name: '',
      email: '',
      subject: '',
      query: ''
    }); 
    setPopupOpen(false);
  };

  return (
    <Popup
      trigger={<h2 className='header-link-text'>Contact</h2>}
      position="bottom center"
      arrow={true}
      modal
      closeOnDocumentClick
      onClose={() => setPopupOpen(false)}
    >
      {close => (
        <div className="contact-popup">
          <button className="close-button btn" onClick={close}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <div className="contact-popup-content">
            <h3>Contact Information</h3>
            <p>
              <FontAwesomeIcon icon={faPhoneAlt} /> Phone: +1 (123) 456-7890
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> Email: info@example.com
            </p>
            <form className='contact-popup-form' onSubmit={handleSubmit}>
              <input
                className="col-10 popup-text"
                type="text"
                name="name"
                placeholder="Your Name"
                value={data.name}
                onChange={handleChange}
              />
              <input
                className="col-10 popup-text"
                type="email"
                name="email"
                placeholder="Your Email"
                value={data.email}
                onChange={handleChange}
              />
              <input
                className="col-10 popup-text"
                type="text"
                name="subject"
                placeholder="Subject"
                value={data.subject}
                onChange={handleChange}
              />
              <textarea
                className="col-10 popup-text"
                name="query"
                placeholder="Your Message"
                value={data.query}
                onChange={handleChange}
              ></textarea>
              <button className="btn btn-info btn-sm" type="submit">Send Message</button>
            </form>
          </div>
        </div>
      )}
    </Popup>
  );
}
