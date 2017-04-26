import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Button } from 'react-bootstrap';

const Cohorts = ({ cohortsExample }) => (
  <Grid>
    <Row id="cohortContainer" >
      {/* the infos regarding the 3 examples are stored on the state as array
       we pass it as prop and map it */}
      {cohortsExample.map(elem => (
        <Col md={3} className="cohortCard"key={elem.name} >
          <span>
            <img src={`https://raw.githubusercontent.com/Kornil/Chingu-Animal-Icons/master/animals/${elem.name.toLowerCase().replace(/ /g, '-').replace(/.$/,'')}/favicon-32x32.png`} alt={elem.name} />
            <h2>{elem.name}</h2>
          </span>
          <div className="desc">
            <p>{elem.tags1.map(tag => `${tag} `)}<br />{elem.tags2.map(tag => `${tag} `)}</p>
            <p>{elem.description}</p>
            <Button className="join-button" href={elem.link} bsSize="small" bsStyle="success">{`Join now! (SPACE LEFT: ${elem.space})`}</Button>
          </div>
        </Col>
        ))}
    </Row>
  </Grid>
);

Cohorts.propTypes = {
  cohortsExample: PropTypes.arrayOf(PropTypes.object),
};

Cohorts.defaultProps = {
  cohortsExample: [],
};

export default Cohorts;
