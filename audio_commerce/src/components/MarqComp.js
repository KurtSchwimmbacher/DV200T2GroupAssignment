import Marquee from "react-fast-marquee";

function MarqComp() {

   
    return(
        <Marquee className="marquee-comp" direction="left" loop={0} gradientWidth={50}>
            <div>
                <h1>Im a marquee</h1>
            </div>
        </Marquee>
    );
}

export default MarqComp; 