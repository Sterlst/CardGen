import React from 'react';
import WelcomeMessage from './WelcomeMessage.js';
import CardCarousel from '../../Components/CardCarousel/CardCarousel.js';

const Home = () => {
    return (
        <div>
            <WelcomeMessage />
            
            <CardCarousel />
        </div>    
    );
}

export default Home;