import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, Resume, Posts, Post, About, Contact } from '../Export';

import styled from 'styled-components';

const MainWrapper = styled.main`
  position: relative;
`;

class Main extends Component {

  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/posts' component={Posts} />
          <Route exact path='/posts/:post_id' component={Post} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </main>
    );
  }
}

export default Main;
