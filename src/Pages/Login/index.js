import { Container, Form, Button, Image } from 'react-bootstrap';

import logo from '../../Assets/Images/logo.avif';

const Login = () => (
  <Container className="text-center pt-5">
    <main className="form-signin w-50 m-auto">
      <Image src={logo} alt="" width="150" height="150" className="mb-4" roundedCircle />

      <h1 className="h3 mb-3 fw-normal">WONDER MINGLE</h1>
      <h2 className="h5 mb-3 fw-normal">Sign in</h2>

      <Form>
        <Form.Group className="mb-3">
          <Form.Floating>
            <Form.Control type="email" id="floatingInput" placeholder="name@example.com" />
            <Form.Label htmlFor="floatingInput">Email address</Form.Label>
          </Form.Floating>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Floating>
            <Form.Control type="password" id="floatingPassword" placeholder="Password" />
            <Form.Label htmlFor="floatingPassword">Password</Form.Label>
          </Form.Floating>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check>
            <Form.Check.Input type="checkbox" id="remember-me" />
            <Form.Check.Label htmlFor="remember-me">Remember me</Form.Check.Label>
          </Form.Check>
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mb-3">
          Sign in
        </Button>
      </Form>

    </main>
  </Container>
);

export default Login;
