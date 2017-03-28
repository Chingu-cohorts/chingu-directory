import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const CallToAction = () => (
  <Grid>
    <Row className="call-to-action">
      <Col md={8} >
        <h1>
          <span className="yellow">LEARN</span> MORE<br />
          <span className="yellow">FEEL</span> LESS FRUSTRATED<br />
          <span className="yellow">GET</span> THE JOB
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
