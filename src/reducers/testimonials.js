import * as actions from '../actions/types';

const initialState = {
  testimonialsArray: [
    {
      login: 'periman2',
      quote: 'An amazing collaborative experience beyond my expectations.',
    },
    {
      login: 'Trion129',
      quote: 'Learn with other developers, you start as noob and become a pro with a family of devs.',
    },
    {
      login: 'pankaja-shree',
      quote: 'Chingu cohorts is the best place for self learning web enthusiasts - to learn together, collaborate and work on real projects in remote teams.',
    },
    {
      login: 'P1xt',
      quote: 'I honestly don\'t believe I\'ve seen any collaboration environment produce this much overall "learning" ever, really. ',
    },
  ],
};

/**
 * display testimonials defaults information on <Testimonials />
 * @param {object} state where the info will be stored and passed to <Testimonials /> component
 * @param {string} action string used to identify the function to use
 * @return {object} updated state
 */
export default function cohorts(state = initialState, action) {
  switch (action.type) {
    case actions.GET_GITHUB_DATA:
      return {
        ...state,
        testimonialsArray: state.testimonialsArray.map((user) => {
          if (user.login === action.githubData.login) {
            return { ...user,
              ...action.githubData };
          }
          return { ...user };
        }),
      };
    default:
      return state;
  }
}
