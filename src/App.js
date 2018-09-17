import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Helmet from 'react-helmet';

import { Header, Main, FooterComponent } from './components/Export';

import styled from 'styled-components';
import './App.css';

const Site = styled.div`
  display: grid;
  grid-template-rows: auto 1fr 50px;
  min-height: 100vh;
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Site>
          <Helmet
            title="Mani D Portfolio"
            meta={[
              { name: 'description', content: 'test react app w/ contenful and deploy on netlify' },
              { name: 'keywords', content: 'resume, blog, porfolio, react, contentful, netlify' },
            ]}
            script={[
              { 'src': 'https://use.fontawesome.com/releases/v5.0.4/js/all.js'},
            ]}
            link={[
              {'rel':'stylesheet', 'href': 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'}
            ]}
          />
          <Header />
          <Main />
          <FooterComponent />
        </Site>
      </BrowserRouter>
    );
  }
}

export default App;
