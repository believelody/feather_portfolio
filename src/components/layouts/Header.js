import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem } from 'react-materialize';

class Header extends Component {
  state = {
    isActive: false
  }

  toggleNav = () => this.setState(prevState => ({ isActive: !prevState.isActive }));

  render() {
    return (
      <Navbar className="orange darken-4" brand="I am Mani D" right>

          <li><Link to='/'>Accueil</Link></li>


          <li><Link to='/about'>A propos de moi</Link></li>


          <li><Link to='/resume'>Mon CV</Link></li>


          <li><Link to='/works'>Mes travaux</Link></li>


          <li><Link to='/contact'>Contact</Link></li>
      </Navbar>
    );
  }

}

export default Header;
