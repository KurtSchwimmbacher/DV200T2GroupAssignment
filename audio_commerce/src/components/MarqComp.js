import Marquee from "react-fast-marquee";

function MarqComp() {

   
    return(
        <Marquee className="marquee-comp" direction="left" loop={0} gradientWidth={50} autoFill={true}>
            <div>
                <h1>   Headphones   •   </h1>
            </div>
            <div>
                <h1>    Keyboards   •   </h1>
            </div>
            <div>
                <h1>    Attachments   •   </h1>
            </div>
            <div>
                <h1>    Audio Equipment  •   </h1>
            </div>
        </Marquee>
    );
}

export default MarqComp; 