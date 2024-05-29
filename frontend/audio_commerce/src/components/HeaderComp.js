import homeVid from "../assets/videos/Home_pg_vid.mp4";
import productsImg from "../assets/images/speaker-img.png";
import tempImg from "../assets/images/earbud-img.jpg";

import { useEffect, useState } from "react";
import "../styles/HeaderComp.css";

function HeaderComp(props) {
  const [isImg, setIsImg] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const [imgStyle, setImgStyle] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

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
        setImgSrc(props.singleImg);
        setIsImg(true);
        setImgStyle({mixBlendMode: "multiply", objectFit:"contain"});
        break;
      case 'Community':
        setImgSrc(tempImg);
        setIsImg(true);
        break;
      default:
        break;
    }

    setIsLoaded(true);
  }, [props.where, props.singleImg]); // Added props.singleImg to the dependency list

  return (
    <>
      {isImg ? (
        <img
          src={imgSrc}
          style={imgStyle}
          className={`media ${isLoaded ? 'scale-up' : ''}`}
          alt="Header"
        />
      ) : (
        <video
          className={`media ${isLoaded ? 'scale-up' : ''}`}
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
