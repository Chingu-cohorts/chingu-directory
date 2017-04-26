import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const CallToAction = () => (
  <Grid>
    <Row className="call-to-action">
      <Col md={8} >
        <h1>
          <span className="yellow">CODE</span> MORE<br />
          <span>LEARN</span> MORE<br />
          <span className="yellow">BUILD</span> MORE
        </h1>
      </Col>
      <Col md={4} className="call-right">
        <p>
          Chingu is a global collaboration platform and coding-cohort generator.
          We connect motivated learners with shared goals to learn, help and build together.
        </p>
      </Col>
    </Row>
  </Grid>
);

export default CallToAction;
