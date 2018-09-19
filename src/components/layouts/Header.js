import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-materialize';

class Header extends Component {
  state = {
    isActive: false
  }

  toggleNav = () => this.setState(prevState => ({ isActive: !prevState.isActive }));

  render() {
    return (
      <Navbar
        style={{backgroundImage: 'linear-gradient(to bottom right, #1DE5E2, #5581F1)'}}
        brand="I am Mani D"
        right
        options={{ closeOnClick: true }}
      >
        <li><NavLink activeClassName='' to='/'>Accueil</NavLink></li>
        <li><NavLink activeClassName='' to='/about'>A propos de moi</NavLink></li>
        <li><NavLink activeClassName='' to='/resume'>Compétences</NavLink></li>
        <li><NavLink activeClassName='' to='/posts'>Mes travaux</NavLink></li>
        <li><NavLink activeClassName='' to='/contact'>Contact</NavLink></li>
      </Navbar>
    );
  }

}

export default Header;
