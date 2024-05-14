import homeVid from "../assets/videos/Home_pg_vid.mp4";
import productsImg from "../assets/images/headphones-3.png";

import { useEffect, useState } from "react";

function HeaderComp(props) {

  const [isImg, setIsImg] = useState(false);
  const [imgSrc, setImgSrc] = useState("");

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
      default:
        break;
    }
  },[]);
   
    return(
      <>
        {isImg ? (
          <img src={imgSrc} className="video-home-pg"></img>
         ) : (
          <video className="video-home-pg" src={imgSrc} autoPlay loop muted> </video>
        )}
      </>
      // {isImg ? (
      //     <img src={imgSrc} className="video-home-pg"></img>
      // ) : (
      //   <video className="video-home-pg" src={imgSrc} autoPlay loop muted> </video>
      // )}
    );
}

export default HeaderComp; 