import axios from 'axios';

import {
  GET_GITHUB_DATA,
} from './types';

/**
 * get user data from github
 * @param {string} user the target user' username
 * @return {object} with all the info required for <Testimonials />
 */
export function getGithubData(user) {
  return dispatch => axios.get(`https://api.github.com/users/${user}`)
    .then((response) => {
      const githubData = {
        login: response.data.login,
        image_url: response.data.avatar_url,
        full_name: response.data.name,
        html_url: response.data.html_url,
        bio: response.data.bio,
      };
      dispatch({
        type: GET_GITHUB_DATA,
        githubData,
      });
    });
}
