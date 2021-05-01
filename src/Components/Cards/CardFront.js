import React from 'react';

import './CardFront.css';

const CardFront = (props) => {
    const { title, link, frontMessage, handleClick } = props || {};
    return (
        <div className='front-card-container' onClick={handleClick}>
            <img src={link} alt=""/>
            <h4>{title}</h4>
            <p>{frontMessage}</p>
        </div>
    );
}

export default CardFront;