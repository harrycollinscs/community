import axios from 'axios';

export const getDiscussions = (url) => dispatch => {
    dispatch({type: "get_discussions"})
    return axios
    .get(url)
      .then((data) => dispatch({type: "get_discussions_fulfilled", payload: { data: data['data'], links: data['data']['links']}}))
      .catch(err => dispatch({type: 'get_discussions_rejected'}));
  }

  export const refreshDiscussions = () => dispatch => dispatch({ type: 'refresh_discussions' })