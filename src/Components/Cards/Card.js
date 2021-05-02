import React from 'react';
import ReactCardFlip from 'react-card-flip';
import CardBack from './CardBack';
import CardFront from './CardFront';

const Card = (props) => {

    return (
        <ReactCardFlip isFlipped={props.isFlipped} flipDirection="horizontal">
            <CardFront {...props} />
            <CardBack {...props} />
        </ReactCardFlip>
    );
}

export default Card;