import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './CardCarousel.css';
import Card from '../Cards/Card';

const CardCarousel = () => {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 2000 },
        items: 6,
        slidesToSlide: 3
      },
      desktop: {
        breakpoint: { max: 2000, min: 1200 },
        items: 5,
        slidesToSlide: 2
      },
      smallDesktop: {
        breakpoint: { max: 1200, min: 950 },
        items: 4,
        slidesToSlide: 1
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
            draggable={false}
        >
            <Card title={"Valentine's Day"} link={"/Images/Cards/Valentine's_Card.png"}/>
            <Card title={"Birthday"} link={"/Images/Cards/Birthday_Card.png"}/>
            <Card title={"Christmas"} link={"/Images/Cards/Christmas_Card.png"}/>
            <Card title={"Sympathy"} link={"/Images/Cards/Sympathy_Card.png"}/>
            <Card title={"Wedding"} link={"/Images/Cards/Wedding_Card.png"}/>
            <Card title={"Easter"} link={"/Images/Cards/Easter_Card.png"}/>
            <Card title={"Get Well"} link={"/Images/Cards/Get_Well_Card.png"}/>
            <Card title={"Graduation"} link={"/Images/Cards/Graduation_Card.png"}/>
            <Card title={"Retirement"} link={"/Images/Cards/Retirement_Card.png"}/>
            
        </Carousel>
    );
}

export default CardCarousel;