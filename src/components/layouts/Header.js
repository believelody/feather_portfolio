import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavItem } from 'react-materialize';
// import styled from 'styled-components';

// const NavWrapper = styled.nav`
//   width: 100%;
//   border-bottom: 1px solid #dddddd;
//   background: #333;
//   position: relative;
//   color: white;
// `;
//
// const NavButton = styled.div`
//   position: relative;
//   width: 30px;
//   height: 20px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
// `;
//
// const NavHamburger = styled.span`
//   width: 20px;
//   height: 5px;
//   background: #000;
// `;
//
// const NavBrand = styled.div`
//   float: left;
// `;
//
// const NavBrandLink = styled.a`
//   text-decoration: none;
// `;
//
// const NavBrandImg = styled.img`
//   border-radius: 50%;
//   margin-right: 15px;
//   width: 30px;
// `;
//
// const NavbarLink = styled.ul`
//   list-style: none;
//   float: right;
//   padding: 0;
//   display: flex;
//   flex: 1;
//   right: 10vw;
// `;
//
// const NavItem = styled.li`
//   padding: 0 5px;
// `;

class Header extends Component {
  state = {
    isActive: false
  }

  toggleNav = () => this.setState(prevState => ({ isActive: !prevState.isActive }));

  render() {
    return (
      <Navbar className="teal" brand="I am Mani D" right>
        <NavItem>
          <NavLink to='/'>Accueil</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/about'>A propos de moi</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/resume'>Mon CV</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/works'>Mes travaux</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/contact'>Contact</NavLink>
        </NavItem>
      </Navbar>
    );
  }

}

export default Header;
