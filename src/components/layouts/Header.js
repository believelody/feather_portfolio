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

          <NavItem href='/'>Accueil</NavItem>


          <NavItem href='/about'>A propos de moi</NavItem>


          <NavItem href='/resume'>Mon CV</NavItem>


          <NavItem href='/works'>Mes travaux</NavItem>


          <NavItem href='/contact'>Contact</NavItem>
      </Navbar>
    );
  }

}

export default Header;
