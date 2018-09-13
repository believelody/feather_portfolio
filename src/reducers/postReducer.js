import * as types from '../types';

const initialState = {
  loading: false,
  posts: []
};

export default (state = initialState, {type, payload }) => {
  switch (type) {
    case types.POSTS_LOADING:
      return {
        ...state,
        loading: payload
      }
    case types.LOAD_POSTS_SUCCESS:
      return {
        ...state,
        posts: payload,
        loading: false
      };
    default:
      return state;
  }
};
