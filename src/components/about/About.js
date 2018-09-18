import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, CardTitle } from 'react-materialize';
import styled from 'styled-components';

import { loadAbout } from '../../actions/aboutAction';

import './About.css';

const CardWrapper = styled.div`
  background: url(${props => props.img});
`;

class About extends React.Component {
  componentDidMount() {
    this.props.loadAbout();
  }

  render() {
    const { data, loading } = this.props.about;
    return (
      <div className="about">
        { loading && data === null && <h3>Loading...</h3> }
        {
          !loading && data !== null && (
            <Card className='wrapper'>
              <img
                src={data.picture.fields.file.url}
                alt={data.picture.fields.file.fileName}
                className='img-wrapper'
              />
              <p>{data.bio}</p>
            </Card>
          )
        }
      </div>
    )
  }
}

About.propTypes = {
  about: PropTypes.object.isRequired,
  loadAbout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  about: state.about
})

export default connect(mapStateToProps, { loadAbout })(About);
