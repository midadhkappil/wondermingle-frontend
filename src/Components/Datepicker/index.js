import React from 'react';
import { Form } from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ReactDatePicke = ({ label, selected, onChange, error, touched }) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <ReactDatePicker
        selected={selected}
        onChange={onChange}
        dateFormat="MM/dd/yyyy" // Customize date format if needed
        className={`form-control ${error && touched ? 'is-invalid' : ''}`}
      />
      <Form.Control.Feedback type="invalid">
        {error}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default ReactDatePicke;
