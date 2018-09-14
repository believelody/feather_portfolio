import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Card } from 'react-materialize';

import { loadHomeBackground } from '../../actions/homeAction';

import './Home.css';
import LayerList from '../../img/vectorlisthomepage.svg';
import VideoLayer from '../../img/vectorvideohomepage.svg';
import PhotoLayer from '../../img/vectorphotohomepage.svg';
import DesignLayer from '../../img/vectordesignhomepage.svg';
import IllustrationLayer from '../../img/vectorillustrationhomepage.svg';

const Wrapper = styled.div`
  height: 100%;
  color: white;
  text-align: center;
  background: url(${props => props.url});
  background-size: cover;
`;

const TextWrapper = styled.h5`
  position: absolute;
  top : 50%;
  left: 50%;
  border: 2px solid white;
  padding: 5px;
  z-index: 1;
  transform: translate(-50%, -50%);
`;

const ImgWrapper = styled.img`
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 70%;
  margin: 0;
  padding: 0;
`;

const Test = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  margin: 0;
  padding: 0;
  background: ${props => props.background};
`;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.containerRef = el => this.container = el;
  }

  componentDidMount() {
    this.props.loadHomeBackground();
  }

  render() {
    const { data, loading } = this.props.home;
    return (
      <Fragment>
        {loading && (data === null || data === undefined) && <h3>Loading ...</h3>}
        {
          !loading && data !== null && data !== undefined &&
          <Wrapper url={data.background.fields.file.url}>
            <h3>{data.background.fields.description}</h3>
            <ul className="container" style={{listStyle: 'none'}}>
              <li className='expand'>
                <NavLink to='/contact' style={{textDecoration: 'none', color: 'white'}}>
                  <TextWrapper>Videos</TextWrapper>
                </NavLink>
              </li>
              <li className='expand'>
                <NavLink to='/contact' style={{textDecoration: 'none', color: 'white'}}>
                  <TextWrapper>Photos</TextWrapper>
                </NavLink>
              </li>
              <li className='expand'>
                <NavLink to='/contact' style={{textDecoration: 'none', color: 'white'}}>
                  <TextWrapper>Design</TextWrapper>
                </NavLink>
              </li>
              <li className='expand'>
                <NavLink to='/contact' style={{textDecoration: 'none', color: 'white'}}>
                  <TextWrapper>Illustrations</TextWrapper>
                </NavLink>
              </li>
            </ul>
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
