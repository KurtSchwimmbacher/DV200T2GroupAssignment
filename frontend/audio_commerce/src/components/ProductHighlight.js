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
                Sony Portable Walkman
            </h1>
            <h2 className="product-desc">
            The Sony Portable Walkman is a compact and versatile personal audio device, designed to provide high-quality sound on the go. Known for its iconic status since its inception, the Walkman has evolved through various models, offering a range of features that cater to music enthusiasts of all kinds.
            </h2>
            <Button className="highlight-btn" variant="dark">View Product</Button>
        </div>
       </div>

       
       </>
    );
}

export default ProductHighlight; 