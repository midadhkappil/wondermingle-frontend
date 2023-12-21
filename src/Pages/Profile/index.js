import {  Nav,Container, Row, Col, Card, Button, Tabs, Tab } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Profile = () => {
    return (
        <section className="h-100 gradient-custom-2">
            <Container className="py-5 h-100">
                <Row className="d-flex justify-content-center align-items-center h-100">
                    <Col lg={9} xl={7}>
                        <Card>
                            <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                                    <Card.Img
                                        src=""
                                        alt="Generic placeholder image"
                                        className="img-fluid img-thumbnail mt-4 mb-2"
                                        style={{ width: '150px', zIndex: 1 }}
                                    />
                                    <div>
                                      

                                    </div>
                                </div>
                                <div className="ms-3" style={{ marginTop: '130px' }}>
                                    <h5>Anshiq</h5>
                                    <p>NYC</p>
                                </div>
                            </div>
                            <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                                <div className="d-flex justify-content-end text-center py-1">
                                    {/* Content for Photos, Followers, Following */}
                                </div>
                            </div>
                            <Card.Body className="p-4 text-black">
                                {/* Content for About, Recent photos */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center align-items-center h-100">
                    <Col lg={9} xl={7}>
                        <Card>
                            {/* ... (previous card content) */}
                            <Card.Body className="p-4 text-black">
                                <Tabs defaultActiveKey="overview" id="profile-tabs">
                                    <Tab eventKey="overview" title="Overview">
                                        <div className="mb-5">
                                            {/* Content for Overview */}
                                        </div>
                                    </Tab>
                                    <Tab eventKey="connections" title="Connections">
                                        <div className="mb-5">
                                            {/* Content for Connections */}
                                        </div>
                                    </Tab>
                                    <Tab eventKey="blogspot" title="Blogspot">
                                        <div className="mb-5">
                                            {/* Content for Blogspot */}
                                        </div>
                                    </Tab>
                                </Tabs>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>

    );
};

export default Profile;
