import { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const BroadcastMessagePanel = () => {
    const [message, setMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSendMessage = () => {
        // Add your logic here to send the broadcast message
        // For example: call an API or perform the necessary action
        // For this example, let's just show an alert when the message is sent

        // Simulate sending the message by showing an alert
        setShowAlert(true);

        // Reset the message input after 2 seconds
        setTimeout(() => {
            setMessage('');
            setShowAlert(false);
        }, 2000);
    };

    return (
        <Container className="mt-4">
            <h2>Broadcast Message Panel</h2>
            <Form>
                <Form.Group controlId="formBroadcastMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter your broadcast message here..."
                        value={message}
                        onChange={handleMessageChange}
                    />
                </Form.Group>

                <Button variant="primary" onClick={handleSendMessage}>
                    Send Message
                </Button>
            </Form>

            {showAlert && (
                <Alert variant="success" className="mt-3">
                    Message Sent Successfully!
                </Alert>
            )}
        </Container>
    );
};

export default BroadcastMessagePanel;
