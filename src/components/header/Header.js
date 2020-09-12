import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/" className="links">Blog Site</Nav.Link>
        <Nav.Link as={Link} to="/" className="links">Posts</Nav.Link>
      </Nav>
      <Nav>
      <Nav.Link as={Link} to="/posts/addPost" className="links">Add Posts</Nav.Link>
      <Nav.Link as={Link} to="/" className="links">
        Profile
      </Nav.Link>
    </Nav>
    </Navbar>
  );
}

export default Header;
