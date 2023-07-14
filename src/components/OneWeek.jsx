
import React, { useState } from 'react';
import SmallTab from './SmallTabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';


function OneWeek(props) {
  //const [user, setUser] = useState({ wishlist: [] });
  const [wishlist, setWishlist] = useState([]);
  const location = useLocation();
  const smallTabsData = [
    {
      id: "Mountain1",
      imageurl: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2015/09/Promenade-beach-Pondicherry.jpg',
      tabHeading: 'Pondicherry – The French Town',
      price: 5999, 
      duration: "7D/8N",
      flights: 2,
      Hotels: 5,
      cars: 15
    },
    {
      id: "Mountain2",
      imageurl: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2015/09/Gokarna-beach.jpg',
      tabHeading: 'Gokarna – The Less Crowded Goa',
      price: 7999,
      duration: "6D/7N",
      flights: 1,
      Hotels: 2,
      cars: 13
    },
    {
      id: "Mountain3",
      imageurl: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2015/09/Rishikesh-rafting.jpg',
      tabHeading: ' Rishikesh – The Yoga Capital',
      price: 7999,
      duration: "7D/6N",
      flights: 2,
      Hotels: 4,
      cars: 12
    },
    {
      id: "Mountain4",
      imageurl: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2015/09/Darjeeling-train.jpg',
      tabHeading: 'Darjeeling – The Land Of Thunderbolt',
      price: 9999,
      duration: "5D/6N",
      flights: 1,
      Hotels: 3,
      cars: 10
    },
    {
      id: "Mountain5",
      imageurl: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2015/09/Bhagsu-nag-falls.jpg',
      tabHeading: 'McLeodganj – The Little Lhasa',
      price: 8999,
      duration: "7D/7N",
      flights: 2,
      Hotels: 3,
      cars: 7
    },
    {
        id: "Mountain6",
        imageurl: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2015/09/crows-lake-Sikkim.jpg',
        tabHeading: 'Sikkim – The Organic State',
        price: 9999,
        duration: "8D/7N",
        flights: 2,
        Hotels: 4,
        cars: 10
    },
    {
        id: "Mountain7",
        imageurl: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2015/09/Kanyakumari-beach.jpg',
        tabHeading: ' Kanyakumari – The Southernmost Tip',
        price: 10999,
        duration: "6D/7N",
        flights: 2,
        Hotels: 5,
        cars: 5
    },
    {
        id: "Mountain8",
        imageurl: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2015/09/Hampi-Temples.jpg',
        tabHeading: ' Hampi – The Forgotten Empire',
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
    <h1 className='super-heading col-12'>One-Week Holiday Bliss!</h1>
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

export default OneWeek;
