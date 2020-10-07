import React, { Component } from 'react';
import FadeIn from 'react-fade-in';

class About extends Component {
    render() {
        return (
            <div className="condiv">
                <FadeIn>
                    <h1 className="subtopic">About Me</h1>
                    <h4>Hello there,</h4>
                    <h1>I'm Joshua Robert Barber</h1>
                    <h3>Full Stack Web <u>Developer</u></h3>
                    <br></br>
                    <p>
                        My employment background is as a project manager/survey programmer with 7+ years’ experience in the market research and SaaS industries. Please take a look at my LinkedIn page in the additional links section to learn more about my job history and see some recommendations from former colleagues and managers.
                </p>
                    <p>
                        In my previous roles I have gained some experience with programming frameworks and languages, and I am currently taking part in an online bootcamp in order to start a new career in web development. Some of my work can be found in the Github link in the additional links section.
                </p>
                    <p>
                        My employment background is as a project manager/survey programmer with 7+ years’ experience in the market research and SaaS industries. Please take a look at my LinkedIn page in the additional links section to learn more about my job history and see some recommendations from former colleagues and managers.
                </p>
                    <p>
                        In my previous roles I have gained some experience with programming frameworks and languages, and I am currently taking part in an online bootcamp in order to start a new career in web development. Some of my work can be found in the Github link in the additional links section.
                </p>
                </FadeIn>
            </div>
        );
    }
};

export default About;