import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import CardBack from './CardBack';
import CardFront from './CardFront';

const Card = (props) => {
    const { title, link } = props || {};
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      };

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <CardFront title={title} link={link} handleClick={handleClick} />
            <CardBack title={title} handleClick={handleClick}/>
        </ReactCardFlip>
    );
}

export default Card;