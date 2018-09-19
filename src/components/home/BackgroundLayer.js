import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Preloader } from 'react-materialize';

import { loadWorks, clearWorks } from '../../actions/workAction';

class BackgroundLayer extends Component {

  componentDidMount() {
    this.props.loadWorks(this.props.content_type);
  }

  componentWillUnmount() {
    this.props.clearWorks();
  }

  render() {
    const { work, component: Component } = this.props;
    return (
      <Fragment>
        { work.loading && <Preloader className="loading" color="red" size="big" /> }
        {
          !work.loading && work.data !== null &&
          <Component data={work.data} />
        }
      </Fragment>
    );
  }
}

BackgroundLayer.propTypes = {
  work: PropTypes.object.isRequired,
  loadWorks: PropTypes.func.isRequired,
  clearWorks: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  work: state.work
})

export default connect(mapStateToProps, { loadWorks, clearWorks })(BackgroundLayer);
