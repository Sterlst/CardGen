import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './CardCarousel.css';
import PosterCard from './PosterCard';

const CardCarousel = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4
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
            <PosterCard title={"Valentine's Day"}/>
            <PosterCard title={"Birthday"}/>
            <PosterCard title={"Christmas"}/>
            <PosterCard title={"Sympathy"}/>
            <PosterCard title={"Wedding"}/>
            <PosterCard title={"Easter"}/>
            <PosterCard title={"Get Well"}/>
            <PosterCard title={"Graduation"}/>
            <PosterCard title={"Retirement"}/>
            
        </Carousel>
    );
}

export default CardCarousel;