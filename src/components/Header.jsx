import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendar, faHeart, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import ContactsPopup from "./Contacts";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript dependencies
import NotificationsItem from "./Notification";
import LogoutPopup from "./LogoutPopup";
function Header(props) {
  const isRegistered = props.isRegistered;
  console.log(isRegistered);

  return (
    <div>
      <header className="header">
        <div className="header-left-4"></div>
        <div className="header-text col-6">
          <h5 className="Typography-root header-logo-text">Travlo</h5>
        </div>
        <div className="header-links col-6">
          <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
            <Link to="/" style={{ textDecoration: "none" }}>
              <h2 className="header-link-text">Explore</h2>
            </Link>
          </button>
          <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
            <ContactsPopup />
          </button>

          {isRegistered ? (
            <div className="dropdown">
              <button
                className="btn dropdown-toggle dropdown-toggle-split"
                type="button"
                id="userDropdown"
                data-bs-toggle="dropdown" // Add the data-bs-toggle attribute
                aria-expanded="false"
              >
                <FontAwesomeIcon className="user" icon={faUser} />
              </button>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                <Link to="/MyAccount">
                  <li className="user-list-item my-account">
                    <p className='user-dropdown-items'><FontAwesomeIcon icon={faUser} /> My Account</p>
                  </li>
                </Link>
                <div className="dropdown-divider"></div>
                <Link to="/Bookings">
                  <li className="user-list-item">
                    <p className='user-dropdown-items'><FontAwesomeIcon icon={faCalendar} /> Bookings</p>
                  </li>
                </Link>
                <Link to="/WishList">
                  <li className="user-list-item">
                    <p className='user-dropdown-items'><FontAwesomeIcon icon={faHeart} /> Wishlist</p>
                  </li>
                </Link>
                <Link to="/PaymentMethods">
                <li className="user-list-item">
                  <p className='user-dropdown-items'><FontAwesomeIcon icon={faCreditCard} /> Payment History</p>
                </li>
                </Link>
                <li>
                  <NotificationsItem />
                </li>
                <div className="dropdown-divider"></div>
                <li className="user-list-item">
                  <LogoutPopup 
                  isRegistered={props.isRegistered}
                  setIsRegistered={props.setIsRegistered}
                  />
                </li>
              </ul>
            </div>
          ) : (
            <Link className="register-text header-link-text" to="/Register">
              Login
            </Link>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
