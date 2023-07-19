import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import axios from "axios";
import {
  faTrash,
  faSave,
  faWalking, 
  faEnvelope,
  faPhoneAlt,
  faHotel,
  faPlane,
  faCar,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

function Booking(props) {
  const [Details, setDetails] = useState({
    name1: "",
    name2: "",
    age1: "",
    age2: "",
    email: "",
    phone: "",
    city: "",
    district: "",
    state: "",
  });
  const [selectedItem, setSelectedItem] = useState("");
  const [fromDate, setFromDate] = useState(new Date());
  const [totalPayable,setTotalPayable]=useState(0);
  const location = useLocation();
  const passdata = location.state?.passdata;
  
  const duration = Math.max(passdata.duration[0],passdata.duration[3]);
  
  const date=new Date(fromDate.getTime()+(duration * 24 * 60 * 60 * 1000));

  //console.log(passdata.price);

  function handleCheckboxChange(event) {
    setSelectedItem(event.target.value);
    console.log(selectedItem);
  }

  function HandleDetails(event) {
    const { name, value } = event.target;
    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));

    if(Details.name1==="" && Details.name2==="")
    setTotalPayable(0);
    else if ((Details.name1!=="" && Details.name2!==""))
    setTotalPayable(2*passdata.price);
    else
    setTotalPayable(passdata.price);

    //console.log(totalPayable);
  }

  function HandleClick(name, age, event) {
    // Perform delete action or any other logic
    event.preventDefault();
    setDetails((prev) => ({
      ...prev,
      [name]: "",
      [age]: "",
    }));

    if (selectedItem !== "" && fromDate) {
      // Prepare the data to be sent to the backend
      const data = {
        name1: Details.name1,
        name2: Details.name2,
        age1: Details.age1,
        age2: Details.age2,
        email: Details.email,
        phone: Details.phone,
        city: Details.city,
        district: Details.district,
        state: Details.state,
        paymentMethod: selectedItem,
        totalPayment:totalPayable,
        fromDate: fromDate.toISOString(), // Convert the date to ISO string format
        toDate: date.toISOString(), // Convert the date to ISO string format
        ...passdata,
        tabHeading:passdata?.tabHeading, // Include the passed data from the SmallTab component
        cars: passdata?.cars, // Include the number of cars
        hotels: passdata?.Hotels, // Include the number of hotels
        flights: passdata?.flights, // Include the number of flights
        duration: passdata?.duration,
        imageurl:passdata?.imageurl
      };

      //console.log(data.toDate)

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: currentUserId ,bookingData:data}),
      };
    
      // Fetch the wishlist data from the backend
      fetch("/.netlify/functions/Booking", options)
      .then((response) => response.json()) // Parse the response JSON
      .then((datas) => {
        //setWishlist(data); // Update wishlist state with the parsed data
        console.log(datas);
      })
        .catch((error) => {
          console.error("Error saving data:", error);
        });
    }
  }

  useEffect(() => {
    if (Details.name1 === "" && Details.name2 === "") {
      setTotalPayable(0);
    } else if (Details.name1 !== "" && Details.name2 !== "") {
      setTotalPayable(2 * passdata.price);
    } else {
      setTotalPayable(passdata.price);
    }
  }, [Details, passdata.price]);
  

  return (
    <div className="booking">
      <button type="button" className=" package-name btn btn-warning col-8">
      {passdata ? passdata.tabHeading : ""}
      </button>
      <div className="row">
        <form className="details col-lg-6 col-sm-12">
          <h5>Personal Information</h5>
          <div className="row booking-row">
            <FontAwesomeIcon className="col-1 person-icon" icon={faWalking} />
            <input
              type="text"
              value={Details.name1}
              placeholder="Name"
              onChange={HandleDetails}
              name="name1"
              className="col-6"
            />
            <input
              type="text"
              value={Details.age1}
              placeholder="Age"
              onChange={HandleDetails}
              name="age1"
              className="col-2"
            />
            <button
              className="col-1 btn btn-danger btn-sm"
              onClick={(event) => HandleClick("name1", "age1", event)}
            >
              <FontAwesomeIcon icon={faTrash} /> {/* Delete icon */}
            </button>
          </div>
          <div className="row booking-row">
            <FontAwesomeIcon className="col-1 person-icon" icon={faWalking} />
            <input
              type="text"
              value={Details.name2}
              placeholder="Name"
              onChange={HandleDetails}
              name="name2"
              className="col-6"
            />
            <input
              type="text"
              value={Details.age2}
              placeholder="Age"
              onChange={HandleDetails}
              name="age2"
              className="col-2"
            />
            <button
              className="col-1 btn btn-danger btn-sm"
              onClick={(event) => HandleClick("name2", "age2", event)}
            >
              <FontAwesomeIcon icon={faTrash} /> {/* Delete icon */}
            </button>
          </div>
          <hr></hr>
          <div className="address">
            <h5>Address</h5>
            <input
              type="Text"
              value={Details.city}
              placeholder="City"
              onChange={HandleDetails}
              name="city"
              className="col-3"
            />
            <input
              type="Text"
              value={Details.district}
              placeholder="District"
              onChange={HandleDetails}
              name="district"
              className="col-3"
            />
            <input
              type="Text"
              value={Details.state}
              placeholder="State"
              onChange={HandleDetails}
              name="state"
              className="col-3"
            />
          </div>
          <hr></hr>
          <h5>Contact Details</h5>
          <div className="row">
            <FontAwesomeIcon className="contact-icon col-1" icon={faPhoneAlt} />
            <input
              type="email"
              value={Details.email}
              placeholder="Email"
              onChange={HandleDetails}
              name="email"
              className="col-8"
            />
          </div>
          <div className="row">
            <FontAwesomeIcon className="contact-icon col-1" icon={faEnvelope} />
            <input
              type="text"
              value={Details.phone}
              placeholder="Contact no"
              onChange={HandleDetails}
              name="phone"
              className="col-8"
            />
          </div>
          <div className="row datepicker col">
            <div className="row">
              <h5 className="col-6">
                <FontAwesomeIcon icon={faCalendarAlt} /> Date of Journey
              </h5>
              <DatePicker
                className="col-sm-12 col-6"
                selected={fromDate}
                onChange={(date) => setFromDate(date)}
                dateFormat="dd/MM/yyyy" // Customize the date format if needed
              />
            </div>
          </div>
          <hr></hr>
          <h5>Special Request</h5>
          <textarea
            type="text"
            value={Details.request}
            placeholder="Special Request"
            onChange={HandleDetails}
            name="request"
            cols={60}
            className="col-10"
          />
          <hr></hr>
          <button
            className="col-4 btn btn-success btn-sm"
            onClick={(event) => HandleClick("name2", "age2", event)}
          >
            <FontAwesomeIcon icon={faSave} /> {/* Save icon */}
          </button>
        </form>

        <div className="payment-methods col-lg-3 col-sm-6">
          <h3>Payment Methods</h3>
          <div className="methods row">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Credit/Debit Card"
                id="creditDebitCardCheckbox"
                checked={selectedItem === "Credit/Debit Card"}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="creditDebitCardCheckbox">
                Credit/Debit Card
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="UPI"
                id="upiCheckbox"
                checked={selectedItem === "UPI"}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="upiCheckbox">
                UPI
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="BHIM"
                id="bhimCheckbox"
                checked={selectedItem === "BHIM"}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="bhimCheckbox">
                BHIM
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Net Banking"
                id="netBankingCheckbox"
                checked={selectedItem === "Net Banking"}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="netBankingCheckbox">
                Net Banking
              </label>
            </div>
          </div>

          <div>
            <p className="payment-description">Totla Payable {totalPayable} Rs Only</p>
          </div>
          <p className="payment-description">
            Choose your preferred payment method(s) from Credit/Debit Card, UPI,
            BHIM, or Net Banking, and click "Pay" to securely complete your
            booking transaction.
          </p>
          <button className="col-12 btn btn-info btn-sm">Pay</button>
        </div>
        <div className="section col-sm-6 col-lg-3">
          <h2 className="section-heading">Activities</h2>

          <div className="col activities">
            <FontAwesomeIcon className="icon-large row" icon={faHotel} />
            <p style={{color:'black'}}>{passdata.Hotels} Hotels</p>
            <FontAwesomeIcon className="icon-large row" icon={faPlane} />
            <p style={{color:'black'}}>{passdata.flights} Flights</p>
            <FontAwesomeIcon className="icon-large row" icon={faCar} />
            <p style={{color:'black'}}>{passdata.cars} Cars</p>
          </div>

        </div>
      </div>

      <div className="rules">
        <ul>
          <li>
            <p>
              Booking and Payment: Customers are required to make their bookings
              in advance and provide accurate information. They may need to pay
              a deposit or full payment for the trip as per the company's
              policy. Payment methods and deadlines for payment should be
              clearly communicated.
            </p>
          </li>
          <li>
            <p>
              Cancellation and Refunds: The travel company may have specific
              cancellation and refund policies. Customers should be informed
              about the cancellation process, any applicable fees, and the
              refund eligibility criteria. It's important to communicate the
              deadlines for cancellations and any documentation required for
              refund requests.
            </p>
          </li>
          <li>
            <p>
              Travel Documents and Identification: Customers must possess valid
              travel documents such as passports, visas, and identification
              cards as required for the destination. It's the customer's
              responsibility to ensure they have the necessary documents, and
              the travel company may not be held liable for any issues arising
              from inadequate documentation.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Booking;
