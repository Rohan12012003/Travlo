import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faSave,
  faMoneyBill,
  faWalking,
  faEnvelope,
  faPhoneAlt,
  faHotel,
  faPlane,
  faCar,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
function BookedTab(props) {

  console.log(props.imageurl);


    return (
      <div className="bookedTab">
        <div className="booked-item">
          <h5>Destination</h5>
          <div className="bookeditem-profile-picture"
          style={{
            backgroundImage:`url(${props.imageurl})`,
            backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height:'45vh'
            }}>
            
          </div>
          <h5 className="booked-heading">{props.tabHeading}</h5>
        </div>
        <div className="booked-item"> 
          <div className="row">
          <p className="col-6">From: {new Date(props.fromDate).toString()}</p>
          <p className="col-6">To: {new Date(props.toDate).toString()}</p>
          </div>
        </div>
        <h5 className="booked-item">Passenger Details</h5>
        <div className="passenger booked-item">

          <h6 className=" d-flex justify-content-center">Passenger 1</h6>
          <div className="row">
          <p className="col-6">Name: {props.name1}</p>
          <p className="col-6">Age: {props.age1}</p>
          </div>
        </div>
        <div className="passenger booked-item">

          <h6 className=" d-flex justify-content-center">Passenger 1</h6>
          <div className="row">
          <p className="col-6">Name: {props.name2}</p>
          <p className="col-6">Age: {props.age2}</p>
          </div>
        </div>
        <div className="booked-address  booked-item">
          <h6 className=" d-flex justify-content-center">Address</h6>
          <div className="row">
          <p className="col-4">City: {props.city}</p>
          <p className="col-4">District: {props.district}</p>
          <p className="col-4">State: {props.state}</p>
          </div>
        </div>
        <div className="booked-contacts booked-item">
          <h6 className=" d-flex justify-content-center">Contact Details</h6>
          <p>Phone no: {props.phone}</p>
          <p>Email: {props.email}</p>
        </div>
        <div className="booked-request booked-item">
          <h6 className=" d-flex justify-content-center">Payment Method</h6>
          <p>{props.paymentMethod}</p>
        </div>
        <div className="booked-activities booked-item">
        <h6>Activities</h6>
        <div className="row">
          <div className="col-4">
            <FontAwesomeIcon style={{color:'white'}} icon={faHotel} />
            <p>Hotels: {props.Hotels}</p>
          </div>
          <div className="col-4">
            <FontAwesomeIcon style={{color:'white'}} icon={faPlane} />
            <p>Planes: {props.flights}</p>
          </div>
          <div className="col-4">
            <FontAwesomeIcon style={{color:'white'}} icon={faCar} />
            <p>Cars: {props.cars}</p>
          </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default BookedTab;
  