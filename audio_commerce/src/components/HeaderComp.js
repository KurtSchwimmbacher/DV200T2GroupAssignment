import homeVid from "../assets/videos/Home_pg_vid.mp4";

function HeaderComp() {

   
    return(
       <>
         <video className="video-home-pg" src={homeVid} autoPlay loop muted> </video>
       </>
    );
}

export default HeaderComp; 