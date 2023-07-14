import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Popup from 'reactjs-popup';
function NotificationsItem() {
  
  function handleClick(event)
  {
    console.log(event.target);
    //close();
  }

  return (
    <div>
      <Popup
      trigger={<p style={{color:'blue',cursor:'pointer'}}><FontAwesomeIcon icon={faBell} />Notification</p>}
      position="bottom center"
      arrow={true}
      modal
      closeOnDocumentClick
    >
      {close=>(
        <div className='notification-popup'>
        <h6>Allow notification from this site?</h6>
        <div className='row d-flex'>
          <div className='col-6'>
            <button className='btn btn-primary w-100' onClick={handleClick}>Allow</button>
          </div>
          <div className='col-6 text-end'>
            <button className='btn btn-danger w-100' onClick={handleClick}>Block</button>
          </div>
        </div>
      </div>

      )}
    </Popup>
    </div>
  );
}

export default NotificationsItem;
