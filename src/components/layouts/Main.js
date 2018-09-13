import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, Products, Posts, Post, Profile, Contact } from '../Export';

import styled from 'styled-components';

const MainWrapper = styled.main`
  position: relative;
`;

class Main extends Component {

  render() {
    return (
      <MainWrapper>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/posts' component={Posts} />
          <Route exact path='/post/:post' component={Post} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </MainWrapper>
    );
  }
}

export default Main;
