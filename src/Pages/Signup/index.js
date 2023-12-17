import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const SignUp = () => (
  <Container className="text-left">
    <main className="form-signup w-100 m-auto">
      <Form>
        <h1 className="h3 mb-3 fw-normal">Sign Up</h1>

        <Row >
          <Col md="4">
            <Form.Group className="mb-2">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>

            </Col>
            <Col md="4">

            <Form.Group className="mb-2">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter phone number" />
            </Form.Group>
             
            </Col>
            <Col md="4">


            <Form.Group className="mb-2">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
             
            </Col>
            <Col md="4">


            <Form.Group className="mb-2">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
             
            </Col>
            <Col md="4">


            <Form.Group className="mb-3">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
             
            </Col>
            <Col md="4">


            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>
              <Form.Select>
                <option>Male</option>
                <option>Female</option>

              </Form.Select>
            </Form.Group>
             
            </Col>
            <Col md="4">


            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" placeholder="Enter country" />
            </Form.Group>
             
            </Col>
            <Col md="4">


          </Col>
        </Row>

        <Button variant="primary" type="submit" className="mb-6">Sign Up</Button>
        <p className="mt-5 mb-3 text-muted">© 2023</p>
      </Form>
    </main>
  </Container>
);

export default SignUp;
