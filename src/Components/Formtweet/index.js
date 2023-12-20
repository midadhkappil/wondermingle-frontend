import React, { useState, useEffect } from "react";
import { Row, Col, Container, Card as BootstrapCard, Form, Button } from "react-bootstrap";
import CardComponent from "../../Components/Cards";

const Home = () => {
  const [twits, setTwits] = useState([]);
  const [tweetContent, setTweetContent] = useState("");
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchTwits();
  }, []);

  const fetchTwits = async () => {
    try {
      const response = await fetch("http://localhost:8080/twit", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      const jsonResponse = await response.json();
      setTwits(jsonResponse.data);
    } catch (error) {
      console.error("Error fetching tweets:", error);
    }
  };

  const handleTweetSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/tweet", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          content: tweetContent,
          destination,
          startDate,
          endDate,
          description
        })
      });
      if (response.ok) {
        fetchTwits();
        setTweetContent("");
        setDestination('');
        setStartDate('');
        setEndDate('');
        setDescription('');
      } else {
        console.error('Failed to post tweet');
      }
    } catch (error) {
      console.error('Error posting tweet:', error);
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md={12} className="mb-4">
            <BootstrapCard>
              <BootstrapCard.Body>
                <Form onSubmit={handleTweetSubmit}>
                  <Form.Group controlId="formBasicTweet">
                    <Form.Label>Where you going</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter your Plan"
                      value={tweetContent}
                      onChange={(e) => setTweetContent(e.target.value)}
                    />
                  </Form.Group>
                  {/* Form fields from Formtweet component */}
                  <Form.Group controlId="formBasicDestination">
                    <Form.Label>Destination:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter destination"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                    />
                  </Form.Group>
                  {/* Other form fields for start date, end date, and description */}
                  {/* ... */}
                  <Button variant="primary" type="submit">
                    Post
                  </Button>
                </Form>
              </BootstrapCard.Body>
            </BootstrapCard>
          </Col>
        </Row>
      </Container>
      {/* Rendering twits using CardComponent */}
      <Container>
        <Row>
          {twits.map((twit) => (
            <Col md={6} key={twit.id} className="mb-4">
              <CardComponent twit={twit} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
