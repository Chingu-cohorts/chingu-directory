import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const Testimonials = ({ testimonialsArray }) => (
  <Grid>
    <Row className="standardContainer" id="testimonials">
      <h3>What they say about us</h3>

      {testimonialsArray.map(user => (
        <Col md={3} key={user.login}>
          <div className="testimonial-text">
            <p>&quot;{user.quote}&quot;</p>
          </div>
          <div className="testimonials-title">
            <img alt={user.login} src={`${user.image_url}.png`} height="32px" />
            <a href={user.html_url} target="_blank" rel="noreferrer noopener"><h4>{user.login}</h4></a>
          </div>
        </Col>
      ))}

    </Row>
  </Grid>
);

Testimonials.propTypes = {
  testimonialsArray: React.PropTypes.arrayOf(React.PropTypes.object),
};

Testimonials.defaultProps = {
  testimonialsArray: [],
};

export default Testimonials;
