import * as types from '../types';

const initialState = {
  loading: false,
  resume: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOAD_RESUME_SUCCESS:
      return {
        ...state,
        resume: payload,
        loading: false
      };
    case types.RESUME_LOADING:
      return {
        ...state,
        loading: payload
      };
    default:
      return state;
  }
}
