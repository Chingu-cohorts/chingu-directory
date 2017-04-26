import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const NavbarElement = () => (
  <Navbar inverse collapseOnSelect fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">CHINGU</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      {/*<Nav pullRight>
        <NavItem eventKey={1} href="#cohortContainer">COHORTS</NavItem>
        <NavItem eventKey={2} href="#projects">PROJECTS</NavItem>
        <NavItem eventKey={3} href="#testimonials">TESTIMONIALS</NavItem>
      </Nav>*/}
    </Navbar.Collapse>
  </Navbar>
);

export default NavbarElement;
