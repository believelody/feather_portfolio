import * as types from '../types';
import client from '../contentfulCredentials';

export const aboutLoading = (isLoading = true) => ({
  type: types.ABOUT_LOADING,
  payload: isLoading
})

export const aboutLoadSuccess = data => ({
  type: types.LOAD_ABOUT_SUCCESS,
  payload: data
});

export const loadAbout = () => dispatch => {
  dispatch(aboutLoading());
  // Get entry by id
  client.getEntry("7BxeXLM4XSa2uUWQyAEks8")
    .then(({ fields }) => {
      dispatch(aboutLoadSuccess(fields));
    })
    .catch(err => {
      console.log(err);
      dispatch(aboutLoading(false));
    });

  // Get entries by content type
  // client.getEntries({ 'content_type': 'homeBackground' })
  //   .then(({items}) => {
  //     console.log(items);
  //     dispatch(homeBackgroundLoadSuccess(items[0].fields));
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     dispatch(homeBackgroundLoading(false));
  //   });
}
