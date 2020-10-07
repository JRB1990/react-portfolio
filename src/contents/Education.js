import React, { Component } from 'react';
import Widecard from '../components/Widecard';
import Slide from 'react-reveal/Slide';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Slide right>
                    <Widecard
                        title="NuCamp BootCamp - Full Stack Web and Mobile Development"
                        where="Online"
                        from="2020"
                        to="Present"
                    />
                </Slide>
                <Slide right delay={260}>
                    <Widecard
                        title="Mathematics BSc"
                        where="Manchester University"
                        from="2009"
                        to="2012"
                    />
                </Slide>
            </div>
        );
    }
};

export default Education;