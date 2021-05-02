import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ResponsiveCarousel, CardTypes } from '../../Constants/constants';
import './CardCarousel.css';
import Card from '../Cards/Card';

const CardCarousel = () => {
    const [ currentFlippedIndex, setCurrentFlippedIndex ] = useState(-1);

    return (
        <Carousel
            showDots={true}
            responsive={ResponsiveCarousel}
            infinite={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            draggable={false}
        >
            {(Object.values(CardTypes).map((key, index) => (
                <Card 
                  key={index} 
                  title={key.title} 
                  link={key.link} 
                  frontMessage={key.frontMessage} 
                  backMessage={key.backMessage} 
                  isFlipped={index === currentFlippedIndex} 
                  handleClick={() => setCurrentFlippedIndex(index)}
                />
            )))
            }
        </Carousel>
    );
}

export default CardCarousel;