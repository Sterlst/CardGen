import React from 'react';
import WelcomeMessage from './WelcomeMessage.js';

const Home = () => {

    return (
        <div>
            <WelcomeMessage></WelcomeMessage>
            <a href="/Questionnaire">Start</a>
        </div>    
    );
}

export default Home;