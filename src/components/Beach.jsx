// WildLife.js
import React, { useState } from 'react';
import SmallTab from './SmallTabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';


function Beach(props) {
  //const [user, setUser] = useState({ wishlist: [] });
  const [wishlist, setWishlist] = useState([]);
  const location = useLocation();
  const smallTabsData = [
    {
      id: "Beach1",
      imageurl: 'https://www.fabhotels.com/blog/wp-content/uploads/2015/10/shutterstock_298411103-768x512.jpg',
      tabHeading: ' Goa',
      price: 3999, 
      duration: "3D/4N",
      flights: 2,
      Hotels: 1,
      cars: 2
    },
    {
      id: "Beach2",
      imageurl: 'https://www.fabhotels.com/blog/wp-content/uploads/2019/07/Andaman-and-Nicobar-Islands-768x499.jpg',
      tabHeading: '  Andaman and Nicobar Islands',
      price: 7999,
      duration: "1D/2N",
      flights: 1,
      Hotels: 2,
      cars: 3
    },
    {
      id: "Beach3",
      imageurl: 'https://www.fabhotels.com/blog/wp-content/uploads/2017/12/Lakshadweep-768x499.jpg',
      tabHeading: '  Lakshadweep Islands',
      price: 4999,
      duration: "5D/4N",
      flights: 2,
      Hotels: 4,
      cars: 1
    },
    {
      id: "Beach4",
      imageurl: 'https://www.fabhotels.com/blog/wp-content/uploads/2019/09/Gokarna-768x499.jpg',
      tabHeading: ' Gokarna, Karnataka',
      price: 9999,
      duration: "5D/4N",
      flights: 1,
      Hotels: 3,
      cars: 5
    },
    {
      id: "Beach5",
      imageurl: 'https://www.fabhotels.com/blog/wp-content/uploads/2021/11/5.-karwar-768x499.jpg',
      tabHeading: 'Karwar, Karnataka',
      price: 1999,
      duration: "4D/4N",
      flights: 2,
      Hotels: 4,
      cars: 3
    },
    {
        id: "Beach6",
        imageurl: 'https://www.fabhotels.com/blog/wp-content/uploads/2018/06/Kochi-768x499.jpg',
        tabHeading: '  Kochi, Kerala',
        price: 1999,
        duration: "6D/7N",
        flights: 2,
        Hotels: 3,
        cars: 5
    },
    {
        id: "Beach7",
        imageurl: 'https://www.fabhotels.com/blog/wp-content/uploads/2020/03/Daman-Diu-768x499.jpg',
        tabHeading: 'Daman and Diu',
        price: 1999,
        duration: "4D/5N",
        flights: 2,
        Hotels: 4,
        cars: 8
    },
    {
        id: "Beach8",
        imageurl: 'https://www.fabhotels.com/blog/wp-content/uploads/2019/07/Puri-Beach-768x499.jpg',
        tabHeading: 'Puri, Odisha',
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

export default Beach;
