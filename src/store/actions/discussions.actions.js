import axios from 'axios';

export const getDiscussions = (url) => dispatch => {
    dispatch({type: "get_discussions"})
    return axios
    .get(url)
      .then((data) => dispatch({type: "get_discussions_fulfilled", payload: data['data']}))
      .catch(err => dispatch({type: 'get_discussions_rejected'}));
  }