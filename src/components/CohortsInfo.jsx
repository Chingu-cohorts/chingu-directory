import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const CohortsInfo = () => (
  <Grid className="buttonContainer">
    <Row>
      <div>
        <h2 className="title">WHY CHINGU</h2>
      </div>
      <Col md={4} >
        <div className="circle">
          <i className="material-icons">favorite_border</i>
        </div>
        <h4>Share</h4>
        <p>You become part of a family of developers around the world
          always ready to help and cheer for you</p>
      </Col>
      <Col md={4} >
        <div className="circle">
          <i className="material-icons">check</i>
        </div>
        <h4>Learn</h4>
        <p>The friendly environment and the helpful comunity can help you become a better dev</p>
      </Col>
      <Col md={4} >
        <div className="circle">
          <i className="material-icons">public</i>
        </div>
        <h4>Build</h4>
        <p>Every month we have new challenges, team projects,
          a lot of projects start by the Chingus themselves</p>
      </Col>
    </Row>
  </Grid>
);

export default CohortsInfo;
