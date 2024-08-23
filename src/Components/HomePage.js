import React, { useEffect } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import './HomePage.css';

const HomePage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-fade-in');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="top-image-container">
        <img
          src="../../../Images/Picture.jpg"
          alt="Top Banner"
          className="top-image"
        />
        <div className="fade-in-text">Food for Thought</div>
      </div>

      <Container className="container my-4">
        <h2 className="text-center">Mission Statement</h2>
        <p>
        As a society, we often dehumanize those without housing, creating the greatest poverty: loneliness and a lack of dignity. We are dedicated to restoring the inherent dignity of individuals experiencing homelessness by sharing meals and, most importantly, conversation. Through compassion, empathy, and genuine human interactions, we strive to build a community regardless of one's housing situation.
        </p>
        <h3 className="text-center">Our Origin</h3>
        <p>
        A group of UW-Madison students came together after spending time sharing food with people experiencing homelessness. Seeing the profound impact on both the individuals they served and on themselves, they wanted to share this opportunity with other students. The name 'Food for Thought' originated from the idea that by sharing food, we also share thoughts—truly embodying the concept. This self-funded initiative was ignited by a passion to cook, share food, and spread love to those without shelter.        </p>
        <h3 className="text-center">Our Mission</h3>
        <p>
        The name 'Food for Thought' embodies our dual mission of not only providing food but also companionship to those without shelter. The organization operates by having a group of members bond together while cooking a large meal served on paper plates. In groups of 2-3, members then head to the streets and enjoy their meal with those without shelter, seeking to deepen bonds and share compassion with everyone in Madison, Wisconsin. Additionally, all members are invited to monthly meetings, which aim to foster community, showcase club advancements, discuss fundraising opportunities, and more.        </p>
        <h3 className="text-center">Our Impact</h3>
        <p>
          By combining nourishment with thoughtful dialogue, we hope to make a tangible difference in the lives of the homeless in Madison. Our goal is to create lasting positive change in our community, one meal and one conversation at a time.
        </p>
      </Container>

      <Container className="my-4">
        <Row className="my-4 align-images">
          <Col md={6} className="text-center scroll-fade-in">
            <img
              src="../../../Images/Madison.jpg"
              alt="Food for Thought"
              className="img-fluid"
              style={{ height: '400px', objectFit: 'cover' }}
            />
          </Col>
          <Col md={6} className="scroll-fade-in">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../../../Images/IMG_0309.jpg"
                  alt="Member 1"
                  style={{ height: '400px', objectFit: 'cover' }}
                />
                <div className="carousel-caption-hover">
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../../../Images/IMG_0283.jpg"
                  alt="Member 2"
                  style={{ height: '400px', objectFit: 'cover' }}
                />
                <div className="carousel-caption-hover">
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../../../Images/IMG_0301.jpg"
                  alt="Member 3"
                  style={{ height: '400px', objectFit: 'cover' }}
                />
                <div className="carousel-caption-hover">
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../../../Images/IMG_0311.jpg"
                  alt="Member 4"
                  style={{ height: '400px', objectFit: 'cover' }}
                />
                <div className="carousel-caption-hover">
                  
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../../../Images/IMG_0280.jpg"
                  alt="Member 5"
                  style={{ height: '400px', objectFit: 'cover' }}
                />
                <div className="carousel-caption-hover">
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