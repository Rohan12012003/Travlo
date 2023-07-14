// WildLife.js
import React, { useState } from 'react';
import SmallTab from './SmallTabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';


function Mountain(props) {
  //const [user, setUser] = useState({ wishlist: [] });
  const [wishlist, setWishlist] = useState([]);
  const location = useLocation();
  const smallTabsData = [
    {
      id: "Mountain1",
      imageurl: 'https://www.tourmyindia.com/blog//wp-content/uploads/2020/12/Munnar-Hill-Station-Kerala.jpg',
      tabHeading: 'Munnar, Kerala',
      price: 3999, 
      duration: "3D/4N",
      flights: 2,
      Hotels: 1,
      cars: 2
    },
    {
      id: "Mountain2",
      imageurl: 'https://www.tourmyindia.com/blog//wp-content/uploads/2020/11/Ranikhet-Beautiful-Forest-Veiw.jpg',
      tabHeading: 'Ranikhet, Uttarakhand',
      price: 7999,
      duration: "1D/2N",
      flights: 1,
      Hotels: 2,
      cars: 3
    },
    {
      id: "Mountain3",
      imageurl: 'https://www.tourmyindia.com/blog//wp-content/uploads/2020/12/Dharamshala-Himachal.jpg',
      tabHeading: 'Dharamshala, Himachal Pradesh',
      price: 4999,
      duration: "5D/4N",
      flights: 2,
      Hotels: 4,
      cars: 1
    },
    {
      id: "Mountain4",
      imageurl: 'https://www.tourmyindia.com/blog//wp-content/uploads/2020/12/Mirik-Hill-Station.jpg',
      tabHeading: 'Mirik, West Bengal',
      price: 9999,
      duration: "5D/4N",
      flights: 1,
      Hotels: 3,
      cars: 5
    },
    {
      id: "Mountain5",
      imageurl: 'https://www.tourmyindia.com/blog//wp-content/uploads/2020/12/Darjeeling-Hill-Station.jpg',
      tabHeading: 'Darjeeling, West Bengal',
      price: 1999,
      duration: "4D/4N",
      flights: 2,
      Hotels: 3,
      cars: 3
    },
    {
        id: "Mountain6",
        imageurl: 'https://www.tourmyindia.com/blog//wp-content/uploads/2020/12/Gulmarg.jpg',
        tabHeading: 'Gulmarg, Kashmir',
        price: 1999,
        duration: "4D/4N",
        flights: 2,
        Hotels: 3,
        cars: 3
    },
    {
        id: "Mountain7",
        imageurl: 'https://www.tourmyindia.com/blog//wp-content/uploads/2020/11/Auli-Snow.jpg',
        tabHeading: 'Auli, Uttarakhand',
        price: 1999,
        duration: "4D/4N",
        flights: 2,
        Hotels: 3,
        cars: 3
    },
    {
        id: "Mountain8",
        imageurl: 'https://www.tourmyindia.com/blog//wp-content/uploads/2020/12/Manali-Himachal.jpg',
        tabHeading: 'Manali, Himachal Pradesh',
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

export default Mountain;
