import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Image, Button } from 'react-bootstrap';


const MessagePanel = ({ user }) => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Image src={`profile_photos/${user.profile_photo}`} roundedCircle />
        </Col>
        <Col md={8}>
          <h3>{user.name}</h3>
          <p>{user.message}</p>
        </Col>
      </Row>
    </Container>
  );
};

const MessageList = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    {
      id: 1,
      name: "midadh kappil",
      message: "Hey there!",
      profile_photo: "nitha"
    },
    {
      id: 2,
      name: "nitha nihala",
      message: "njanum ind",
      profile_photo: "user2_profile.jpg"
    },
    {
      id: 3,
      name: "alfi vince",
      message: "Hi !",
      profile_photo: "user3_profile.jpg"
    }
  ];

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <Container>
      <Row>
        <Col md={4}>
          <h2>User List</h2>
          <ListGroup>
            {users.map((user) => (
              <ListGroup.Item key={user.id} action onClick={() => handleUserClick(user)}>
                {user.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={8}>
          <h2>Message Panel</h2>
          {selectedUser ? <MessagePanel user={selectedUser} /> : <p>Select a user to view messages</p>}
        </Col>
      </Row>
    </Container>
  );
};

export default MessageList;
