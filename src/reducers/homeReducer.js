import * as types from '../types';

const initialState = {
  loading: false,
  data: null,
  video: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.HOME_LOADING:
      return {
        ...state,
        loading: payload
      };
    case types.LOAD_HOME_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false
      }
    case types.LOAD_HOME_VIDEO_SUCCESS:
      return {
        ...state,
        video: payload
      }
    default:
      return state;
  }
}
