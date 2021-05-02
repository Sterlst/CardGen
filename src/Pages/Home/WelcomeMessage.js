import React from 'react';
import './WelcomeMessage.css';
import { motion } from 'framer-motion';


const messageVariants = (delayTime, xstart, ystart) => {
    return ({
        hidden: {
            opacity: 0,
            x: xstart,
            y: ystart
        },
        show: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
            type: 'spring',
            delay: delayTime,
            duration: 1.5
            }
        }
    })
}

const WelcomeMessage = () => {
    return (
    <div className="welcome-message"
    >
        <motion.h1 className="be-thoughtful"
            variants={messageVariants(1.5, 0, -100)}
            initial="hidden"
            animate="show"
            whileHover="hover">
            Be Thoughtful
        </motion.h1>
        <motion.h1 className="signature"
                variants={messageVariants(0.5, '25vw', 0)}
                initial="hidden"
                animate="show">
            S&B Card Signatures
        </motion.h1>
        <motion.h1 className="slogan"
                    variants={messageVariants(1, '-25vw', 0)}
                    initial="hidden"
                    animate="show">
            <p> We make card writing easy </p>
            <p> for all occasions. </p>
        </motion.h1>
    </div>
    )
}

export default WelcomeMessage;