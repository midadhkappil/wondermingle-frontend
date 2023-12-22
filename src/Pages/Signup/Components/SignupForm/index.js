
import { Container, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import { signup } from 'Pages/Signup/api';
import logo from "Assets/Images/logo.jpg";



const SignupForm = () => {
  return (
    <Container className="signup-container">
      <img src={logo} height={60} className="mb-3" />

      <h1 className="text-center">WONDER MINGLE</h1>
      <Formik
        initialValues={{ email: '', password: '', username: '', country: '', age: '', gender: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={async (user, { setSubmitting }) => {
          await signup(user);


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
                className={touched.email && errors.email ? 'input-error' : ''}
              />
              {errors.email && touched.email && <div className="error-msg">{errors.email}</div>}
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
                className={touched.password && errors.password ? 'input-error' : ''}
              />
              {errors.password && touched.password && <div className="error-msg">{errors.password}</div>}
            </Form.Group>


            <Form.Group className="mb-3" controlId="usernameField">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                className={touched.username && errors.username ? 'input-error' : ''}
              />
              {errors.username && touched.username && <div className="error-msg">{errors.username}</div>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="ageField">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your age"
                name="age"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.age}
                className={touched.age && errors.age ? 'input-error' : ''}
              />
              {errors.age && touched.age && <div className="error-msg">{errors.age}</div>}
            </Form.Group>

            {/* Add similar Form.Group components for gender and country */}

            <Form.Group className="mb-3" controlId="genderField">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.gender}
                className={touched.gender && errors.gender ? 'input-error' : ''}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                {/* Add other gender options if needed */}
              </Form.Control>
              {errors.gender && touched.gender && <div className="error-msg">{errors.gender}</div>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="countryField">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your country"
                name="country"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.country}
                className={touched.country && errors.country ? 'input-error' : ''}
              />
              {errors.country && touched.country && <div className="error-msg">{errors.country}</div>}
            </Form.Group>


            <Button type="submit" disabled={isSubmitting} className="submit-btn">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default SignupForm;