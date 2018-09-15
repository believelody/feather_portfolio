import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadVideoHomeBackground } from '../../actions/homeAction';

class VideoComponent extends Component {

  componentDidMount() {
    this.props.loadVideoHomeBackground();
  }
  render() {
    const { video } = this.props.home;
    console.log(video);
    return (
      <Fragment>
        {
          video !== null &&
          <video className='video' autoPlay='true' muted>
            <source
              src={video['videoHomeBackground'].fields.file.url}
              type={video['videoHomeBackground'].fields.file.contentType}
            />
          </video>
        }
      </Fragment>
    );
  }
}

VideoComponent.propTypes = {
  home: PropTypes.object.isRequired,
  loadVideoHomeBackground: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  home: state.home
})

export default connect(mapStateToProps, { loadVideoHomeBackground })(VideoComponent);
