import React from 'react'
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const NavPage = ({ children }) => (
  <div>
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">
            <img src="https://facebook.github.io/react/img/logo.svg"
                 width="40"
                 height="40"
                 alt="react-icon" />
            首頁
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/">
            <NavItem>登入範例</NavItem>
          </LinkContainer>

          <LinkContainer to="/test_01">
            <NavItem>測試範例一</NavItem>
          </LinkContainer>

          <LinkContainer to="/test_02">
            <NavItem>測試範例二</NavItem>
          </LinkContainer>

          <NavDropdown title="測試選項" id="basic-nav-dropdown">
            <MenuItem>Action</MenuItem>
            <MenuItem>Test</MenuItem>
            <MenuItem>Link</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <LinkContainer to="/test_03">
            <NavItem>Pull-Right1</NavItem>
          </LinkContainer>

          <LinkContainer to="/test_04">
            <NavItem>Pull-Right2</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    {children}
  </div>
)

export default NavPage
