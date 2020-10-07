import React from 'react';
import { FadeTransform } from 'react-animation-components';
import { Card, CardImg, CardImgOverlay, CardTitle, Col } from 'reactstrap';

function ProjectCard(props) {
    return (
        <Col xs={props.cols}>
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                    <Card>
                        <CardImg width="100%" src={props.image} alt={props.name} />
                        <a href={props.link} target="_blank">
                        <CardImgOverlay className="overlay">
                            <CardTitle className="overlaytext">{props.description}</CardTitle>
                        </CardImgOverlay>
                        </a>
                    </Card>
            </FadeTransform>
        </Col>
    );
}

export default ProjectCard;