import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import './HomePage.css';

const GetInvolved = () => {
  return (
    <Container className="container my-4">
      <h2 className="text-center">Get Involved</h2>
      <p>
        We welcome all students who are passionate about making a difference in our community. Here are some ways you can get involved with Food for Thought:
      </p>
      <ul>
        <li>Join our cooking sessions and help prepare meals.</li>
        <li>Participate in food delivery to homeless individuals in Madison.</li>
        <li>Engage in conversations and build connections with those we serve.</li>
        <li>Contribute to fundraising and awareness campaigns.</li>
        <li>Volunteer for organizing events and managing club activities.</li>
      </ul>
      <p>
        If you're interested in joining us, please contact us at <a href="mailto:info@foodforthought.com">info@foodforthought.com</a>. Together, we can make a positive impact on our community.
      </p>
      <Row className="text-center my-4">
        <Col>
          <Button
            variant="primary"
            href="mailto:info@foodforthought.com"
            className="mx-2"
          >
            Email Us
          </Button>
          <Button
            variant="success"
            href="https://venmo.com/"
            target="_blank"
            className="mx-2"
          >
            Venmo Us
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default GetInvolved;