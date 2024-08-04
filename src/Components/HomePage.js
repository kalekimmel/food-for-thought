import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <Container className="container my-4">
        <h2 className="text-center">Mission Statement</h2>
        <p>
          We are a dedicated group of students from the University of Wisconsin-Madison who are passionate about our school and community. Recognizing the beauty of Madison and the challenges it faces, particularly the prevalence of homelessness, we strive to make a positive impact.
        </p>
        <h3 className="text-center">Our Origin</h3>
        <p>
          Our founder, Paul Selborg, envisioned a club that would address these issues directly. Thus, "Food for Thought" was born as a self-funded initiative with a simple yet profound mission: to cook and deliver nutritious meals to homeless individuals in Madison.
        </p>
        <h3 className="text-center">Our Mission</h3>
        <p>
          The name "Food for Thought" embodies our dual mission. We not only provide food to those in need but also offer companionship. Our members engage in meaningful conversations with the individuals we serve, sharing a meal and fostering a sense of community and connection. Through these interactions, we aim to brighten their day and offer support and understanding.
        </p>
        <h3 className="text-center">Our Impact</h3>
        <p>
          By combining nourishment with thoughtful dialogue, we hope to make a tangible difference in the lives of the homeless in Madison. Our goal is to create lasting positive change in our community, one meal and one conversation at a time.
        </p>
      </Container>

      <Container className="my-4">
        <Row className="my-4">
          <Col md={6} className="text-center">
            <img
              src="../../../Images/Madison.jpg"
              alt="Food for Thought"
              className="img-fluid"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </Col>
          <Col md={6}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../../../Images/IMG_0309.jpg"
                  alt="Member 1"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
                <div className="carousel-caption-hover">
                  <h3>Member 1</h3>
                  <p>Role: President</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../../../Images/IMG_0283.jpg"
                  alt="Member 2"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
                <div className="carousel-caption-hover">
                  <h3>Member 2</h3>
                  <p>Role: Vice President</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../../../Images/IMG_0301.jpg"
                  alt="Member 3"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
                <div className="carousel-caption-hover">
                  <h3>Member 3</h3>
                  <p>Role: Treasurer</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../../../Images/IMG_0311.jpg"
                  alt="Member 4"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
                <div className="carousel-caption-hover">
                  <h3>Member 4</h3>
                  <p>Role: Secretary</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../../../Images/IMG_0329.jpg"
                  alt="Member 5"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
                <div className="carousel-caption-hover">
                  <h3>Member 5</h3>
                  <p>Role: Member</p>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;