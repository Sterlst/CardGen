import React from 'react';
import WelcomeMessage from './WelcomeMessage.js';
import CardCarousel from '../../Components/CardCarousel/CardCarousel.js';
import Signatures from '../../Components/Signatures/Signatures';
const Home = () => {
    return (
        <div>
            <WelcomeMessage />
            <Signatures />
            <CardCarousel />
        </div>    
    );
}

export default Home;