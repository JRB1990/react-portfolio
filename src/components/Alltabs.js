import React, { Component } from "react";
import Tabs, { TabPane } from 'rc-tabs';
import { Container, Row } from 'reactstrap';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../contents/Projectsdata';
import '../../node_modules/rc-tabs/assets/index.css';

class AllTabs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: PROJECTS
        }
    }
    render() {
        return (
            <div className="tablist">
                <Tabs defaultActiveKey="1" tabBarGutter={100}>
                    <TabPane tab="All" key="1">
                        <Container>
                            <Row>
                                <ProjectCard cols="4" image={this.state.projects[0].image} name={this.state.projects[0].name} description={this.state.projects[0].description} link={this.state.projects[0].link} />
                                <ProjectCard cols="4" image={this.state.projects[1].image} name={this.state.projects[1].name} description={this.state.projects[1].description} link={this.state.projects[1].link} />
                                <ProjectCard cols="4" image={this.state.projects[2].image} name={this.state.projects[2].name} description={this.state.projects[2].description} link={this.state.projects[2].link} />
                            </Row>
                        </Container>
                    </TabPane>
                    <TabPane tab="Bootstrap" key="2">
                        <Container>
                            <Row>
                                <ProjectCard cols="4" image={this.state.projects[0].image} name={this.state.projects[0].name} description={this.state.projects[0].description} link={this.state.projects[0].link} />
                                <ProjectCard cols="4" image={this.state.projects[1].image} name={this.state.projects[1].name} description={this.state.projects[1].description} link={this.state.projects[1].link} />
                            </Row>
                        </Container>
                    </TabPane>
                    <TabPane tab="React" key="3">
                        <Container>
                            <Row>
                                <ProjectCard cols="8" image={this.state.projects[2].image} name={this.state.projects[2].name} description={this.state.projects[2].description} link={this.state.projects[2].link} />
                            </Row>
                        </Container>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default AllTabs;