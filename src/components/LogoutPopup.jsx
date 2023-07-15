import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Popup from 'reactjs-popup';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function LogoutPopup(props) {


  function handleClick(event, buttonType) {
    console.log('Button clicked:', buttonType);
    // Perform actions based on the button type
  }

  const navigate=useNavigate();
  const handleLogout = async (event,buttonType) => {

    if(buttonType==='Confirm'){
    localStorage.removeItem('isRegistered');
    localStorage.removeItem('currentUserId');
    props.setIsRegistered(false);

    try {
      // Send a request to the backend to clear the user session
      await axios.post('http://localhost:5000/logout');
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
    }
  };

  return (
    <div>
      <Popup
        trigger={
          <p style={{ color: 'blue', cursor: 'pointer' }} className='user-dropdown-items'>
            <FontAwesomeIcon icon={faSignOutAlt} /> Log Out
          </p>
        }
        position="bottom center"
        arrow={true}
        modal
        closeOnDocumentClick
      >
        {(close) => (
          <div className="notification-popup">
            <div className="row d-flex">
              <div className="col-6">
                <button
                  className="btn btn-primary btn-sm w-100"
                  onClick={(event) => handleLogout(event, 'Confirm')}
                >
                  <p>Confirm</p>
                </button>
              </div>
              <div className="col-6 text-end">
                <button
                  className="btn btn-danger w-100 btn-sm"
                  onClick={(event) => handleClick(event, 'Cancel')}
                >
                  <p>Cancel</p>
                </button>
              </div>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}

export default LogoutPopup;
