
import React, { useState } from 'react';
import SmallTab from './SmallTabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';


function Long(props) {
  //const [user, setUser] = useState({ wishlist: [] });
  const [wishlist, setWishlist] = useState([]);
  const location = useLocation();
  const smallTabsData = [
    {
      id: "Long1",
      imageurl: 'https://media.timeout.com/images/106000637/750/562/image.jpg',
      tabHeading: 'Golden Triangle Circuit',
      price: 5999, 
      duration: "7D/8N",
      flights: 2,
      Hotels: 5,
      cars: 15
    },
    {
      id: "Long2",
      imageurl: 'https://media.timeout.com/images/106000593/750/562/image.jpg',
      tabHeading: 'Shimla to Spiti Valley',
      price: 7999,
      duration: "6D/7N",
      flights: 1,
      Hotels: 2,
      cars: 13
    },
    {
      id: "Long3",
      imageurl: 'https://media.timeout.com/images/106000594/750/562/image.jpg',
      tabHeading: 'Guwahati to Tawang',
      price: 7999,
      duration: "7D/6N",
      flights: 2,
      Hotels: 4,
      cars: 12
    },
    {
      id: "Long4",
      imageurl: 'https://media.timeout.com/images/106000595/750/562/image.jpg',
      tabHeading: 'Mumbai to Goa',
      price: 9999,
      duration: "5D/6N",
      flights: 1,
      Hotels: 3,
      cars: 10
    },
    {
      id: "Long5",
      imageurl: 'https://media.timeout.com/images/106000596/750/562/image.jpg',
      tabHeading: 'Chennai to Pondicherry',
      price: 8999,
      duration: "7D/7N",
      flights: 2,
      Hotels: 3,
      cars: 7
    },
    {
        id: "Long6",
        imageurl: 'https://media.timeout.com/images/106000597/750/562/image.jpg',
        tabHeading: 'Ahmedabad to Kutch',
        price: 9999,
        duration: "8D/7N",
        flights: 2,
        Hotels: 4,
        cars: 10
    },
    {
        id: "Long7",
        imageurl: 'https://media.timeout.com/images/106000623/750/562/image.jpg',
        tabHeading: 'Mysore to Hampi',
        price: 10999,
        duration: "6D/7N",
        flights: 2,
        Hotels: 5,
        cars: 5
    },
    {
        id: "Long8",
        imageurl: 'https://media.timeout.com/images/106000649/750/562/image.jpg',
        tabHeading: 'Bengaluru to Ooty',
        price: 9999,
        duration: "7D/6N",
        flights: 2,
        Hotels: 7,
        cars: 5
    }
  ];

  //console.log(user);

  return (
    <div className="row">
     <h1 className='super-heading col-12'>Explore Far and Wide: Enchanting Long Tours!</h1>
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

export default Long;
