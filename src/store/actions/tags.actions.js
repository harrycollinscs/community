import axios from 'axios';

export const getTags = () => dispatch => {
    dispatch({type: "get_tags"})
    return axios
    .get("https://community.giffgaff.com/api/tags")
      .then((data) => dispatch({type: "get_tags_fulfilled", payload: { data: data['data']}}))
      .catch(err => dispatch({type: 'get_tags_rejected'}));
  }
