import React, { useEffect, useState ,useNavigate} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import WildLife from "./WildLife";
import {Link} from "react-router-dom";



function Tab(props) {
  const backgroundImageUrl = props.imageurl;
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showWildLife, setShowWildLife] = useState(false);
 // const navigate = useNavigate();
  const handleButtonHover = () => {
    setIsHovered(!isHovered);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleWatchMore = () => {
    setShowWildLife(!showWildLife);
    //navigate('/WildLife');
  };


  const DynamicComponent = props.id ? require(`./${props.id}`).default : null;

  return (
    <div className="tab">
      <FontAwesomeIcon
        icon={faHeart}
        style={{
          color: isClicked ? 'red' : 'white',
          border: '2px solid white',
          borderRadius: '50%',
          padding: '10px',
          cursor: 'pointer',
          position: 'absolute',
          top: 35,
          right: 0,
          transform: 'translate(-50%, -50%)',
        }}
        onClick={handleClick}
      />
      <div
        className="background-img"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundRepeat: 'no-repeat',
          filter: isHovered ? 'blur(2px)' : 'none',
          backgroundSize: 'cover',
        }}
      ></div>
      <h1 className="tab-heading" >{props.tabHeading}</h1>
      <p className="tab-content">{props.tabContent}</p>
      
       {(<Link to={"/"+props.id}>
      <button
        type="button"
        className="btn btn-info btn-lg tab-btn"
        onMouseEnter={handleButtonHover}
        onMouseLeave={handleButtonHover}
        onClick={handleWatchMore}
        style={{background: "transparent", outline: "none" ,color:"white" ,fontWeight:"bold"}}
      >
        Watch More +
      </button>
      </Link>)}

      {/*showWildLife && DynamicComponent && <DynamicComponent />*/}
    </div>
  );
}

export default Tab;
