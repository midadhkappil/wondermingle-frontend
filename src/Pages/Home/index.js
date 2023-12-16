import React, { useState, useEffect } from "react";
import { Row , Col, Container } from "react-bootstrap";

import Card from "../../Components/Cards"

const Home = () => {
  const [twits, setTwits] = useState([]);

  useEffect(() => {
    fetchtwits();
  }, []);

  const fetchtwits = async () => {
    const responce = await fetch("http://localhost:8080/twit");
    const jsonResponse = await responce.json();
    setTwits(jsonResponse.data);
  };


  return (
    <div>
      <Container>
        <Row>
          {twits.map((twit) => {
            return (
              <Col className="mb-12">
                <Card twit={twit} />
              </Col>
            )

          })}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
