import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        <li><Link to='/'>Accueil</Link></li>
        <li><Link to='/about'>A propos de moi</Link></li>
        <li><Link to='/resume'>Compétences</Link></li>
        <li><Link to='/works'>Mes travaux</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </Navbar>
    );
  }

}

export default Header;
