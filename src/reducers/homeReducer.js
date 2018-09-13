import * as types from '../types';

const initialState = {
  loading: false,
  data: null
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
    default:
      return state;
  }
}
