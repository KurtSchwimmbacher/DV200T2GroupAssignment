import homeVid from "../assets/videos/Home_pg_vid.mp4";
import productsImg from "../assets/images/speaker-img.png";
import tempImg from "../assets/images/earbud-img.jpg";
import headphoneTemp from "../assets/images/headphone-2.png";

import { useEffect, useState } from "react";
import "../styles/HeaderComp.css"; 

function HeaderComp(props) {
  const [isImg, setIsImg] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const [imgStyle, setImgStyle] = useState({});
  const [isLoaded, setIsLoaded] = useState(false); // State to track if the component has loaded

  useEffect(() => {
    switch (props.where) {
      case 'Home':
        setImgSrc(homeVid);
        setIsImg(false);
        break;
      case 'Products':
        setImgSrc(productsImg);
        setIsImg(true);
        break;
      case 'SingleProduct':
        // replace with img src from database
        setImgSrc(headphoneTemp);
        setIsImg(true);
        setImgStyle({ transform: 'rotate(20deg)' });
        break;
      case 'Community':
        // replace with img src from database
        setImgSrc(tempImg);
        setIsImg(true);
        break;
      default:
        break;
    }

    setIsLoaded(true); // Set the component as loaded
  }, [props.where]);

  return (
    <>
      {isImg ? (
        <img
          src={imgSrc}
          style={imgStyle}
          className={`media ${isLoaded ? 'scale-up' : ''}`} // Add fade-in class if loaded
        />
      ) : (
        <video
          className={`media ${isLoaded ? 'scale-up' : ''}`} // Add fade-in class if loaded
          src={imgSrc}
          autoPlay
          loop
          muted
        />
      )}
    </>
  );
}

export default HeaderComp;
