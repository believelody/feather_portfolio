import * as types from '../types';
import client from '../contentfulCredentials';

export const postsLoading = (isLoading = true) => ({
  type: types.POSTS_LOADING,
  payload: isLoading
})

export const loadPostsSuccess = posts => ({
  type: types.LOAD_POSTS_SUCCESS,
  payload: posts
});

export const loadPosts = () => dispatch => {
  dispatch(postsLoading());
  client.getEntries()
    .then(({ items }) => {
      console.log(items);
      dispatch(loadPostsSuccess(items))
    })
    .catch(err => {
      console.log(err);
      dispatch(postsLoading(false));
    });
}
