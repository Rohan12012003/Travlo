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
      trigger={<p style={{color:'blue',cursor:'pointer'}} className='user-dropdown-items'><FontAwesomeIcon icon={faBell} />Notification</p>}
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
            <button className='btn btn-primary btn-sm' onClick={handleClick}><h6>Allow</h6></button>
          </div>
          <div className='col-6 text-end'>
            <button className='btn btn-danger  btn-sm' onClick={handleClick}><h6>Block</h6></button>
          </div>
        </div>
      </div>

      )}
    </Popup>
    </div>
  );
}

export default NotificationsItem;
