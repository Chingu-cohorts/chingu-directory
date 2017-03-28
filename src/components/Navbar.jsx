import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const NavbarElement = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">CHINGU</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#cohort-title">COHORTS</NavItem>
        <NavItem eventKey={2} href="#cohort-about">ABOUT</NavItem>
        <NavItem eventKey={3} href="#cohort-contact">CONTACT</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavbarElement;
