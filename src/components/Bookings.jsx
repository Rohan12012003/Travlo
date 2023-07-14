import React, { useEffect, useState } from "react";
import axios from "axios";
import SmallTab from "./SmallTabs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import BookedTab from "./BookedTab";

function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    // Fetch the bookings data from the backend
    axios.get("http://localhost:5000/bookings")
      .then((response) => {
        setBookings(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching bookings data:", error);
      });
  }, []);

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
