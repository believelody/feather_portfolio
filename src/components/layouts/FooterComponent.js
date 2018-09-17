import React, { Component } from 'react';
// import { Footer } from 'react-materialize';
import styled from 'styled-components';

import { Social } from '../Export';

const Wrapper = styled.footer`
  width: 100%;
  height: 100%;
  position: relative;
  line-height: 50px;
  background: linear-gradient(to bottom right, #1153FC, #B588E7);
  text-align: center;
  color: white;
  bottom: 0;
  display: flex;
  justify-content: center;
`;

class FooterComponent extends Component {

  render() {
    return (
      <Wrapper>
        <Social />
        <span>&copy; 2018 Copyright</span>
      </Wrapper>
    );
  }
}

export default FooterComponent;
