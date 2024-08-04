import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import HomePage from './Components/HomePage';
import GetInvolved from './Components/GetInvolved';
import ClubMembers from './Components/ClubMembers';
import './Components/HomePage.css';

const App = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="navbar">
        <Container>
          <Navbar.Brand as={Link} to="/">Food for Thought</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/get-involved">Get Involved</Nav.Link>
              <Nav.Link as={Link} to="/club-members">Club Members</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/club-members" element={<ClubMembers />} />
      </Routes>
    </Router>
  );
};

export default App;