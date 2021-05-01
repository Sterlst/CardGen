import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './CardCarousel.css';
import PosterCard from './PosterCard';

const CardCarousel = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <Carousel
            showDots={true}
            responsive={responsive}
            infinite={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
        >
            <PosterCard title={"Valentine's Day"} link={"/Images/Cards/Valentine's_Card.png"}/>
            <PosterCard title={"Birthday"} link={"/Images/Cards/Birthday_Card.png"}/>
            <PosterCard title={"Christmas"} link={"/Images/Cards/Christmas_Card.png"}/>
            <PosterCard title={"Sympathy"} link={"/Images/Cards/Sympathy_Card.png"}/>
            <PosterCard title={"Wedding"} link={"/Images/Cards/Wedding_Card.png"}/>
            <PosterCard title={"Easter"} link={"/Images/Cards/Easter_Card.png"}/>
            <PosterCard title={"Get Well"} link={"/Images/Cards/Get_Well_Card.png"}/>
            <PosterCard title={"Graduation"} link={"/Images/Cards/Graduation_Card.png"}/>
            <PosterCard title={"Retirement"} link={"/Images/Cards/Retirement_Card.png"}/>
            
        </Carousel>
    );
}

export default CardCarousel;