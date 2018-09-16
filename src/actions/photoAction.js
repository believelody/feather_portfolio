import * as types from '../types';
import client from '../contentfulCredentials';


export const photoLoading = (isLoading = true) => ({
  type: types.PHOTO_LOADING,
  payload: isLoading
});

export const loadPhotoSuccess = photos => ({
  type: types.LOAD_PHOTOS_SUCCESS,
  payload: photos
});

export const loadPhotos = () => dispatch => {
  dispatch(photoLoading());
  client.getEntries({ 'content_type': 'photo' })
    .then(({items}) => {
      console.log(items);
      dispatch(loadPostsSuccess());
    })
    .catch(err => {
      console.log(err);
      dispatch(photoLoading(false));
    });
}
