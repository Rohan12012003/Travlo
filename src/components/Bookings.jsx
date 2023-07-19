import React, { useEffect, useState } from "react";
//import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import 'react-datepicker/dist/react-datepicker.css';
import BookedTab from "./BookedTab";

function Bookings() {
  const [bookings, setBookings] = useState([]);
  const currentUserId = localStorage.getItem('currentUserId');

  useEffect(() => {
    // Fetch the user data from the backend using the user ID
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: currentUserId }),
    };
  
    // Fetch the wishlist data from the backend
    fetch("/.netlify/functions/Bo0kings", options)
    .then((response) => response.json()) // Parse the response JSON
    .then((data) => {
      setBookings(data); // Update wishlist state with the parsed data
    })
    .catch((error) => {
      console.error("Error fetching wishlist data:", error);
    });
}, [currentUserId]);

  return (
    <div className="bookings-page">
    <h1 className="bookings-heading">
        <FontAwesomeIcon icon={faBook} /> Bookings
      </h1>
    <div className="booked-items row">
      {bookings.map((booking, index) => (
        <div className="col-lg-6" key={index}>
          <BookedTab
            tabHeading={booking.tabHeading} // Example tab heading, modify as needed
            Hotels={booking.hotels}
            flights={booking.flights}
            cars={booking.cars}
            fromDate={booking.fromDate}
            toDate={booking.toDate}
            name1={booking.name1}
            name2={booking.name2}
            age1={booking.age1}
            age2={booking.age2}
            city={booking.city}
            district={booking.district}
            state={booking.state}
            phone={booking.phone}
            email={booking.email}
            paymentMethod={booking.paymentMethod}
            imageurl={booking.imageurl}
            // Include other properties as needed
          />
        </div>
      ))}
    </div>
    </div>
  );
}

export default Bookings;
