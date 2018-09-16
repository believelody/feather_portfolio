import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { loadHomeBackground } from '../../actions/homeAction';

import VideoComponent from './VideoComponent';
import PhotoComponent from './PhotoComponent';
import BackgroundLayer from './BackgroundLayer';
import TestimonialComponent from './TestimonialComponent';

import './Home.css';

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

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enter: false,
      id: ''
    };
    this.timeoutEnter;
    this.timeoutLeave;
  }

  componentDidMount() {
    this.props.loadHomeBackground();
  }

  handleMouseOver = id => {
    console.log('test');
    //  Set this timeout to enable unmount component to mount next component delay. Otherwise app breaks
    this.timeoutEnter = setTimeout(() => {
      this.setState({enter: true, id});

    }, 1000);

    //  Set enter variable to false after 10sec! Work fine when it's imbriqued
    if (this.timeoutEnter !== null) {
      this.timeoutLeave = setTimeout(() => {
        clearTimeout(this.timeoutEnter);
        this.setState({enter: false, id: ''});
      }, 20000);
    }

  }

  handleMouseLeave = () => {
    clearTimeout(this.timeoutEnter);
    clearTimeout(this.timeoutLeave);
    this.setState({enter: false, id: ''});
  }

  render() {
    const { data, loading } = this.props.home;
    const { enter, id } = this.state;
    return (
      <Fragment>
        {loading && (data === null || data === undefined) && <h3>Loading ...</h3>}
        {
          !loading && data !== null && data !== undefined &&
          <Wrapper url={data['background'].fields.file.url}>
            <h3>{data.background.fields.description}</h3>
            <ul className="container" style={{listStyle: 'none'}}>
              <li
                className='expand'
                onMouseOver={() => this.handleMouseOver('video')}
                onMouseLeave={this.handleMouseLeave}
              >
                <NavLink to='/contact' style={{textDecoration: 'none', color: 'white'}}>
                  <TextWrapper>Videos</TextWrapper>
                  {
                    enter && id === 'video' && window.screen.width >= 1024 && <BackgroundLayer content_type='video' component={VideoComponent} />
                  }
                </NavLink>
              </li>
              <li
                className='expand'
                onMouseOver={() =>this.handleMouseOver('photo')}
                onMouseLeave={this.handleMouseLeave}
              >
                <NavLink to='/contact' style={{textDecoration: 'none', color: 'white'}}>
                  <TextWrapper>Photos</TextWrapper>
                  {
                    enter && id === 'photo' && window.screen.width >= 1024 && <BackgroundLayer content_type='photo' component={PhotoComponent} />
                  }
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
            <TestimonialComponent testimonials={data['testimonials']} />
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
