import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomeContent from './HomeContent';
import WildLife from './WildLife';
import Booking from './Booking';
import Carousel from './Carousel';
import Register from './Register';
import MyAccount from './MyAccount';
import WishList from './Wishlist';
import Bookings from './Bookings';
import PaymentMethods from './PaymentMethods';
import Mountain from "./Mountain";
import Culture from "./Culture";
import Beach from "./Beach";
import Spritual from './Spritual';
import OneDay from './OneDay';
import OneWeek from './OneWeek';
import Long from './Long';
function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  const location=useLocation();
  var show=true;

  if(location.pathname==='/OneDay'||location.pathname==='/OneWeek'||location.pathname==='/LongTrip')
  show=false;

  useEffect(() => {
    //localStorage.clear();
    // Check if the user is already registered in browser storage on component mount
    const storedIsRegistered = localStorage.getItem('isRegistered');
    if (storedIsRegistered) {
      setIsRegistered(true);
    }
    else {
      setIsRegistered(false); // Set isRegistered to false when 'isRegistered' item is not found
    }

    // Add event listener for beforeunload event
    window.addEventListener('beforeunload', handleWindowBeforeUnload);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('beforeunload', handleWindowBeforeUnload);
    };
  }, []);

  // Callback function to update isRegistered state after successful registration
  const handleRegistration = (userId) => {
    setIsRegistered(true);
    // Store the registration status in browser storage
    localStorage.setItem('isRegistered', 'true');
    localStorage.setItem('currentUserId', userId);
    navigate('/'); // Redirect to HomeContent page
  };

  // Event handler for beforeunload event
  const handleWindowBeforeUnload = () => {
    // Reset the registration status in browser storage
   // localStorage.removeItem('isRegistered');
    localStorage.removeItem('currentUserId');
  };

  return (
    <div className="app-container">
      <Header isRegistered={isRegistered} setIsRegistered={setIsRegistered} />
      {show && <Carousel />}
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/WildLife" element={<WildLife isRegistered={isRegistered}/>} />
        <Route path="/Mountain" element={<Mountain isRegistered={isRegistered}/>} />
        <Route path="/Culture" element={<Culture isRegistered={isRegistered}/>} />
        <Route path="/Beach" element={<Beach isRegistered={isRegistered}/>} />
        <Route path="/Spritual" element={<Spritual isRegistered={isRegistered}/>} />
        <Route path="/OneDay" element={<OneDay  isRegistered={isRegistered}/>} />
        <Route path="/OneWeek" element={<OneWeek  isRegistered={isRegistered}/>} />
        <Route path="/LongTrip" element={<Long  isRegistered={isRegistered}/>} />
        <Route path="/Booking" element={<Booking />} />
        {(
          <Route
            path="/register"
            element={<Register onRegistration={handleRegistration} />}
          />
        )}
        <Route path="/MyAccount" element={<MyAccount />} />
        <Route path="/WishList" element={<WishList />} />
        <Route path="/Bookings" element={<Bookings />} />
        <Route path="/PaymentMethods" element={<PaymentMethods />} />
        <Route path="/Wedding" element={<PaymentMethods />} />
      </Routes>
      <Footer />
    </div>
  ); 
}

export default App;
