import * as types from '../types';

const initialState = {
  loading: false,
  data: null
}

export default (state = initialState, { type, payload}) => {
  switch (type) {
    case types.WORK_LOADING:
      return {
        ...state,
        loading: payload
      };
    case types.LOAD_VIDEOS_SUCCESS:
      return {
        ...state,
        data: {
          videos: payload
        },
        loading: false
      }
    case types.LOAD_PHOTOS_SUCCESS:
      return {
        ...state,
        data: {
          photos: payload
        },
        loading: false
      }
    case types.CLEAR_WORKS:
      return {
        ...state,
        data: null,
        loading: false
      };
    default:
      return state;
  }
}
