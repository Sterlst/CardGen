import React, { useEffect, useState } from 'react';
import WelcomeMessage from './WelcomeMessage.js';
import CardCarousel from '../../Components/CardCarousel/CardCarousel.js';
import Signatures from '../../Components/Signatures/Signatures';
import { useEasybase } from 'easybase-react';
import Navbar from '../../Components/Navbar/Navbar';
import './Home.css';

const Home = () => {

    const [occassion, setOccassion] = useState('');
    const [relationship, setRelationship] = useState('');

    const [easybaseData, setEasybaseData] = useState([]);
    const { db } = useEasybase();
  
    useEffect(() => {
      const mounted = async() => {
        const ebData = await db("SIGNATURES").return().all();
        setEasybaseData(ebData);
      }
      mounted();
    }, [db])
    
    return (
        <div className='grid-container grid-container-mobile home'>
            <Navbar />
            <WelcomeMessage />
            <Signatures occassion={occassion} relationship={relationship} easybaseData={easybaseData}/>
            <CardCarousel setOccassion={setOccassion} setRelationship={setRelationship}/>
        </div>    
    );
}

export default Home;