import hightlightImg from "../assets/images/walkman-img.png";

import Button from 'react-bootstrap/Button';

import '../styles/ProductHighlight.css';


function ProductHighlight() {

   
    return(
       <>
       <div className="highlight-con">
        <img className="highlight-img" src={hightlightImg} alt="walkman image"></img>

        <div>
            <h1 className="product-title">
                Product Highlight
            </h1>
            <h2 className="product-desc">
            Lorem ipsum 
                    dolor sit amaet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Mauris finibus nec massa at porttitor.
            </h2>
            <Button className="highlight-btn" variant="dark">View Product</Button>
        </div>
       </div>

       
       </>
    );
}

export default ProductHighlight; 