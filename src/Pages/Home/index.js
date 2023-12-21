import React, { useState, useEffect } from "react";
import { Row, Col, Container, Card as BootstrapCard, Form, Button } from "react-bootstrap";
import CardComponent from "../../Components/Cards";
import PostForm from "./components/PostForm";
import { createTwitAPI } from "./api";
import { toast } from "react-toastify";


const Home = () => {
  const [twits, setTwits] = useState([]);
  const [tweetContent, setTweetContent] = useState("");

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


  const onCreateTwit = async(twit) => {
    const response = await createTwitAPI(twit)
    if(response.success){
      toast.success("twit created")
      
    }else{
      toast.error("Failed to create the twit")
    }
    
  }

  return (
    <div>
      <Container>
        <Row>
          <Col md={12} className="mb-4">
            <BootstrapCard>
            
              <BootstrapCard.Body>
                <PostForm onSubmit={onCreateTwit}/>
               
              </BootstrapCard.Body>
            </BootstrapCard>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          {twits.map((twit) => (
            <Col md={12} key={twit.id} className="mb-4">
              {/* Assuming CardComponent uses Bootstrap Card */}
              <CardComponent twit={twit} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
