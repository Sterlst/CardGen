import React from 'react';
import { motion } from 'framer-motion';

import './CardFront.css';

const cardFrontVariants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 0.7,
        transition: {
            delay: 0.25,
            duration: 1
        }
    },
    hover: {
        opacity: 1.1
    }
}
   

const CardFront = (props) => {
    const { title, link, frontMessage, handleClick } = props || {};
    return (
        <motion.div className='front-card-container' onClick={handleClick}
            variants={cardFrontVariants}
            initial="hidden"
            animate="show"
            whileHover="hover">
            <img src={link} alt=""/>
            <h4>{title}</h4>
            <p>{frontMessage}</p>
        </motion.div>
    );
}

export default CardFront;