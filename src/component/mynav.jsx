import React, { useContext } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import { NavLink } from 'react-router-dom';
import { CartContext } from '../context/context';

export default function Mynav() {
  let {increase ,count} = useContext(CartContext)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Hadad Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className={'nav-link text-decoration-none m-2'} to='/'>Home</NavLink>
            <NavLink className={'nav-link text-decoration-none m-2'}  to='/products'>product</NavLink>
            <NavLink className={'nav-link text-decoration-none m-2'}  to='/products/0/edit'>Add product</NavLink>
            <NavLink className={'nav-link text-decoration-none m-2'}  to='/products/cart'>    <i class="bi bi-cart"></i> {count}  </NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
