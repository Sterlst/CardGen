import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import CardBack from './CardBack';
import CardFront from './CardFront';

const Card = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      };

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <CardFront {...props} handleClick={handleClick} />
            <CardBack {...props} handleClick={handleClick}/>
        </ReactCardFlip>
    );
}

export default Card;