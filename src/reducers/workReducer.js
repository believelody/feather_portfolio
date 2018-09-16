import * as types from '../types';

const initialState = {
  loading: false,
  data: []
}

export default (state = initialState, { type, payload}) => {
  switch (type) {
    case types.WORK_LOADING:
      return {
        ...state,
        loading: payload
      };
    case types.LOAD_WORKS_SUCCESS:
    case types.CLEAR_WORKS:
      return {
        ...state,
        data: payload,
        loading: false
      };
    default:
      return state;
  }
}
