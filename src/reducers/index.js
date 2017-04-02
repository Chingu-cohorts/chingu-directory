import { combineReducers } from 'redux';

import cohorts from './cohorts';
import testimonials from './testimonials';
import projects from './projects';

const selection = (state = 0, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({ cohorts, testimonials, projects, selection });
