import React from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



const PostForm = ({ onSubmit }) => {
  const schema = yup.object().shape({
    content: yup.string().required('Where are you going?'),
    startDate: yup.date().required('Starting date is required'),
    endDate: yup.date().required('Ending date is required'),
    destination: yup.string().required('Destination is required'),
  });
  

  return (
    <Formik
      validationSchema={schema}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        await onSubmit(values);
        setSubmitting(false);
      }}
      initialValues={{
        content: '',
        startDate: null,
        endDate: null,
        destination: '',
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors, setFieldValue }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md="12">
              <Form.Group controlId="validationFormikContent">
                <Form.Label>Where are you going?</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Where are you going?"
                  name="content"
                  value={values.content}
                  onChange={handleChange}
                  isInvalid={!!errors.content && touched.content}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.content}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md="4">
              <Form.Group controlId="validationFormikStartDate">
                <Form.Label>Starting Date</Form.Label>
                <DatePicker
                  selected={values.startDate}
                  onChange={(date) => setFieldValue('startDate', date)}
                  dateFormat="MM/dd/yyyy" // Customize date format if needed
                  className={`form-control ${
                    errors.startDate && touched.startDate ? 'is-invalid' : ''
                  }`}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.startDate}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md="4">
              <Form.Group controlId="validationFormikEndDate">
                <Form.Label>Ending Date</Form.Label>
                <DatePicker
                  selected={values.endDate}
                  onChange={(date) => setFieldValue('endDate', date)}
                  dateFormat="MM/dd/yyyy" // Customize date format if needed
                  className={`form-control ${
                    errors.endDate && touched.endDate ? 'is-invalid' : ''
                  }`}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.endDate}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md="4">
              <Form.Group controlId="validationFormikDestination">
                <Form.Label>Destination</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Destination"
                  name="destination"
                  value={values.destination}
                  onChange={handleChange}
                  isInvalid={!!errors.destination && touched.destination}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.destination}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Button type="submit">POST</Button>
        </Form>
      )}
    </Formik>
  );
};

export default PostForm;
