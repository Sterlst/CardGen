import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './CardCarousel.css';
import PosterCard from './PosterCard';

const CardCarousel = () => {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 2000 },
        items: 6
      },
      desktop: {
        breakpoint: { max: 2000, min: 1200 },
        items: 5
      },
      smallDesktop: {
        breakpoint: { max: 1200, min: 950 },
        items: 4
      },
      largeTablet: {
        breakpoint: { max: 950, min: 715 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 715, min: 480 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 480, min: 0 },
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