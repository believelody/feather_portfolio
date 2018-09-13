import React, { Component } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  line-height: 30px;
  background: #333;
  text-align: center;
  color: white;
  top: 100vh;
`;

class Footer extends Component {

  render() {
    return (
      <Wrapper>
        Copyright 2018
      </Wrapper>
    );
  }
}

export default Footer;
