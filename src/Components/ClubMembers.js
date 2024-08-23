import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ClubMembers.css';

const ClubMembers = () => {
  const members = [
    { name: 'Paul Selborg', role: 'President', image: "../../../Images/paul.png" },
    { name: 'Kale Kimmel', role: 'Vice President/Lead Web Designer', image: "../../../Images/IMG_0098 (2).PNG" },
    { name: 'Rudy Wicker', role: 'Philanthropy Manager/Head Chef', image: '../../../Images/IMG_0630.PNG' },
    { name: 'Pranav Dronavalli', role: 'Sous Chef', image:  "../../../Images/IMG_0631.PNG" },
    
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
            <div className="member-img-container">
              <img
                src={member.image}
                alt={member.name}
                className="member-img"
              />
            </div>
            <h4 className="mt-3">{member.name}</h4>
            <p>{member.role}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ClubMembers;