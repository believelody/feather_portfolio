import * as types from '../types';

const initialState = {
  loading: false,
  photos: []
}

export default (state = initialState, { type, payload}) => {
  switch (type) {
    case types.PHOTO_LOADING:
      return {
        ...state,
        loading: payload
      };
    case types.LOAD_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: payload,
        loading: false
      };
    default:
      return state;
  }
}
