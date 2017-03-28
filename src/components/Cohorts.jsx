import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

const Cohorts = ({ cohortsExample }) => (
  <Grid>
    <Row>
      <Col md={3} >
        <h3>The Chingu Project</h3>
        <p>Simple explanation + <a href="http://bit.ly/2kpcSC0">Survey Link</a>.</p>
      </Col>
      {/* the infos regarding the 3 examples are stored on the state as array
       we pass it as prop and map it */}
      {cohortsExample.map(elem => (
        <Col md={3} className="cohortCard" key={elem.name} >
          <span>
            <img src={`https://raw.githubusercontent.com/Kornil/Chingu-Animal-Icons/master/animals/${elem.name.toLowerCase().replace(/ /g, '-')}/favicon-32x32.png`} alt={elem.name} />
            <h2>{elem.name}</h2>
          </span>
          <div className="desc">
            <p>{elem.tags1.map(tag => `${tag} `)}<br />{elem.tags2.map(tag => `${tag} `)}</p>
            <p>{elem.description}</p>
            <Button href="http://bit.ly/2m0XqK3" bsSize="small" bsStyle="success">Join now!</Button>
          </div>
        </Col>
        ))}
    </Row>
  </Grid>
);

Cohorts.propTypes = {
  cohortsExample: React.PropTypes.arrayOf(React.PropTypes.object),
};

Cohorts.defaultProps = {
  cohortsExample: [],
};

export default Cohorts;
