import * as types from '../types';

const initialState = {
  loading: false,
  data: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ABOUT_LOADING:
      return {
        ...state,
        loading: payload
      };
    case types.LOAD_ABOUT_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false
      }
    default:
      return state;
  }
}
