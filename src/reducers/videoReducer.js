import * as types from '../types';

const initialState = {
  loading: false,
  videos: []
}

export default (state = initialState, { type, payload}) => {
  switch (type) {
    case types.VIDEO_LOADING:
      return {
        ...state,
        loading: payload
      };
    case types.LOAD_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: payload,
        loading: false
      };
    default:
      return state;
  }
}
