// WildLife.js
import React, { useState } from 'react';
import SmallTab from './SmallTabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';


function Spritual(props) {
  //const [user, setUser] = useState({ wishlist: [] });
  const [wishlist, setWishlist] = useState([]);
  const location = useLocation();
  const smallTabsData = [
    {
      id: "Spritual1",
      imageurl: 'https://www.tourmyindia.com/blog//wp-content/uploads/2021/04/Sun-Temple-in-Konark-Odisha.jpg',
      tabHeading: 'Sun Temple (Surya Mandir) in Konark, Odisha',
      price: 3999, 
      duration: "3D/4N",
      flights: 2,
      Hotels: 1,
      cars: 2
    },
    {
      id: "Spritual2",
      imageurl: 'https://www.tourmyindia.com/blog//wp-content/uploads/2021/04/Jagannath-Temple-in-Puri-Odisha.jpg',
      tabHeading: 'Jagannath Temple in Puri, Odisha',
      price: 7999,
      duration: "1D/2N",
      flights: 1,
      Hotels: 2,
      cars: 3
    },
    {
      id: "Spritual3",
      imageurl: 'https://www.tourmyindia.com/blog//wp-content/uploads/2021/04/Somnath-Jyotirlinga-Gujarat.jpg',
      tabHeading: 'Somnath Jyotirlinga, Gujarat',
      price: 4999,
      duration: "5D/4N",
      flights: 2,
      Hotels: 4,
      cars: 1
    },
    {
      id: "Spritual4",
      imageurl: 'https://www.tourmyindia.com/blog//wp-content/uploads/2021/04/Ranakpur-Temple-Rajasthan.jpg',
      tabHeading: 'Ranakpur Temple, Rajasthan',
      price: 9999,
      duration: "5D/4N",
      flights: 1,
      Hotels: 3,
      cars: 5
    },
    {
      id: "Spritual5",
      imageurl: 'https://www.tourmyindia.com/blog//wp-content/uploads/2021/04/Tirumala-Venkateswara.jpg',
      tabHeading: 'Tirumala Venkateswara Temple in Tirupati',
      price: 1999,
      duration: "4D/4N",
      flights: 2,
      Hotels: 4,
      cars: 3
    },
    {
        id: "Spritual6",
        imageurl: 'https://www.tourmyindia.com/blog//wp-content/uploads/2021/04/Hemkund-Sahib-Yatra.jpg',
        tabHeading: 'Shri Hemkund Sahib, Uttarakhand',
        price: 1999,
        duration: "6D/7N",
        flights: 2,
        Hotels: 3,
        cars: 5
    },
    {
        id: "Spritual7",
        imageurl: 'https://www.tourmyindia.com/blog//wp-content/uploads/2021/04/Dargah-Gharib-Nawaz-in-Ajmer.jpg',
        tabHeading: 'Dargah Gharib Nawaz in Ajmer, Rajasthan',
        price: 1999,
        duration: "4D/5N",
        flights: 2,
        Hotels: 4,
        cars: 8
    },
    {
        id: "Spritual8",
        imageurl: 'https://www.tourmyindia.com/blog//wp-content/uploads/2021/04/Velankanni-Church-Tamil-Nadu.jpg',
        tabHeading: 'Velankanni Church, Tamil Nadu',
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

export default Spritual;
