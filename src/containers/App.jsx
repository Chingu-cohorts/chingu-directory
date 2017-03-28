import React from 'react';
import { connect } from 'react-redux';

import NavbarElement from '../components/Navbar';
import CallToAction from '../components/CallToAction';
import Cohorts from '../components/Cohorts';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Donation from '../components/Donation';
import CohortsInfo from '../components/CohortsInfo';

import * as actions from '../actions';

/**
 * this container is defined as class so we can modify state
 */
class App extends React.Component {
  /**
   * @param {*} props comprehends all the props and actions defined below
   */
  constructor(props) {
    super(props);
    (function getData() {
      props.testimonialsArray.map(user => props.getGithubData(user.login));
    }());
  }
  /**
   * this is our statefull render
   * @return {objects} our stateless components
   */
  render() {
    return (
      <div>
        <NavbarElement />
        <CallToAction />
        <Cohorts cohortsExample={this.props.cohortsExample} />
        <CohortsInfo />
        <Projects />
        <Testimonials testimonialsArray={this.props.testimonialsArray} />
        <Donation />
      </div>
    );
  }
}

App.propTypes = {
  cohortsExample: React.PropTypes.arrayOf(React.PropTypes.object),
  testimonialsArray: React.PropTypes.arrayOf(React.PropTypes.object),
  getGithubData: React.PropTypes.func,
};

App.defaultProps = {
  cohortsExample: [],
  testimonialsArray: [],
  getGithubData: actions.getGithubData,
};

const mapStateToProps = state => ({
  cohortsExample: state.cohorts.cohortsExample,
  testimonialsArray: state.testimonials.testimonialsArray,
});

App.contextTypes = {
  store: React.PropTypes.object.isRequired,
};

export default connect(mapStateToProps, actions)(App);
