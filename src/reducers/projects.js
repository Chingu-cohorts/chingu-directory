// import * as actions from '../actions/types';

const initialState = {
  projectsArray: [
    {
      title: 'MDNBot',
      description: 'A Slack bot can search and reference Mozilla Developers Network for you.',
      image: 'https://raw.githubusercontent.com/Kornil/Chingu-Animal-Icons/master/robots/chat-robot-genie/favicon-32x32.png',
      link: '',
    },
    {
      title: 'ChinguSort',
      description: 'A recommendation system for creating optimal learning groups using machine learning.',
      image: 'https://raw.githubusercontent.com/Kornil/Chingu-Animal-Icons/master/robots/chat-robot-flash/favicon-32x32.png',
      link: '',
    },
    {
      title: 'Campfire-stories',
      description: 'Remix of Humans of New York, but for the Free Code Camp community. A website where campers can share their personal stories.',
      image: 'https://raw.githubusercontent.com/Kornil/Chingu-Animal-Icons/master/robots/chat-robot-love/favicon-32x32.png',
      link: '',
    },
    {
      title: 'Momentum',
      description: 'The team reverse-engineered a popular Chrome extension Momentum, a productivity and habit tracker.',
      image: 'https://raw.githubusercontent.com/Kornil/Chingu-Animal-Icons/master/robots/chat-robot-life/favicon-32x32.png',
      link: '',
    },
  ],
};

/**
 * display projects defaults information on card
 * @param {object} state where the info will be stored and passed to <Projects /> component
 * @param {string} action string used to identify the function to use
 * @return {object} updated state
 */
export default function projects(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
