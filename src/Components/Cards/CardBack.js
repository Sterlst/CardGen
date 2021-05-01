import React from 'react';
import { Button } from 'react-bootstrap';
import './CardBack.css';

const CardBack = (props) => {
    const { title, backMessage, handleClick } = props || {};
    return (
        <div className='back-card-container'>
            <div className=' back-card-button-container'>
                <Button variant="dark">Friend</Button>
                <Button variant="dark">Family</Button>
                <Button variant="dark">Acquaintance</Button>
                <Button  variant="info" onClick={handleClick}>Go Back</Button>
            </div>
            <h4>{title}</h4>
            <p>{backMessage}</p>
        </div>
    );
}

export default CardBack;