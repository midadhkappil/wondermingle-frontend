import React, { useState, useEffect } from "react";
import { Row, Col, Container, Card as BootstrapCard, Form, Button } from "react-bootstrap";
import CardComponent from "../../Components/Cards";
import PostForm from "./components/PostForm";
import { cancelFollowRequestsAPI, createTwitAPI, fetchFollowRequestsAPI } from "./api";
import { createFollowRequest } from "Pages/Followers/api";
import { toast } from "react-toastify";


const Home = () => {
  const [twits, setTwits] = useState([]);
  const [followRequests, setFollowRequests] = useState([])


  useEffect(() => {
    fetchTwits();
    fetchFollowRequests()
  }, []);

  const fetchFollowRequests = async() => {
    const response = await fetchFollowRequestsAPI();
    setFollowRequests(response.data)
  }

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


  const onCreateTwit = async (twit) => {
    const response = await createTwitAPI(twit)
    setTwits([response.data, ...twits])
    if (response.success) {
      toast.success("twit created")

    } else {
      toast.error("Failed to create the twit")
    }
  }

  const onClickCancelFollowRequest = async (followRequestId) => {
    try {
      const response = await cancelFollowRequestsAPI(followRequestId)
      setFollowRequests(() => followRequests.filter(request => request._id !== response.data._id))
      if(response.success){
        toast.success("follow request cancelled")
      }
    } catch (error) {
      toast.error(error.message)
    }
  
  }

  const onClickFollow = async (userId) => {
    try {
      const response = await createFollowRequest({
        recipient: userId
      })
      setFollowRequests([...followRequests, response.data])
      toast.success("Follow request sent successfully!")
    } catch (error) {
      toast.error(error.message)
    }

  }

  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={7} className="mb-4">
            <BootstrapCard className="mb-2">

              <BootstrapCard.Body>
                <PostForm onSubmit={onCreateTwit}/>

              </BootstrapCard.Body>
            </BootstrapCard>


            <Row>
              {twits.map((twit) => (
                <Col md={12} key={twit._id}>
                  <CardComponent 
                  twit={twit} 
                  followRequests={followRequests} 
                  onClickCancelFollowRequest={onClickCancelFollowRequest}
                  onClickFollow={onClickFollow}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default Home;
