import React, { useState } from 'react';
import WelcomeMessage from './WelcomeMessage.js';
import CardCarousel from '../../Components/CardCarousel/CardCarousel.js';
import Signatures from '../../Components/Signatures/Signatures';

import { dummySignatures } from '../../Constants/constants';

const Home = () => {

    const [occassion, setOccassion] = useState('');
    const [relationship, setRelationship] = useState('');
    

    return (

        <div>
            <WelcomeMessage />
            <Signatures occassion={occassion} relationship={relationship} dummySignatures={dummySignatures}/>
            <CardCarousel setOccassion={setOccassion} setRelationship={setRelationship}/>
        </div>    
    );
}

export default Home;