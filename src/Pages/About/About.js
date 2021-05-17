import React from 'react';
import Navigationbar from '../../Components/Navigationbar';
import Sterling from '../../Images/Sterling.jpg';
import Blake from '../../Images/BlakeBit.svg';

import './About.css';

const About = () => {

    return (

        <div className='about-page-container'>
            <div className='header-page'>
                <Navigationbar />
                <div className='header-container'>
                    <h1 className = 'what-to-say'>Knowing What to Say is Hard</h1>
                    <h4 className = 'quote'>
                        <p>S&B Cards provides you with the</p>
                        <p>inspiration for unique card signatures</p>
                        <p>for all card writing occasions.</p>
                    </h4>
                    <button className="meet-the-team-button">Meet the Team</button>
                </div>
            </div>

            <div className="leadership-section">
            <h1>Leadership</h1>
            <p>Our team is focused on crafting elegant and effective card</p>
            <p>signatures which will ensure you can express yourself</p>
            <p>perfectly on every special occasion.</p>
            </div>

            <div className="row">
                <div className="column">
                    <div className="card">
                        <img src={Sterling} alt="Sterling" className="profile-pic"/>
                            <div className="container">
                                <h3>Sterling Tamboline</h3>
                                <p className="title">Programming Guru</p>
                                <p>Some text that describes me.</p>
                                <div>
                                    <p>LinkedIn</p>
                                    <p>GitHub</p>
                                </div>
                            </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src={Blake} alt="Blake" className="profile-pic"/>
                            <div className="container">
                                <h3>Blake Tamboline</h3>
                                <p className="title">Creative Leader</p>
                                <p>Hi my name is Blake! I am a self-taught programmer 
                                    with passion for technology and building useful applications. </p>
                                <div>
                                    <p>LinkedIn</p>
                                    <p>GitHub</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default About;
