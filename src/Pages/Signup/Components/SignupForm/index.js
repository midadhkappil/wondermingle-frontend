import { Container, Form, Button } from 'react-bootstrap';
import { Formik } from "formik";

import { signup } from 'Pages/Signup/api';


const Signupform = () => {
    return (<div>
        <h1 className='text-center'>WONDER MINGLE</h1>
        <Container className="text-left">
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    debugger
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
                  await signup(user)
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
                            placeholder="name@example.com" S
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
                        <Button type="submit" disabled={isSubmitting}>
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