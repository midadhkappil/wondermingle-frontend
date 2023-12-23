import React from 'react';
import { Toast } from 'react-bootstrap';

const Notification = ({ show, onClose, message }) => {
  return (
    <Toast show={show} onClose={onClose} delay={3000} autohide>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
};

export default Notification;
