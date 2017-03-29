import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

/* At this time projects are inserted manually, TODO pull them from state */

const Projects = () => (
  <Grid>
    <Row className="standardContainer" id="projects">
      <div className="titleContainer">
        <h3 className="title">Things we have built</h3>
      </div>
      <Col md={3} >
        <div className="thumbnail">
          <div className="project-title">
            <img alt="MDNBot" src="https://raw.githubusercontent.com/Kornil/Chingu-Animal-Icons/master/robots/chat-robot-genie/favicon-32x32.png" />
            <h4>MDNBot</h4>
          </div>
          <p>A Slack bot can search and reference Mozilla Developers Network for you.</p>
        </div>
      </Col>
      <Col md={3} >
        <div className="thumbnail">
          <div className="project-title">
            <img alt="Lion-bot" src="https://raw.githubusercontent.com/Kornil/Chingu-Animal-Icons/master/robots/chat-robot-flash/favicon-32x32.png" />
            <h4>Lion-bot</h4>
          </div>
          <p>Do you and your team use Slack?
            Now you can get some good jokes delivered to you right inside the app.</p>
        </div>
      </Col>
      <Col md={3} >
        <div className="thumbnail">
          <div className="project-title">
            <img alt="Duma" src="https://raw.githubusercontent.com/Kornil/Chingu-Animal-Icons/master/robots/chat-robot-life/favicon-32x32.png" />
            <h4>Duma</h4>
          </div>
          <p>Duma is a simple, clean word-of-the-day app for Chrome.</p>
        </div>
      </Col>
      <Col md={3} >
        <div className="thumbnail">
          <div className="project-title">
            <img alt="Duma" src="https://raw.githubusercontent.com/Kornil/Chingu-Animal-Icons/master/robots/chat-robot-angry/favicon-32x32.png" />
            <h4>Momentum</h4>
          </div>
          <p>The team reverse-engineered a popular Chrome extension Momentum,
            a productivity and habit tracker.</p>
        </div>
      </Col>
    </Row>
  </Grid>
);

export default Projects;
