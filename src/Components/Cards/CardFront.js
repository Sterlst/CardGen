import React from 'react';

import './CardFront.css';

const CardFront = (props) => {
    const { title, link, handleClick } = props || {};
    return (
        <div className='front-card-container' onClick={handleClick}>
            <img src={link} alt=""/>
            <h4>{title}</h4>
            <p>Looking for how to express yourself to that special someone?</p>
        </div>
    );
}

export default CardFront;