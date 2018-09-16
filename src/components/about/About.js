import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col, Card } from 'react-materialize';

import { loadAbout } from '../../actions/aboutAction';

import './About.css';

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
            <Card>
              <Row>
                <Col s={12} m={4}>
                  <img
                    className="responsive-img"
                    src={data.picture.fields.file.url}
                    alt={data.picture.fields.file.fileName}
                  />
                </Col>
                <Col s={12} m={8}>
                  <p>
                    {data.bio}
                  </p>
                </Col>
              </Row>
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
