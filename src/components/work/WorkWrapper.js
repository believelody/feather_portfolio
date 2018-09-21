import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Preloader } from 'react-materialize';

import { loadWorks } from '../../actions/workAction';
import { Videos, Photos } from '../Export';

import './WorkWrapper.css';

class WorkWrapper extends Component {

  componentWillMount() {
    this.props.loadWorks(this.props.match.params.work_id);
  }

  render() {
    const { data, loading } = this.props.work;
    return (
      <Fragment>
        {loading && (data === null || data === undefined) && <Preloader className="loading" color="red" size="big" />}
        {
          !loading && (data !== null && data !== undefined) && (
            <Fragment>
              {this.props.match.params.work_id === 'video' && <Videos data={data} />}
              {this.props.match.params.work_id === 'photo' && <Photos data={data} />}
            </Fragment>
          )
        }
      </Fragment>
    );
  }
}

WorkWrapper.propTypes = {
  work: PropTypes.object.isRequired,
  loadWorks: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  work: state.work
})

export default connect(mapStateToProps, { loadWorks })(WorkWrapper);
