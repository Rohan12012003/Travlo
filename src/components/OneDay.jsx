// WildLife.js
import React, { useState } from 'react';
import SmallTab from './SmallTabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';


function OneDay(props) {
  //const [user, setUser] = useState({ wishlist: [] });
  const [wishlist, setWishlist] = useState([]);
  const location = useLocation();
  const smallTabsData = [
    {
      id: "Oneday1",
      imageurl: 'https://www.fabhotels.com/blog/wp-content/uploads/2019/01/Ffort-Raichak-768x499.jpg',
      tabHeading: 'Ffort Raichak',
      price: 299, 
      duration: "1D/0N",
      flights: 0,
      Hotels: 1,
      cars: 2
    },
    {
      id: "Oneday2",
      imageurl: 'https://www.fabhotels.com/blog/wp-content/uploads/2019/01/Tarkeshwar-768x499.jpg',
      tabHeading: 'Tarkeshwar',
      price: 799,
      duration: "1D/0N",
      flights: 0,
      Hotels: 2,
      cars: 1
    },
    {
      id: "Oneday3",
      imageurl: 'https://www.fabhotels.com/blog/wp-content/uploads/2019/01/Taki-768x499.jpg',
      tabHeading: 'Taki',
      price: 499,
      duration: "1D/0N",
      flights: 0,
      Hotels: 1,
      cars: 1
    },
    {
      id: "Oneday4",
      imageurl: 'https://www.fabhotels.com/blog/wp-content/uploads/2019/01/Piyali-Island-768x499.jpg',
      tabHeading: 'Piyali Island',
      price: 999,
      duration: "1D/0N",
      flights: 0,
      Hotels: 1,
      cars: 2
    },
    {
      id: "Oneday5",
      imageurl: 'https://www.fabhotels.com/blog/wp-content/uploads/2019/01/Kamarpukur-768x499.jpg',
      tabHeading: 'Kamarpukur',
      price: 199,
      duration: "1D/0N",
      flights: 0,
      Hotels: 1,
      cars: 1
    },
    {
        id: "Oneday6",
        imageurl: 'https://www.fabhotels.com/blog/wp-content/uploads/2019/01/Krishnanagar-768x499.jpg',
        tabHeading: ' Krishnanagar',
        price: 199,
        duration: "1D/0N",
        flights: 0,
        Hotels: 2,
        cars: 1
    },
    {
        id: "Oneday7",
        imageurl: 'https://www.fabhotels.com/blog/wp-content/uploads/2019/01/Bakkhali-768x499.jpg',
        tabHeading: ' Bakkhali',
        price: 799,
        duration: "1D/0N",
        flights: 0,
        Hotels: 1,
        cars: 2
    },
    {
        id: "Oneday8",
        imageurl: 'https://www.fabhotels.com/blog/wp-content/uploads/2019/01/Henry-Island-768x499.jpg',
        tabHeading: 'Henry Island',
        price: 199,
        duration: "1D/0N",
        flights: 0,
        Hotels: 1,
        cars: 1
    }
  ];

  //console.log(user);

  return (
    <div className="row">
     <h1 className='super-heading col-12'>One-Day Getaway Delights! </h1>
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

export default OneDay;
