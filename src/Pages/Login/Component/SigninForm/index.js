import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Formik } from "formik";
import logo from "Assets/Images/logo.jpg";

import { login } from 'Pages/Signup/api';
import useAuth from 'hooks/useAuth';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Signupform = () => {
    const { setAuth } = useAuth();
    const {navigate} = useNavigate()

    return (
        <div>
            <Container className="d-flex flex-column align-items-center justify-content-center">
                <img src={logo} height={60} className="mb-3" />
                <h1 className="mb-4">WONDER MINGLE</h1>
            </Container>
            <Container className="text-left">
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}

                    onSubmit={async (user, { setSubmitting }) => {
                        const response = await login(user);
                        localStorage.setItem("token", response.token);
                        setAuth({isLoggedIn: true, user: response.user});
                        
                        toast.success("LoggedIn success")
                        navigate("/");
                        setSubmitting(false);
                    }}
                   
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {errors.email && touched.email && errors.email}
                            </Form.Group>

                            <Form.Group controlId="passwordField">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter your password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                {errors.password && touched.password && errors.password}
                            </Form.Group>

                            <Button disabled={isSubmitting} type='submit'>
                                Submit
                            </Button>

                            <Row className="mt-3">
                                <Col>
                                    <Link to="/forgot-password">Forgot Password</Link>
                                </Col>
                                <Col>
                                    <Link to="/signup">Don't have an account?</Link>
                                </Col>
                            </Row>
                        </Form>
                    )}
                </Formik>
            </Container>
        </div>
    );
}

export default Signupform;
