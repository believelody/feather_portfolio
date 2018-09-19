import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col, Card, Chip, Preloader } from 'react-materialize';

import { loadResume } from '../../actions/resumeAction';

import './Resume.css';

class Resume extends React.Component {
  componentDidMount() {
    this.props.loadResume();
  }

  render() {
    const { resume, loading } = this.props.resume;

    return (
      <Fragment>
        {
          loading && <Preloader className="loading" color="red" size="big" />
        }
        {
          !loading && resume.length > 0 && (
            <Row className='wrapper'>
              {
                resume.map((item, i) =>
                  <Col key={i} s={12}>
                    <Card
                      title={item.fields.domain}
                      actions={
                        item.fields.skills.split(',').map((skill, i) =>
                          <Chip className='shadow red darken-2' key={i}>
                            {skill}
                          </Chip>
                        )
                      }
                      className='card-item'
                    >
                      {item.fields.description}
                    </Card>
                  </Col>
                )
              }
            </Row>
          )
        }
      </Fragment>
    )
  }
}

Resume.propTypes = {
  resume: PropTypes.object.isRequired,
  loadResume: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  resume: state.resume
});

export default connect(mapStateToProps, { loadResume })(Resume);
