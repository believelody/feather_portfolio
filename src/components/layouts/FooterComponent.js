import React, { Component } from 'react';
// import { Footer } from 'react-materialize';
import styled from 'styled-components';

import { Social } from '../Export';

const Wrapper = styled.div`
  width: 100%;
  line-height: 30px;
  background: linear-gradient(to bottom right, #1153FC, #B588E7);
  text-align: center;
  color: white;
  top: 100vh;
`;

class FooterComponent extends Component {

  render() {
    return (
      <Wrapper>
        <Social />
        &copy; 2018 Copyright
      </Wrapper>
    );
  }
}

export default FooterComponent;
