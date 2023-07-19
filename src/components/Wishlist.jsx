import React, { useEffect, useState } from "react";
import axios from "axios";
import SmallTab from "./SmallTabs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function WishList() {
  const [wishlist, setWishlist] = useState([]);
  const currentUserId = localStorage.getItem('currentUserId');
  console.log(currentUserId);
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
    axios.get("/.netlify/functions/Wishlist")
      .then((response) => {
        setWishlist(response.data);
        //console.log(response.data)
      })
      .catch((error) => {
        console.error("Error fetching wishlist data:", error);
      });
  }, [currentUserId]);

  if (!Array.isArray(wishlist)) {
    return <p>Loading wishlist...</p>;
  }

  return (
    <div className="wishlisted-items">
      <h1 className="wishlist-heading text-center"><FontAwesomeIcon icon={faHeart} />  Wishlist ...</h1>
      <div className="row">
        {wishlist.map((item, index) => (
          <SmallTab
            key={index}
            tabHeading={item.tabHeading}
            Hotels={item.Hotels}
            flights={item.flights}
            cars={item.cars}
            price={item.price}
            duration={item.duration}
            imageurl={item.imageurl}
            wishlist={wishlist}
            setUser={setWishlist}
          />
        ))}
      </div>
    </div>
  );
}

export default WishList;
