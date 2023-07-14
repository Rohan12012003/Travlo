// WildLife.js
import React, { useState } from 'react';
import SmallTab from './SmallTabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';


function Culture(props) {
  //const [user, setUser] = useState({ wishlist: [] });
  const [wishlist, setWishlist] = useState([]);
  const location = useLocation();
  const smallTabsData = [
    {
      id: "Culture1",
      imageurl: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2016/08/Golden-Temple-Amritsar.jpg',
      tabHeading: 'Amritsar: The Golden City In Punjab',
      price: 3999, 
      duration: "3D/4N",
      flights: 2,
      Hotels: 1,
      cars: 2
    },
    {
      id: "Culture2",
      imageurl: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2016/12/Mosques-in-India-4.jpg',
      tabHeading: ' Lucknow: The City Of The Nawabs',
      price: 7999,
      duration: "1D/2N",
      flights: 1,
      Hotels: 2,
      cars: 3
    },
    {
      id: "Culture3",
      imageurl: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2014/11/Folk-artist-Rann-Utsav.jpg',
      tabHeading: '  Rann of Kutch: The Land Of The White Desert',
      price: 4999,
      duration: "5D/4N",
      flights: 2,
      Hotels: 4,
      cars: 1
    },
    {
      id: "Culture4",
      imageurl: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2015/05/Victoria-Memorial-Kolkata.jpg',
      tabHeading: ' Kolkata: The City Of Joy',
      price: 9999,
      duration: "5D/4N",
      flights: 1,
      Hotels: 3,
      cars: 5
    },
    {
      id: "Culture5",
      imageurl: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2014/11/shutterstock_469835813-Mahabaleshwara-temple-in-Mysore.jpg',
      tabHeading: 'Mysore: The Palace City Of India',
      price: 1999,
      duration: "4D/4N",
      flights: 2,
      Hotels: 4,
      cars: 3
    },
    {
        id: "Culture6",
        imageurl: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2015/09/Charminar-in-Hyderabad.jpg',
        tabHeading: ' Hyderabad: The City Of Nizams',
        price: 1999,
        duration: "6D/7N",
        flights: 2,
        Hotels: 3,
        cars: 5
    },
    {
        id: "Culture7",
        imageurl: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2017/03/shutterstock_784007185.jpg',
        tabHeading: 'Kerala: God’s Own Country',
        price: 1999,
        duration: "4D/5N",
        flights: 2,
        Hotels: 4,
        cars: 8
    },
    {
        id: "Culture8",
        imageurl: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2019/03/Rock-Shelters-of-Bhimbetka.jpg',
        tabHeading: ' Bhimbetka: The Ancient Rock Shelters',
        price: 1999,
        duration: "5D/4N",
        flights: 1,
        Hotels: 3,
        cars: 1
    }
  ];

  //console.log(user);

  return (
    <div className="row">
      {smallTabsData.map(data => (
        <div className="col-lg-6" key={data.id}>
          <SmallTab
            /*user={user}
            setUser={setUser}*/
            user={wishlist}
            setUser={setWishlist}
            id={data.id}
            imageurl={data.imageurl}
            tabHeading={data.tabHeading}
            price={data.price}
            duration={data.duration}
            flights={data.flights}
            Hotels={data.Hotels}
            cars={data.cars}
            location={location}
            isRegistered={props.isRegistered}
          />
        </div>
      ))}
    </div>
  );
}

export default Culture;
