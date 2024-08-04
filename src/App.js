import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import HomePage from './Components/HomePage';
import GetInvolved from './Components/GetInvolved';
import './Components/HomePage.css';

const App = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" sticky="top" className="navbar">
        <Navbar.Brand href="#">Food for Thought</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/get-involved">Get Involved</Nav.Link>
        </Nav>
      </Navbar>

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/get-involved" element={<GetInvolved />} />
      </Routes>
    </Router>
  );
};

export default App;