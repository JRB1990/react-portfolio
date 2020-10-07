import React, { Component } from 'react';
import Social from '../components/Social';
import profilepic from '../img/Josh_Profile_Pic.png';
import Typical from 'react-typical';
import FadeIn from 'react-fade-in';

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <FadeIn>
                    <img src={profilepic} className="profilepic" alt="Profile Pic"></img>
                </FadeIn>
                <Typical
                    steps={['Joshua Robert Barber', 2000, 'Full Stack Web Developer', 1000]}
                    loop={Infinity}
                    wrapper="p"
                />
                <Social />
            </div>
        );
    }
};

export default Home;