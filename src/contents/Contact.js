import React from 'react';
import Social from '../components/Social';
import FadeIn from 'react-fade-in';

function Contact(props) {
    return (
        <div className="condiv contact">
            <FadeIn>
                <h1 className="subtopic">Contact Me</h1>
                <h3><i className="fas fa-envelope"></i> Email  -   <a href="mailto:barber5702@hotmail.com">barber5702@hotmail.com</a></h3>
                <h3><i className="fas fa-phone"></i> Telephone   -   <a role="button" className="btn btn-link" href="tel:+447827967940"> (+44)7827-967-940</a></h3>
            </FadeIn>
            <Social />
        </div>
    );
};

export default Contact;