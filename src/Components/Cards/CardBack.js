import React from 'react';
import { Button } from 'react-bootstrap';
import './CardBack.css';

const CardBack = (props) => {
    const { title, backMessage } = props || {};

    const handleClickFamily = () => {
        props.setOccassion(title)
        props.setRelationship('Family');
    }
    const handleClickFriend = () => {
        props.setOccassion(title)
        props.setRelationship('Friend');
    }
    const handleClickAcquaintance = () => {
        props.setOccassion(title)
        props.setRelationship('Acquaintance');
    }

    return (
        <div className='back-card-container' >
            <div className='back-card-button-container'>
                <Button onClick={handleClickFamily}>Family</Button>
                <Button onClick={handleClickFriend}>Friend</Button>
                <Button onClick={handleClickAcquaintance}>Acquaintance</Button>
            </div>
            <h4>{title}</h4>
            <p>{backMessage}</p>
        </div>
    );
}

export default CardBack;