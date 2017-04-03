import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

/* At this time projects are inserted manually, TODO pull them from state */

const Projects = ({ projectsArray }) => (
  <Grid>
    <Row className="standardContainer" id="projects">
      <div className="titleContainer">
        <h3 className="title">Things we have built</h3>
      </div>
      {projectsArray.map(project => (
        <Col md={3} className="project-card">
          <a href={project.link}>
            <div className="thumbnail">
              <div className="project-title">
                <img alt={project.title} src={project.image} />
                <h4>{project.title}</h4>
              </div>
              <p>{project.description}</p>
            </div>
          </a>
        </Col>
      ))}
    </Row>
  </Grid>
);

Projects.propTypes = {
  projectsArray: React.PropTypes.arrayOf(React.PropTypes.object),
};

Projects.defaultProps = {
  projectsArray: [],
};

export default Projects;
