// WildLife.js
import React, { useState } from 'react';
import SmallTab from './SmallTabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';


function WildLife(props) {
  //const [user, setUser] = useState({ wishlist: [] });
  console.log(props.isRegistered);
  const [wishlist, setWishlist] = useState([]);
  const location = useLocation();
  const smallTabsData = [
    {
      id: "WildLife1",
      imageurl: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2015/03/Jim-Corbett-National-Park-Uttarakhand.jpg',
      tabHeading: 'Jim Corbett National Park – Uttarakhand',
      price: 3999, 
      duration: "3D/4N",
      flights: 2,
      Hotels: 1,
      cars: 2
    },
    {
      id: "WildLife2",
      imageurl: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2015/03/Gir-National-Park-Gujarat.jpg',
      tabHeading: 'Gir National Park – Gujarat',
      price: 7999,
      duration: "1D/2N",
      flights: 1,
      Hotels: 2,
      cars: 3
    },
    {
      id: "WildLife3",
      imageurl: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2015/03/Bannerghatta-Biological-Park-Karnataka.jpg',
      tabHeading: 'Bannerghatta Biological Park – Karnataka',
      price: 4999,
      duration: "5D/4N",
      flights: 2,
      Hotels: 4,
      cars: 1
    },
    {
      id: "WildLife4",
      imageurl: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2015/03/Bandhavgarh-National-Park-Madhya-Pradesh.jpg',
      tabHeading: 'Bandhavgarh National Park – Madhya Pradesh',
      price: 9999,
      duration: "5D/4N",
      flights: 1,
      Hotels: 3,
      cars: 5
    },
    {
      id: "WildLife5",
      imageurl: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2015/03/Hemis-National-Park-Jammu-Kashmir.jpg',
      tabHeading: 'Hemis National Park – Ladakh',
      price: 1999,
      duration: "4D/4N",
      flights: 2,
      Hotels: 3,
      cars: 3
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

export default WildLife;
