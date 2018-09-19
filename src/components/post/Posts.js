import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Preloader } from 'react-materialize';

import { loadPosts } from '../../actions/postAction';
import { PostItem } from '../Export';

import './Post.css';

class Posts extends React.Component {

  componentDidMount() {
    // this.fetchPosts().then(this.setPosts)
    this.props.loadPosts();
  }

  // fetchPosts = () => client.getEntries();
  //
  // setPosts = res => this.setState({ posts: res.items });

  render() {
    const { posts, loading } = this.props.post;
    return (
      <div className='posts'>
      {
        loading && <Preloader className="loading" color="red" size="big" />
      }
      {
        !loading && posts.map(({fields}, i) => <PostItem key={i} {...fields} />)
      }
      </div>
    )
  }
}

Posts.propTypes = {
  post: PropTypes.object.isRequired,
  loadPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect( mapStateToProps, { loadPosts })(Posts);
