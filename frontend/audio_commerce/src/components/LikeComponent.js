import { useState, useEffect } from 'react';
import axios from 'axios';
import { SuitHeart, SuitHeartFill } from 'react-bootstrap-icons';

function LikeComponent({ productID, userID }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        // Fetch liked status when component mounts
        const fetchLikedStatus = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/products/${productID}`);
                const product = response.data;
                console.log(product)
                setIsLiked(product.liked.includes(userID));
            } catch (error) {
                console.error('Error fetching liked status:', error);
            }
        };

        fetchLikedStatus(); 
    }, [productID, userID]); 



    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleLikeProduct = async () => {
        try {
            if (isLiked) {
                // Unlike the product
                const response = await axios.patch(`http://localhost:5000/api/products/unlike/${productID}`, { userID });
                if (response.status === 200) {
                    setIsLiked(false);
                    alert("uniking product");
                } else {
                    console.error('Failed to unlike product');
                }
            } else {
                // Like the product
                const response = await axios.patch(`http://localhost:5000/api/products/like/${productID}`, { userID });
                if (response.status === 200) {
                    setIsLiked(true);
                    alert("Liking product")
                } else {
                    console.error('Failed to like product');
                }
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div 
            className="heart-icon-con" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            onClick={handleLikeProduct}
        >
            {isHovered || isLiked ? <SuitHeartFill className="heart-active" /> : <SuitHeart className="heart" />}
        </div>
    );
}

export default LikeComponent;
