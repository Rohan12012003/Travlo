import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faUniversity, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';

function PaymentMethods() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch the user's bookings data from the backend
    axios.get("http://localhost:5000/bookings")
      .then((response) => {
        const userBookings = response.data; // Access the data property of the response
        setBookings(userBookings);
        //console.log("Console logged: ", userBookings);
      })
      .catch((error) => {
        console.error("Error fetching bookings data:", error);
      });
  }, []);

  return (
    <div className="payment">
      <div className="payment-history">
        <h5><FontAwesomeIcon icon={faMoneyBillWave} /> Payment History</h5>
        {bookings.map((booking, index) => (
          <p key={index}>
          <p>{index+1} {")."}</p>
          <p>{booking.paymentMethod}</p> 
          <p>Total Paymnet :{booking.totalPayment} /Rs</p>
          <p>Destination : {booking.tabHeading}</p>
          </p>
        ))}
      </div>
      <div class="payment-item">
        <div>
          <h6><FontAwesomeIcon icon={faCreditCard} />  Credit/Debit Card</h6>
          <p>Pay securely using your credit or debit card. Enter your card details and complete the payment process.</p>
        </div>
        <div>
          <h6><FontAwesomeIcon icon={faUniversity} />  UPI (Unified Payments Interface)</h6>
          <p>Make quick and easy payments using UPI apps on your mobile device. Scan the QR code or enter the UPI ID to complete the transaction.</p>
        </div>
        <div>
          <h6><FontAwesomeIcon icon={faMoneyBillWave} /> Net Banking</h6>
          <p>Transfer funds directly from your bank account using internet banking services. Select your bank, login, and authorize the payment.</p>
        </div>
        <div>
          <h6><FontAwesomeIcon /> BHIM (Bharat Interface for Money)</h6>
          <p>Use BHIM app for seamless and instant payments. Scan the QR code or enter the UPI ID to complete the transaction securely.</p>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethods;
