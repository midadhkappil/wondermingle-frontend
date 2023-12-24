import React from 'react';
import {  Dropdown, Row, Col, Nav } from 'react-bootstrap';
import ProfilePicPlaceholder from 'Components/ProfilePicPlaceholder';
import Image from 'react-bootstrap/Image';
import useAuth from 'hooks/useAuth';
import { setToken } from 'utils/storage';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';


const Profile = () => {
  const { setAuth,user } = useAuth()
  const navigate = useNavigate()
  const logout = () => {
    setAuth({
      isLoggedIn: false,
      user: null
    })
    navigate("/")
    setToken("")
    toast.success("Loggedout success")
  }

  return (
    <div className="container">
      <Row>
        <Col md={12}>
          <div id="content" className="content content-full-width">
            <div className="profile">
              <div className="profile-header">
                <div className="profile-header-cover"></div>
                <div className="profile-header-content">
                  <div className="profile-header-img">
                    <img src="" alt="" />
                  </div>
                  <div className="profile-header-info">
                    <Col>
                      {user.profilePicture ? (
                        <Image src={user.profilePicture} roundedCircle style={{ width: '40px', height: '40px' }} />
                      ) : <ProfilePicPlaceholder name={user.username} />}
                    </Col>
                    <Col>
                      <span className="fw-bold text-capitalize">{user.username}</span>
                    </Col>
                    <Col>
                      <span className="fw-bold text-capitalize">Country:  {user.country}</span>
                    </Col>
                    <Col>
                      <span className="fw-bold text-capitalize">Age:  {user.age}</span>
                    </Col>
                    <Col>
                      <span className="fw-bold text-capitalize">Gender: {user.gender}</span>
                    </Col>
                    <p className="m-b-10"></p>
                    <div className="container">
                    <Row>
      <Col md={12}>
        <div id="content" className="content content-full-width">
          <div className="d-flex justify-content-end mb-3">
            <Dropdown align="end"> 
              <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ backgroundColor: 'blue' }}>
                Settings
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Profile Management</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Theme</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Privacy Management</Dropdown.Item>
                <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </Col>
    </Row>
            </div>
                  </div>
                </div>
                <Nav variant="tabs" className="profile-header-tab nav nav-tabs">
                <div className="container">
      <Row>
        <Col md={12}>
          <div id="content" className="text-center">
            <div className="profile">
              <div className="profile-header">
                
                <Nav variant="tabs" className="profile-header-tab nav nav-tabs">
                  <Nav.Item>
                    <Nav.Link href="#/posts">Posts</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#/about">About</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#/photos">Photos</Nav.Link>
                  </Nav.Item>
                 
                </Nav>
              </div>
            </div>
            
          </div>
        </Col>
      </Row>
    </div>

                </Nav>
              </div>
            </div>
            
            
          </div>
        </Col>
      </Row>
    </div>
  )
};

export default Profile;
