import { combineReducers } from 'redux';

import cohorts from './cohorts';
import testimonials from './testimonials';

const selection = (state = 0, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({ cohorts, testimonials, selection });
