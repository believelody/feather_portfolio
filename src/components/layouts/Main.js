import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, Resume, Works, Work, About, Contact } from '../Export';

import styled from 'styled-components';

const MainWrapper = styled.main`
  position: relative;
`;

class Main extends Component {

  render() {
    return (
      <main className="container" style={{border: "1px solid black"}}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/works' component={Works} />
          <Route exact path='/work/:work_id' component={Work} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </main>
    );
  }
}

export default Main;
