import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Card } from 'react-materialize';

import { loadHomeBackground } from '../../actions/homeAction';

const Wrapper = styled.div`
  height: 100%;
  color: black;
  text-align: center;
  background: url(${props => props.url}) no-repeat;
  background-size: contain;
`;

class Home extends React.Component {
  componentDidMount() {
    this.props.loadHomeBackground();
  }

  render() {
    const { data, loading } = this.props.home;
    console.log(data);
    return (
      <Fragment>
        {loading && (data === null || data === undefined) && <h3>Loading ...</h3>}
        {
          !loading && data !== null && data !== undefined &&
          <Wrapper url={data.background.fields.file.url}>
            <h3>{data.background.fields.description}</h3>
            <div className='container'>
              <Card className='blue-grey lighten-3' style={{opacity: 0.8}}>
                test
              </Card>
            </div>
          </Wrapper>
        }
      </Fragment>
    )
  }
}

Home.propTypes = {
  home: PropTypes.object.isRequired,
  loadHomeBackground: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  home: state.home
})

export default connect(mapStateToProps, { loadHomeBackground })(Home);
