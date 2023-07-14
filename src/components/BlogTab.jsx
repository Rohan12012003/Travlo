import React from "react";
import Rating from "react-rating";

function BlogTab(props) {
  return (
    <div className="blogtab col-4 col-lg-3">
      <div className="card">
        <img
          className="card-img-top"
          src={props.imageurl}
          alt="Card image cap"
          style={{height:"30vh"}}
        />
        <div className="card-body">
        <p className="card-text">
            {props.name}
        </p>
          <p className="card-text">
          {props.content}
          </p>
          <div className="rating">
          <Rating
            initialRating={props.rating} // Set the initial rating value here
            emptySymbol={<span className="rating-icon">&#9734;</span>} // Use Unicode character for the empty star symbol
            fullSymbol={<span className="rating-icon">&#9733;</span>} // Use Unicode character for the full star symbol
            readonly // Set the rating as readonly if needed
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogTab;
