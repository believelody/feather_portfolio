import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  width: 100%;
  border-bottom: 1px solid #dddddd;
  background: #333;
  position: relative;
  color: white;
`;

const NavButton = styled.div`
  position: relative;
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const NavHamburger = styled.span`
  width: 20px;
  height: 5px;
  background: #000;
`;

const NavBrand = styled.div`
  float: left;
`;

const NavBrandLink = styled.a`
  text-decoration: none;
`;

const NavBrandImg = styled.img`
  border-radius: 50%;
  margin-right: 15px;
  width: 30px;
`;

const NavbarLink = styled.ul`
  list-style: none;
  float: right;
  padding: 0;
  display: flex;
  flex: 1;
  right: 10vw;
`;

const NavbarLinkItem = styled.li`
  padding: 0 5px;
`;

class Header extends Component {
  state = {
    isActive: false
  }

  toggleNav = () => this.setState(prevState => ({ isActive: !prevState.isActive }));

  render() {
    return (
      <NavWrapper>
        <NavBrand>
          <NavBrandLink target='_blank'>
            <NavBrandImg
              src={"https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAU3AAAAJGE1MzYxNzYzLTE1NTUtNDEyYi04MzRjLTgzZjNkOGU0MGIzNg.jpg"}
              alt="testreact"
            />
            <span>Test React Contentful</span>
          </NavBrandLink>
        </NavBrand>
        <NavbarLink>
          <NavbarLinkItem>
            <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/'>Home</NavLink>
          </NavbarLinkItem>
          <NavbarLinkItem>
            <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/posts'>Posts</NavLink>
          </NavbarLinkItem>
          <NavbarLinkItem>
            <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/profile'>Profile</NavLink>
          </NavbarLinkItem>
          <NavbarLinkItem>
            <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/products'>Products</NavLink>
          </NavbarLinkItem>
          <NavbarLinkItem>
            <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/contact'>Contact</NavLink>
          </NavbarLinkItem>
        </NavbarLink>
      </NavWrapper>
    );
  }

}

export default Header;
