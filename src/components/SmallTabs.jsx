import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHotel, faPlane, faCar } from '@fortawesome/free-solid-svg-icons';
//import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import Rating from "react-rating";
function SmallTab(props) {
  const backgroundImageUrl = props.imageurl;
  const transparentBackground = 'https://www.transparenttextures.com/patterns/shattered-dark.png';
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const currentUserId = localStorage.getItem('currentUserId');
  console.log(currentUserId);
 // const [backgroundColor, setBackgroundColor] = useState('');
  const navigate = useNavigate();
  const data = {
    tabHeading: props.tabHeading,
    Hotels: props.Hotels,
    flights: props.flights,
    cars: props.cars,
    duration: props.duration,
    price: props.price,
    imageurl: props.imageurl
  };

  const location = useLocation();

  const handleButtonHover = () => {
    setIsHovered(!isHovered);
  };

  const handleClick = async () => {
    
    if (!props.isRegistered) {
      // Show alert if user is not logged in
      console.log(props.user);
      alert('Please log in first');
      navigate(location.pathname); // Navigate to the login page
      return;
    }
    setIsClicked(!isClicked);

    console.log(props.user);

    if (!isClicked) {
      // Add the item to the wishlist
      const updatedUser = { wishlist: [...props.user, data] };

      try {

        const options = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ wishlist: updatedUser.wishlist, userId: currentUserId }),
        };
        
        // Send the updated wishlist data to the server using fetch
        fetch('/.netlify/functions/WishlistPut', options)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Failed to update wishlist');
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error('Error updating wishlist:', error);
          });

      } catch (error) {
        console.error('Error updating wishlist:', error);
      }
    } 
    /*else {
      // Remove the item from the wishlist
      const updatedWishlist = props.user.filter((item) => item.tabHeading !== data.tabHeading);

      try {
        // Send the updated wishlist data to the server
        await axios.put('/wishlist', { wishlist: updatedWishlist });
      } catch (error) {
        console.error('Error updating wishlist:', error);
      }
    }*/
  };

  useEffect(() => {
    //const color = generateRandomColor();
   // setBackgroundColor(color);
  }, []);

  const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 156 + 100);
    const g = Math.floor(Math.random() * 156 + 100);
    const b = Math.floor(Math.random() * 156 + 100);
    const opacity = 0.3;
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  const randomColor = generateRandomColor();
  //backgroundColor=randomColor;

  function getRandomNumber() {
    return Math.floor(Math.random() *(5-3)) + 3;
  }

  const rating=getRandomNumber();

  const handleBooking = () => {
    if (!props.isRegistered) {
      // Show alert if user is not logged in
      console.log(props.user);
      alert('Please log in first');
      navigate(location.pathname); // Navigate to the login page
      return;
    } else {
      navigate('/Booking', { state: { passdata: data } });
    }
  };

  return (
    <div
      className="Small-tab Small-tab-container"
      style={{
        backgroundColor: randomColor,
        backgroundImage: `url(${transparentBackground})`
      }}
    >
      {location.pathname !== '/WishList' && (
        <FontAwesomeIcon
          className="col-1"
          icon={faHeart}
          style={{
            color: isClicked ? 'red' : 'white',
            borderRadius: '50%',
            padding: '10px',
            fontSize: '25px',
            cursor: 'pointer',
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            zIndex: 1
          }}
          onClick={handleClick}
        />
      )}
      <div
        className="background-img-small-Tab col-6"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundRepeat: 'no-repeat',
          filter: isHovered ? 'blur(1px)' : 'none',
          backgroundSize: 'cover'
        }}
        onMouseEnter={handleButtonHover}
        onMouseLeave={handleButtonHover}
      ></div>
      <div className="col-3">
        <h3 className="Smalltab-heading">{props.tabHeading}</h3>
        <ul>
          <li className="list">{props.price} Rs /Person</li>
          <li className="list">{props.duration}</li>
          <Rating
            className='smalltab-rating'
            initialRating={rating} // Set the initial rating value here
            emptySymbol={<span className="rating-icon">&#9734;</span>} // Use Unicode character for the empty star symbol
            fullSymbol={<span className="rating-icon">&#9733;</span>} // Use Unicode character for the full star symbol
            readonly // Set the rating as readonly if needed
          />
          <div className="travel-icons d-flex">
            <div className="col-4 icon">
              <FontAwesomeIcon icon={faHotel} />
              <p className="icon-text">{props.Hotels} Hotels</p>
            </div>
            <div className="col-4 icon">
              <FontAwesomeIcon icon={faPlane} />
              <p className="icon-text">{props.flights} Flights</p>
            </div>
            <div className="col-4 icon">
              <FontAwesomeIcon icon={faCar} />
              <p className="icon-text">{props.cars} Cars</p>
            </div>
          </div>
        </ul>
      </div>
      <button
        type="button"
        className="btn btn-warning btn Smalltab-btn col-2 list"
        style={{
          bottom: 10,
          right: 10,
          marginRight:'5px'
        }}
        onClick={handleBooking}
      >
        <p className='book-button-text'>Book</p>
      </button>
      <div className='justforfun'></div>
    </div>
  );
}

export default SmallTab;
