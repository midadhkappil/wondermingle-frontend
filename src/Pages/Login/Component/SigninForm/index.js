import { Container, Form, Button } from 'react-bootstrap';
import { Formik } from "formik";

import { login } from 'Pages/Signup/api';
import useAuth from 'hooks/useAuth';


const Signupform = () => {
    const {setUser} = useAuth()
    return (<div>
        <h1 className='text-center'>WONDER MINGLE</h1>
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

                    console.log(errors)
                    return errors;
                }}

                onSubmit={async (user, { setSubmitting }) => {
                    const response = await login(user)
                    localStorage.setItem("token", response.token)
                    setUser(response.user)
                    setSubmitting(false)
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
                                value={values.email} />
                        </Form.Group>

                        {errors.email && touched.email && errors.email}
                        <Form.Group controlId="passwordField">

                            <Form.Label>password</Form.Label>
                            <Form.Control type="password" placeholder="Enter your password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                             </Form.Group>



                        {errors.password && touched.password && errors.password}
                        <Button disabled={isSubmitting} type='submit'>
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
        </Container>
    </div>
    );
}

export default Signupform;