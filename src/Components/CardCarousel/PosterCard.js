import React from 'react';
import { Card } from 'react-bootstrap';
import './PosterCard.css';

const PosterCard = (props) => {
    const { title, link } = props || {};
    return (
        <Card className='poster-card'>
            <Card.Img variant="top" src={link} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default PosterCard;