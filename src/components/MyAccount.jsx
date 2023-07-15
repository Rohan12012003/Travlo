import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function MyAccount() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch the user data from the backend
    axios
      .get("http://localhost:5000/MyAccount")
      .then((response) => {
        const data = response.data;
        console.log(data);
        // Set the user data in the state
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        // Handle the error in your frontend code
      });
  }, []);

  // Render the user data in the component
  return (
    <div>
      {userData ? (
        <div className="account">
          <h2 className="usename" style={{'color':'red'}}>Welcome, {userData.username}</h2>
          <h5 style={{'color':'blue'}}>Email: {userData.email}</h5>
          {userData.profilePicture && (
            <img
              src={`http://localhost:5000/${userData.profilePicture}`}
              alt="Profile"
            />
          )}
          <div className="col-12">
            <Link to="/Register">
              <button className="btn btn-warning col-12"><p>Edit Profile</p></button>
            </Link>
            <Link to={{ pathname: '/WishList', state: { wishlist: userData.wishlist } }}>
              <button className="btn btn-danger col-12"><p>Your WishList</p></button>
            </Link>
            <Link to="/Bookings">
              <button className="btn btn-dark col-12 account-booking"><p>Your Bookings</p></button>
            </Link>
          </div>
        </div>
      ) : (
        <p style={{fontSize:'12px'}}>Loading user data...</p>
      )}
    </div>
  );
}

export default MyAccount;
