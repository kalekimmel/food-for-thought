import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './GetInvolved.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faDonate } from '@fortawesome/free-solid-svg-icons';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const GetInvolved = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const data = {
    labels: ['Total Meals Served', 'Goal for 2024-2025'],
    datasets: [
      {
        label: 'Meals',
        data: [150, 1000],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Container className="get-involved-container">
      <div className="header-section text-center fade-in">
        <h2 className="title">Get Involved</h2>
        <p className="subtitle">
          Join us in making a difference in our community. Whether you want to volunteer, donate, or just learn more, we have a place for you.
        </p>
      </div>
      <Row className="my-4 align-items-center fade-in">
        <Col md={6} className="text-center">
          <img
            src="../../../Images/IMG_0301.jpg"
            alt="Volunteer"
            className="img-fluid volunteer-img"
          />
        </Col>
        <Col md={6}>
          <h3 className="text-center">Volunteer with Us</h3>
          <p>
            Volunteering with Food for Thought is a rewarding experience. You'll be part of a team that makes a real impact in the lives of those who need it most. Our volunteers help with preparing and distributing meals, organizing events, and raising awareness about food insecurity. If you are interested in joining our volunteer team, please reach out to us via the contact options below.
          </p>
          <h3 className="text-center">Our Next Steps</h3>
          <p>
            While we have successfully reached many of our goals through the dedicated self-funding of our members, we are eager to expand our club's impact even further. We are actively seeking grants and forming partnerships with local businesses to repurpose their surplus food and support our mission.
          </p>
        </Col>
      </Row>
      <Row className="text-center my-4 fade-in">
        <Col md={6}>
          <Button variant="info" className="mb-3" href="mailto:paulselberg1@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} /> Contact Us
          </Button>
        </Col>
        <Col md={6}>
          <Button variant="info" className="mb-3" href="https://venmo.com/Pselly">
            <FontAwesomeIcon icon={faDonate} /> Donate via Venmo
          </Button>
        </Col>
      </Row>
      <Row className="my-4 fade-in">
        <Col md={6} className="text-center">
          <img
            src="../../../Images/IMG_0289.jpg"
            alt="Community"
            className="img-fluid community-img"
          />
          <h4 className="mt-3">Our Community</h4>
          <p>We believe in the power of community and the impact we can make together. Our efforts are focused on creating a supportive environment for everyone.</p>
        </Col>
        <Col md={6} className="text-center">
          <img
            src="../../../Images/IMG_7652.jpg"
            alt="Events"
            className="img-fluid events-img"
          />
          <h4 className="mt-3">Events</h4>
          <p>Join us at our upcoming events to learn more about our mission and how you can contribute. From fundraisers to community dinners, there's always a way to get involved.</p>
        </Col>
      </Row>
      <Row className="my-4 fade-in">
        <Col>
          <h3 className="text-center">Our Progress</h3>
          <Bar data={data} options={options} />
        </Col>
      </Row>
    </Container>
  );
};

export default GetInvolved;