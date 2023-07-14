import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
function Carousel() {

  const navigate=useNavigate();

  function HandleClick(text)
  {
    navigate("/"+text);
  }

  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active" onClick={()=>HandleClick("OneDay")}>
            <img className="d-block w-100" src="https://www.holidify.com/images/compressed/13212.jpg" alt="First slide" />
            <div className="carousel-caption d-block d-md-block">
                <h5>One Day Trips: Exploring New Destinations in a Day</h5>
           </div>
          </div>
          <div className="carousel-item" onClick={()=>HandleClick("OneWeek")}>
            <img className="d-block w-100" src="https://holidify.com/images/bgImages/THAILAND.jpg" alt="Second slide" />
            <div className="carousel-caption d-block d-md-block">
                <h5>One Week Plans: Crafting Unforgettable Adventures</h5>
            </div>
          </div>
          <div className="carousel-item" onClick={()=>HandleClick("LongTrip")}>
            <img className="d-block w-100" src="https://www.healthinsurance.co.nz/img/usr/3.jpg" alt="Third slide" />
            <div className="carousel-caption d-block d-md-block">
                <h5>Long Trips: Embarking on Memorable Journeys of Exploration</h5>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Carousel;
