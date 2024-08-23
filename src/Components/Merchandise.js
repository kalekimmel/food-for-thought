import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './Merchandise.css';

const Merchandise = () => {
  return (
    <Container>
      <div className="text-box-container">
        <h2 className="title">Our Merchandise</h2>
        <p className="subtitle">Our merchandise serves as an opportunity to represent the mission of Food for Thought. All proceeds will be used to support our mission. If you are interested in purchasing or have merchandise ideas, please contact Paul Selberg. 
        </p>
      </div>

      <Row className="carousel-container">
        <Col md={6} className="text-center">
          <Carousel>
            <Carousel.Item>
              <img
                src="../../../Images/ShirtFront.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="../../../Images/ShirtBack.png"
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>

        <Col md={6} className="text-center">
          <Carousel>
            <Carousel.Item>
              <img
                src="../../../Images/SweatshirtFront.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="../../../Images/SweatshirtBack.png"
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Merchandise;