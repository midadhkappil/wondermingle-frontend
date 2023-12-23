import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Formik } from "formik";
import logo from "Assets/Images/logo.jpg";
import { getToken } from 'utils/storage';


import { login } from 'Pages/Signup/api';
import useAuth from 'hooks/useAuth';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

const Signupform = () => {
    const { setAuth } = useAuth();
    const { navigate } = useNavigate()

    return (
        <div>
            <Container className="d-flex flex-column align-items-center justify-content-center">
                <img src={logo} height={60} className="mb-3" />
                <h1 className="mb-4">WONDER MINGLE</h1>
            </Container>
            <Container className="text-left">
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <Formik
                            initialValues={{ email: '', password: '' }}
                            validationSchema={yup.object().shape({
                                email: yup.string().email().required(),
                                password: yup.string().required()
                            })}

                            onSubmit={async (user, { setSubmitting }) => {
                                const response = await login(user);
                                localStorage.setItem("token", response.token);
                          
                                setAuth({ isLoggedIn: true, user: response.user });

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
                                            isInvalid={!!errors.email}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.email && touched.email && errors.email}
                                        </Form.Control.Feedback>

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
                                            isInvalid={!!errors.email}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.password && touched.password && errors.password}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <div className="d-grid gap-2">

                                        <Button disabled={isSubmitting} type='submit' className='mt-3' fluid>
                                            Submit
                                        </Button>
                                    </div>

                                    <Row className="mt-3">
                                        <Col>
                                            <Link to="/forgot-password">Forgot Password</Link>
                                        </Col>
                                        <Col >
                                            <Link to="/signup">Don't have an account?</Link>
                                        </Col>
                                    </Row>
                                </Form>
                            )}
                        </Formik>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export const getCurrentUser = async (user) => {
    const response = await fetch("http://localhost:8080/user/current-user", {
        headers:
        {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`

        }
    });
    const jsonResponse = await response.json();
    return jsonResponse.data;
}

export default Signupform;
