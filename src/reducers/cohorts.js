// import * as actions from '../actions/types';

const initialState = {
  cohortsExample: [
    {
      name: 'Penguins',
      tags1: ['#back-end'],
      tags2: ['#part-time','#full-time'],
      description: 'No one knows what these developers do, we grouped every weird dev in the Penguins cohort.',
      link: 'http://bit.ly/2otMCWT',
      space: '18',
    },
    {
      name: 'Red Pandas',
      tags1: ['#front-end'],
      tags2: ['#full-time'],
      description: 'Do you like writing javascript from dawn to dusk? Apply to level up your coding skills with us.',
      link: 'http://bit.ly/2otMCWT',
      space: '36',
    },
    {
      name: 'Cheetahs',
      tags1: ['#data-science'],
      tags2: ['#full-time'],
      description: 'Wanna build the androids from Blade Runner? The Cheetah cohort is the place for you.',
      link: 'http://bit.ly/2oyI94T',
      space: '16',
    },
    {
      name: 'Flamingos',
      tags1: ['#front-end'],
      tags2: ['#part-time'],
      description: 'Do you love material design colors but you do not have a lot of time? Become a flamingo.',
      link: 'hhttp://bit.ly/2otMCWT',
      space: '29',
    }
  ],
};

/**
 * display cohort defaults information on card
 * @param {object} state where the info will be stored and passed to <Cohort /> component
 * @param {string} action string used to identify the function to use
 * @return {object} updated state
 */
export default function cohorts(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
