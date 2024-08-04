import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './GetInvolved.css';
import axios from 'axios';

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/submit-form', formData)
      .then(response => {
        setResponseMessage(response.data.message);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch(error => {
        setResponseMessage('Error submitting form.');
      });
  };

  return (
    <Container className="get-involved-container">
      <h2 className="text-center">Get Involved</h2>
      <p className="text-center">
        Join us in making a difference in our community. Whether you want to volunteer, donate, or just learn more, we have a place for you.
      </p>
      <Row className="my-4 align-items-center">
        <Col md={6} className="text-center">
          <img
            src="../../../Images/volunteer.jpg"
            alt="Volunteer"
            className="img-fluid"
          />
        </Col>
        <Col md={6}>
          <h3 className="text-center">Volunteer with Us</h3>
          <p>
            Volunteering with Food for Thought is a rewarding experience. You'll be part of a team that makes a real impact in the lives of those who need it most.
          </p>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="How would you like to help?"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-2">
              Submit
            </Button>
          </Form>
          {responseMessage && <p className="mt-3">{responseMessage}</p>}
        </Col>
      </Row>
      <Row className="text-center my-4">
        <Col md={6}>
          <Button variant="info" className="mb-3" href="mailto:info@foodforthought.com">
            Email Us
          </Button>
        </Col>
        <Col md={6}>
          <Button variant="info" className="mb-3" href="https://venmo.com/foodforthought">
            Donate via Venmo
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default GetInvolved;