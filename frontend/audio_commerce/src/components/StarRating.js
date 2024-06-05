import { useState } from 'react';
import { Star, StarFill } from 'react-bootstrap-icons';

function StarRating() {
    const [hoverIndex, setHoverIndex] = useState(-1);

    const handleMouseOverStar = (index) => {
        setHoverIndex(index);
    };

    const handleMouseExitStar = () => {
        setHoverIndex(-1);
    };

    return (
        <div className="star-rating-con" onMouseLeave={handleMouseExitStar}>
            {[...Array(5)].map((_, index) => (
                <div
                    key={index}
                    onMouseEnter={() => handleMouseOverStar(index)}
                    className="star-rating-con"
                >
                    {index <= hoverIndex ? <StarFill className="star-5-active" /> : <Star className="star-5" />}
                </div>
            ))}
        </div>
    );
}

export default StarRating;
