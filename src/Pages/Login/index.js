import { Container, Form, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import Bootstrap CSS
import logo from "../../Assets/Images/logo.avif";

const Login = () => (
    <Container className="text-center">
        <main className="form-signin w-100 m-auto">
            <Form>
                <Image src={logo} alt="" width="72" height="57" className="mb-4" />
                <h1 className="h3 mb-3 fw-normal">WONDER MINGLE</h1>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <Form.Floating className="mb-3">
                    <Form.Control type="email" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                    <Form.Control type="password" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                </Form.Floating>

                <Form.Check className="mb-3">
                    <Form.Check.Input type="checkbox" id="remember-me" />
                    <Form.Check.Label htmlFor="remember-me">Remember me</Form.Check.Label>
                </Form.Check>

                <Button variant="primary" type="submit" className="w-100 mb-3">Sign in</Button>
                <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
            </Form>
        </main>
    </Container>
);

export default Login;
