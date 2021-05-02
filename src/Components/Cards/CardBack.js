import React from 'react';
import { Button } from 'react-bootstrap';
import './CardBack.css';

const CardBack = (props) => {
    const { title, backMessage } = props || {};
    return (
        <div className='back-card-container'>
            <div className='back-card-button-container'>
                <Button>Family</Button>
                <Button>Friend</Button>
                <Button>Acquaintance</Button>
            </div>
            <h4>{title}</h4>
            <p>{backMessage}</p>
        </div>
    );
}

export default CardBack;