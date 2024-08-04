import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ClubMembers.css';

const ClubMembers = () => {
  const members = [
    { name: 'Paul Selborg', role: 'President', image: "../../../Images/IMG_0644.PNG" },
    { name: 'Kale Kimmel', role: 'Vice President/Website Designer', image: "../../../Images/IMG_0098 (2).PNG" },
    { name: 'Rudy Wicker', role: 'Fundraiser Leader', image: '../../../Images/IMG_0630.PNG' },
    { name: 'Pranav Dronavalli', role: 'Treasurer', image:  "../../../Images/IMG_0631.PNG" },
    { name: 'Michael Crivello', role: 'Secretary', image: "../../../Images/IMG_0633.PNG"  },
    // Add more members as needed
  ];

  return (
    <Container className="club-members-container">
      <div className="header-section text-center">
        <h2 className="title">Club Leaders</h2>
        <p className="subtitle">Meet the dedicated leaders of our club.</p>
      </div>
      <Row className="my-4">
        {members.map((member, index) => (
          <Col md={3} className="text-center" key={index}>
            <img
              src={member.image}
              alt={member.name}
              className="img-fluid member-img"
            />
            <h4 className="mt-3">{member.name}</h4>
            <p>{member.role}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ClubMembers;